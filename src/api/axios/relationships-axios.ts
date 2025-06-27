import { IRelationships } from '../types';
import { apiClient } from './axios';
import { getCurrentLocalDateISO } from 'helpers/utils';


export async function getTodayRelationships(): Promise<IRelationships> {
  const response = await apiClient.get(`/relationships/${getCurrentLocalDateISO()}`);
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  return response.data as IRelationships;
}

export async function saveRelationships(data: IRelationships): Promise<void> {
  const response = await apiClient.put(`/relationships/update`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status !== 200) {
    throw new Error('Failed to update relationships');
  }
}