import {Routes as Router, Route } from 'react-router-dom'
import { Dashboard } from 'pages/Dashboard/Dashboard'
import { JournalEditor } from 'pages/JournalEditor/JournalEditor';
import { SelectedDateProvider } from 'pages/Dashboard/SelectedDateContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const Routes = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SelectedDateProvider>
        <Router>
            <Route path='/' element={<JournalEditor />} />
            <Route path='/dashboard' element={<Dashboard />} />        
        </Router>
      </SelectedDateProvider>
    </LocalizationProvider>
  )
}

export default Routes