import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchJournalEntry = () => {
  const [journalEntry, setJournalEntry] = useState(null);

  const fetchJournalEntry = async () => {
    try {
      const response = await axios.get('/api/journalEntry');
      setJournalEntry(response.data);
    } catch (error) {
      console.error("Error fetching journal entry: ", error);
    }
  };

  useEffect(() => {
    fetchJournalEntry();
  }, []);

  return { journalEntry, fetchJournalEntry };
}