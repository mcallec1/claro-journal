import { Box, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

import { DropdownListController } from "components/FormControllers/DropdownListController";

const relationshipTypes = ["Friend", "Mother", "Sister", "Son", "Daughter", "Manager", "Coworker", "Colleague"];


interface Props {
  field: FieldValues;
  index: number;
}


export const RelationshipItem = ({ field, index } : Props) => {

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <Box marginRight={2} width='150px'>
        <Typography variant="body2" color="text" sx={{fontSize: '18px'}}>{field.name}</Typography>
      </Box>
      <Box width={200}>
      <DropdownListController 
          name={`people[${index}].relationship`} 
          defaultValue='Friend' 
          options={relationshipTypes}
          placeholder="Select relationship..." />
      </Box>
    </li>
  );
}