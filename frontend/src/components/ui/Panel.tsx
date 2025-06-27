import { Box, Typography } from "@mui/material";

export const Panel = ({ title, children }) => {
  return (
    <Box p={2}>
      <Box display="flex" flexDirection="column" height="100%" p={2}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}