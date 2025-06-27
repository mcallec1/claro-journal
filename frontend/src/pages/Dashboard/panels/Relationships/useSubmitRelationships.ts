import { useCallback } from 'react';
import { saveRelationships } from 'api/axios/relationships-axios';
import { IRelationships } from "api/types";

export const useSubmitRelationships = () => {


  const submitRelationships = useCallback(async (data: IRelationships, journalEntryId?: string) => {
    try {

      // Add journalEntryId to the form data
      const formData = {
        ...data,
        journalEntryId: journalEntryId
      };

      await saveRelationships(formData);

      console.log('Relationships saved successfully!');
    } catch (error) {
      console.error("Error saving relationships: ", error);
    }
  }, []);

  return submitRelationships;
}