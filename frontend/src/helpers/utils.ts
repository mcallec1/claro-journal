import dayjs from 'dayjs';

export function getCurrentLocalDateISO() {
  return dayjs().format('YYYY-MM-DD');
}


export function getLocalDateISO(date: Date) {
  return dayjs(date).format('YYYY-MM-DD');
}