import React from 'react';
import { Box, Container } from '@mui/material';

interface PageContainerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  darkOverlay?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  backgroundImage,
  darkOverlay = false,
}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        '&::before': darkOverlay ? {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        } : {},
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: 4,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default PageContainer;
