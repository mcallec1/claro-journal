import { Select, MenuItem } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
    name: string;
    defaultValue?: string;
    options: string[];
    placeholder: string;
}
 


export const DropdownListController = ({ name, options, placeholder } : Props) => {

  const { control } = useFormContext();


  return (
    <Controller
      name={name}
      control={control}
      // defaultValue={defaultValue}
      render={({
        field: { onChange, ref, value, ...fields },
      }) => (
        <Select
            {...fields}
            id={name}
            inputRef={ref}
            name={name}
            value={value ?? ''} 
            variant="outlined" 
            size="small"
            displayEmpty
            onChange={(event) => {                
                onChange(event); // Update the form state
              }}
        >   
            <MenuItem value="">{placeholder}</MenuItem>             
            {options && options.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
        </Select>
      )}
    />
  );
};
