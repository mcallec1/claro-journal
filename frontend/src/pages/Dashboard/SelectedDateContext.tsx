import React, { createContext, useState, useContext } from 'react';

const SelectedDateContext = createContext<[Date, (date: Date) => void] | undefined>(undefined);

type Props = {
  children?: React.ReactNode
};

export const SelectedDateProvider = ({children}: Props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <SelectedDateContext.Provider value={[selectedDate, setSelectedDate]}>
      {children}
    </SelectedDateContext.Provider>
  );
};

export const useSelectedDate = () => {
  const context = useContext(SelectedDateContext);
  if (!context) {
    throw new Error('useSelectedDate must be used within a SelectedDateProvider');
  }
  return context;
};
