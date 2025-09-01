import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import PilotProgramPage from './pages/PilotProgramPage';
import IndustriesPage from './pages/IndustriesPage';
import LegalPage from './pages/LegalPage';
import FinancialPage from './pages/FinancialPage';
import GovernmentPage from './pages/GovernmentPage';
import HealthcarePage from './pages/HealthcarePage';
import ContactPage from './pages/ContactPage';

import NordicAIReportPage from './pages/NordicAIReportPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<NordicAIReportPage />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/pilot-program" element={<PilotProgramPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/financial" element={<FinancialPage />} />
              <Route path="/government" element={<GovernmentPage />} />
              <Route path="/healthcare" element={<HealthcarePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;