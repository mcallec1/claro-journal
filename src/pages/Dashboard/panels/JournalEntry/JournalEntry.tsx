import { Typography, Button } from "@mui/material";
import dayjs from 'dayjs';
import { Panel } from "components/ui/Panel";
import { useSelectedDate } from "pages/Dashboard/SelectedDateContext";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Props {
  journalEntry?: string;
  handleClick: () => void;
}

export const JournalEntry = ({ journalEntry, handleClick }: Props) => {

  // Inside your Dashboard component
  const [selectedDate, setSelectedDate] = useSelectedDate();



  return (
    <Panel title={dayjs().format('MMMM D, YYYY')}>
      <DatePicker
        label="Date"
        value={dayjs(selectedDate)}
        onChange={(newValue) => newValue && setSelectedDate(newValue.toDate())}
        // renderInput={(params) => <TextField {...params} />}
      />
      <Typography variant="body2" color="text" sx={{fontSize: '18px'}}>
        {journalEntry && journalEntry.substring(0, 250) + "..."}
      </Typography>
      <p><br /></p>
      <Button variant="outlined" onClick={handleClick}>Continue writing</Button>
    </Panel>
  );
}