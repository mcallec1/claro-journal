import { useCallback, useEffect, useRef, useState } from 'react';
import { BoldExtension, PlaceholderExtension } from 'remirror/extensions';
import { Remirror, useRemirror, EditorComponent } from '@remirror/react';
import {
  updateJournalEntry,
  getTodayJournalEntry,
} from 'api/axios/journal-axios';
import { IJournalEntry } from 'api/types';
import dayjs from 'dayjs';
import { CountExtension } from '@remirror/extension-count';
import Typography from '@mui/material/Typography';
import { CustomComponent } from './JournalCustomComponent';
import { Footer } from './Footer';
import './journal-editor.css';

const STORAGE_KEY = 'journal-editor-content';

const CurrentDate = () => {
  const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  return (
    <Typography
      className='journal-date'
      variant='h4'
      component='div'
      fontWeight='bold'
      mb={4}
    >
      {currentDate}
    </Typography>
  );
};

export const JournalEditor = () => {
  const [saved, setSaved] = useState(false);
  const [, setTriggerRender] = useState(false);

  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new PlaceholderExtension({ placeholder: `Write something...` }),
      new CountExtension(),
    ],
    selection: 'end',
    stringHandler: 'html',
  });

  const saveTimeoutRef = useRef<number | null>(null);

  const handleEditorChange = useCallback(json => {
    //has the actual contents of the editor changed?
    const editorHasChanged =
      JSON.stringify(state.doc) !== JSON.stringify(json.state.doc);

    if (!editorHasChanged) return;

    setSaved(false);

    let currentLocalDate = dayjs().format('YYYY-MM-DD');
    // const lastSavedDate = localStorage.getItem("last_saved_date");
    const entry: IJournalEntry = {
      entryDate: currentLocalDate,
      journalContent: JSON.stringify(json.state.doc),
      timestamp: Date.now(),
    };

    // Store in local storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
    localStorage.setItem('last_saved_date', currentLocalDate);

    // Cancel any pending save to Azure
    if (saveTimeoutRef.current) {
      window.clearTimeout(saveTimeoutRef.current);
    }

    // Schedule a new save to Azure
    saveTimeoutRef.current = window.setTimeout(() => {
      updateJournalEntry(entry) // call the function
        .then(data => {
          console.log('Data saved successfully!', data);
          setSaved(true);
          saveTimeoutRef.current = null; // Clear the timeout
        })
        .catch(err => {
          setSaved(true);
          console.error('Error saving data:', err);
        });
    }, 10000); // delay of 10 seconds
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const journalEntry = await getTodayJournalEntry();

      // Fetch from local storage
      const localStorageDataRaw = window.localStorage.getItem(STORAGE_KEY);
      const localStorageData = localStorageDataRaw
        ? JSON.parse(localStorageDataRaw)
        : null;

      let doc;
      let lastEntryDate;

      // Determine which data to use, Azure or Local storage
      if (
        localStorageData &&
        (!journalEntry || localStorageData.timestamp > journalEntry.timestamp)
      ) {
        doc = localStorageData.journalContent;
        lastEntryDate = dayjs(localStorageData.timestamp).format('YYYY-MM-DD');
      } else {
        if (journalEntry && journalEntry.journalContent !== '') {
          doc = journalEntry.journalContent;
          lastEntryDate = dayjs(journalEntry.timestamp).format('YYYY-MM-DD');
        }
      }

      // If we have no data to use, do nothing
      if (!doc) {
        return;
      }

      // Create editor state based on whether the last entry was made today
      const today = dayjs().format('YYYY-MM-DD');

      if (doc && lastEntryDate === today) {
        manager.view.updateState(
          manager.createState({ content: JSON.parse(doc) })
        );

        //forcing a re-render so the word counter updates
        //TODO - find a more elegant way to do this
        setTriggerRender(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <div className='content-container'>
            <div className='header' />
            <CurrentDate />
            <Remirror
              manager={manager}
              initialContent={state}
              onChange={handleEditorChange}
            >
              <EditorComponent />
              <CustomComponent />
              <Footer saved={saved} />
            </Remirror>
          </div>
        </div>
      </main>
    </>
  );
};
