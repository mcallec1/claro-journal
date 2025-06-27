import { useCallback, useEffect, useState } from 'react';
import { useEditorEvent, useEditorView, useCommands } from '@remirror/react';


export const CustomComponent = () => {

  const [yPos, setYPos] = useState(0);

  const view = useEditorView();
  const { focus } = useCommands();

  useEffect(() => {
    focus();
  }, []);

  const handleClick = useCallback(() => {

    //TODO - maybe we can check if the caretPosition has changed and then check for scrolling
    //       yeah I think that would work?
    //       what happens if we paste code? hmm, that's a new problem to solve
    // if (event.key === "Enter") {
      // TODO - this needs to happen even when pressing a key. Can we raise an even if the cursor moves to the next line?

      // console.log('event.key', event.key)


      const caretPosition = view.state.selection.head;
      const rect = view.coordsAtPos(caretPosition);
      const caretY = rect.top;

      //const limitY = document.documentElement.clientHeight / 2;

      // const selection = window.getSelection();
      // console.log('selection', selection)
      // if (selection?.rangeCount !== 0) {
      //   const range = selection?.getRangeAt(0).cloneRange();
      //   // console.log('range', range)
      // }

      const limitY = document.documentElement.clientHeight - 200;
    
      //TODO - Enter isn't triggering this all the time
      // I need to find out why

      if (caretY >= limitY) {

        //save the caret position
        if (caretY > yPos)  {
          setYPos(caretY);

          console.log('scrolling')
          window.scrollTo({
            // TODO - this needs to be calculated..
            top: window.scrollY + 67,  
          });
      }
    }

    // }
  
    return false;
  }, []);

  useEditorEvent('keyup', handleClick);
  useEditorEvent('keydown', handleClick);

  return <></>;
}
