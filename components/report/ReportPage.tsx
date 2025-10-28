import React from 'react';
import { Box } from '@mui/material';

const ReportPage: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/images/LKDV_website_layout_1_57PM.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2,
      },
      '&::after': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(244, 246, 248, 0.2)',
        zIndex: -1,
      }
    }}>
      {children}
    </Box>
  );
};

export default ReportPage;
