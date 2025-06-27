import { FC, ReactNode } from 'react';
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Define the prop types using an interface
interface SidenavCollapseProps {
  icon: ReactNode;
  name: string | undefined;
  active?: boolean;
}

export const SidenavCollapse: FC<SidenavCollapseProps> = ({
  icon,
  name,
  active = false,
}) => (
  <>
    <ListItem component="li">
      <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '0.675rem 0.8rem 0.675rem 1rem',
            cursor: 'pointer',
          }}
              >
        <ListItemIcon
        sx={{
            minWidth: '2rem', 
            minHeight: '2rem', 
            background: active ? '#17c1e8' : '#e9ecef',
            borderRadius: '0.5rem',
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(20, 20, 20, 0.12), 0rem 0.125rem 0.25rem -0.0625rem rgba(20, 20, 20, 0.07)'
          }}
        >
          {typeof icon === "string" ? (
            <Icon
              sx={{ color: 'white', fontSize: '1.25rem' }}
            >{icon}</Icon>
          ) : (
            icon
          )}
        </ListItemIcon>

        <ListItemText
          primary={name}
          sx={{marginLeft: '0.8rem',                
              '& span ': {
              color: '#344767',
              fontWeight: '500',
              fontSize: '0.875rem',
              lineHeight: '0',
              }
        
        
        }}
          />
      </Box>
    </ListItem>
  </>
);
