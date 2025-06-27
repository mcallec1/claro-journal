import { useQuery } from 'react-query';
import { getTodayInsights, getExistingDailyInsights } from '../axios/daily-insights-axios';

export function useTodayInsights() {
  const { isLoading, data, refetch } = useQuery('todayInsights', getTodayInsights, { enabled: false });
  return { isLoading, data, refetch };
}

export function useExistingDailyInsights(date : Date) {

  console.log("date", date);
  const { isLoading, data, refetch } = useQuery(['existingDailyInsights',date], () => getExistingDailyInsights(date), { enabled: false });
  return { isLoading, data, refetch };
}