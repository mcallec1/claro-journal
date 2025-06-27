import { useQuery, useMutation } from 'react-query';
import { getTodayRelationships, saveRelationships } from '../axios/relationships-axios';

export function useTodayRelationships() {
  return useQuery('todayRelationships', getTodayRelationships);
}

// export function useTodayRelationships() {
//   return useQuery('todayRelationships', getTodayRelationships);
// }


export function useSaveRelationships() {
  return useMutation(saveRelationships);
}