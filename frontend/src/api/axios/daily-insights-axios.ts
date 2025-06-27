import { IInsightsDay } from '../types';
import { apiClient } from './axios';
import { getLocalDateISO, getCurrentLocalDateISO } from 'helpers/utils';



export async function getTodayInsights(): Promise<IInsightsDay> {

  const response = await apiClient.get(`/dailyinsights/${getCurrentLocalDateISO()}`);
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  return response.data as IInsightsDay;
}

export async function getExistingDailyInsights(date : Date): Promise<IInsightsDay | undefined> {
  const response = await apiClient.get(`/dailyinsights/existing/${getLocalDateISO(date)}`);
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  if ((response.status as number) === 204) {
    return undefined;
  }
  return response.data as IInsightsDay;
}