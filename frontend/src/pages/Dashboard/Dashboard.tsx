import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Shop from "theme/Icons/Shop";
import Office from "theme/Icons/Office";
import CreditCard from "theme/Icons/CreditCard";
import Link from "@mui/material/Link";
import { SidenavCollapse } from "pages/Dashboard/SidenavCollapse";
import { DashboardContent } from "pages/Dashboard/DashboardContent";
import { LogoutButton } from 'components/Auth/LogoutButton';

const drawerWidth = 250;

const routes = [
  {
    type: "collapse",
    name: "Today",
    key: "today",
    route: "/today",
    icon: <Shop color='white' size="12px" />,
    component: {},
    noCollapse: true,
    active: true,
  },
  {
    type: "collapse",
    name: "Insights",
    key: "insights",
    route: "/insights",
    icon: <Office color='rgba(0, 0, 0, 0.54)' size="12px" />,
    component: {},
    noCollapse: true,
    active: false,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "settings",
    route: "/profile",
    icon: <CreditCard size="12px" />,
    component: {},
    noCollapse: true,
    active: false,
  },

 
];


export const Dashboard = () => {

  const renderRoutes = routes.map(({ name, icon, key, route, active }) => {
    let returnValue;
  
      returnValue = (
        <Link
          href={route}
          key={key}
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={active}
          />
        </Link>
      ) 
  
    return returnValue;
  });


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', background: '#f8f9fa' }}>

      <CssBaseline />
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,          
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRadius: '20px',
            background: 'white',
            boxShadow: '0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)',
            mt: 2,
            ml: 2,
            mr: 2,
            border: 0,
          },
        }}
        variant="permanent"
        anchor="left"
      >

        <Box sx={{ display: 'flex', justifyContent: 'center', width:'100%' }}>
          <Box sx={{ width:'90px', height: '90px', mt: 3, mb: 1 }}>
            <img src="journal-logo4.png" />
          </Box>
        </Box>
        <Divider />
        <List>{renderRoutes}</List>
        <LogoutButton />
       
      </Drawer>
      <Box
        component="main"
        mt={6}
        ml={2}
        sx={{ flexGrow: 1, bgcolor: '#f8f9fa', p: 2 }}
      >
      <DashboardContent />
      </Box>
    </Box>
  );
}
