import { useEffect } from 'react';

import { Box, Button, CircularProgress } from "@mui/material";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";

import { Panel } from "components/ui/Panel";
import { RelationshipItem } from './RelationshipItem';
import { useSubmitRelationships } from './useSubmitRelationships';
import { IRelationships } from "api/types";

import { DevTool } from '@hookform/devtools';

interface Props {
  relationships?: IRelationships;
  journalEntryId?: string;
}

export const Relationships = ({ relationships, journalEntryId } : Props) => {

  const methods = useForm<IRelationships>({
    defaultValues: {
      journalEntryId: journalEntryId,
      people: relationships ? relationships.people : []
    }
  });

  const { control, handleSubmit, reset } = methods;

  const { fields } = useFieldArray({
    control,
    name: "people"
  });

  const submitRelationships = useSubmitRelationships();


  useEffect(() => {
    reset({ people: relationships ? relationships.people : [] });
  }, [relationships, reset]);


  return (
    <FormProvider {...methods}>
      <Panel title="Relationships">
      <form onSubmit={handleSubmit((data) => submitRelationships(data, journalEntryId))}>
          <Box mb={1} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            {/* if we have the journal entry loaded then show a spinner if we haven't got the relationships */}
            { !relationships && <CircularProgress /> }

            { relationships && (
              <ul style={{ padding: 0, width: '100%' }}>
                {fields.map((field, index) => (
                  <RelationshipItem
                    index={index}
                    key={field.id}
                    field={field}          
                  />
                ))}
              </ul>
            )}
          </Box>
          { relationships && (
            <Box mt={3}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Box>
           )}
        </form>
      </Panel>
      <DevTool control={control} />
    </FormProvider>
  );
}