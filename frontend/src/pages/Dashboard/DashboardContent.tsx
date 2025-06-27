import { useEffect } from "react";
import { Card, Box, Stack} from "@mui/material";
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { styled } from "@mui/material/styles";

import { useJournalEntryForDate } from "api/query-hooks/useJournalQueries";
import { useTodayRelationships } from "api/query-hooks/useRelationshipQueries";
import { useTodayInsights, useExistingDailyInsights } from "api/query-hooks/useDailyInsightsQueries";

import { JournalEntry } from './panels/JournalEntry/JournalEntry';
import { Relationships } from './panels/Relationships/Relationships';
import { TodaysInsights } from './panels/DailyInsights/TodayInsights';
import { useSelectedDate } from "pages/Dashboard/SelectedDateContext";

import { IInsightsDay } from "api/types";

// Define the styled Card component
const InsightsCard = styled(Card)({
  width: '700px',
  borderRadius: '20px',
  background: 'white',
  boxShadow: '0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)',
});


export const DashboardContent = () => {

  const [selectedDate ] = useSelectedDate();

  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  const { data: journalEntry } = useJournalEntryForDate(selectedDate);
  const { data: relationships } = useTodayRelationships();
  const { data: existingInsights, refetch: refetchExistingInsights } = useExistingDailyInsights(selectedDate);
  const { data: todayInsights, refetch: refetchNewInsights, isLoading } = useTodayInsights();

  const [insights, setInsights] = useState<IInsightsDay>();

  // if the date changes, fetch the any existing insights
  useEffect(() => {
    if (journalEntry) {
      refetchExistingInsights();
    }
  }, [selectedDate]);
  

  useEffect(() => {
    if (existingInsights) {
      setInsights(existingInsights);
    }
  }, [existingInsights]);

  useEffect(() => {
    if (todayInsights) {
      setInsights(todayInsights);
    }
  }, [todayInsights]);

  const fetchExistingInsights = () => {
    if (journalEntry) {
      refetchExistingInsights();
    }
  }

  // Load the existing insights once journalEntry has loaded
  useEffect(() => {
    if (journalEntry) {
      fetchExistingInsights();
    }
  }, [journalEntry]);

  //TODO - change the name of InsightsCard to be more generic (it's not just for insights)
  return (   
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 0 }}>

      <Stack spacing={2}>
        
        <InsightsCard>
          <JournalEntry journalEntry={journalEntry?.journalText} handleClick={handleClick} />
        </InsightsCard>

        <InsightsCard>
          <Relationships relationships={relationships} journalEntryId={journalEntry?.id} />
        </InsightsCard>

        <InsightsCard>
          <TodaysInsights insights={insights} fetchInsights={refetchNewInsights} isLoading={isLoading}  />
        </InsightsCard>
      </Stack>
    </Box>
  )
}