import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useHelpers } from '@remirror/react';

interface Props {
  saved: boolean;
}

export const Footer = ({ saved }: Props) => {
  const [lastSavedTime, setLastSavedTime] = useState<Date | null>(null);
  const { getWordCount } = useHelpers(true);
  const count = getWordCount();

  useEffect(() => {
    if (saved) {
      setLastSavedTime(new Date());
    }
  }, [saved]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (lastSavedTime) {
        setLastSavedTime(new Date(lastSavedTime.getTime() + 5000));
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [lastSavedTime]);

  const elapsedSeconds = lastSavedTime
    ? Math.floor((new Date().getTime() - lastSavedTime.getTime()) / 1000)
    : null;

  const navigate = useNavigate();
  const handleClick = () => navigate('/dashboard');

  return (
    <footer>
      <div className='footer-inner'>
        <div className='secondary-text'>
          {count} {count === 1 ? 'word' : 'words'}
        </div>
        <Button variant='outlined' onClick={handleClick}>
          Done writing
        </Button>
        <div className='saved-message'>
          {lastSavedTime &&
            (elapsedSeconds === 0
              ? 'Saved'
              : `Saved: ${elapsedSeconds} seconds ago`)}
        </div>
      </div>
    </footer>
  );
};
