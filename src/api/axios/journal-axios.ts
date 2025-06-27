import { IJournalEntry } from '../types';
import { apiClient } from './axios';
import { getCurrentLocalDateISO, getLocalDateISO } from 'helpers/utils';



export const updateJournalEntry = async (entry: IJournalEntry) => {
  const response = await apiClient.put(`/JournalEntries/Date/${entry.entryDate.toString()}`, entry);
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  return response.data;
};

export async function getJournalEntryForDate(date : Date): Promise<IJournalEntry> {
  const response = await apiClient.get(`/JournalEntries/Date/${getLocalDateISO(date)}`);
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  return response.data as IJournalEntry;
}

export async function getTodayJournalEntry(): Promise<IJournalEntry> {
  const response = await apiClient.get(`/JournalEntries/Date/${getCurrentLocalDateISO()}`);
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  return response.data as IJournalEntry;
}