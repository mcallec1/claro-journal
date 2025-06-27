import { useQuery, useMutation } from 'react-query';
import { updateJournalEntry, getTodayJournalEntry, getJournalEntryForDate } from '../axios/journal-axios';

export function useTodayJournalEntry() {
  return useQuery('todayJournalEntry', getTodayJournalEntry);
}

export function useJournalEntryForDate(date: Date) {
  return useQuery(['journalEntryForDate',date], ()=> getJournalEntryForDate(date));
}


export function useUpdateJournalEntry() {
  return useMutation(updateJournalEntry);
}