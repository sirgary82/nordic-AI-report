import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlatformPage from './pages/PlatformPage';
import PilotProgramPage from './pages/PilotProgramPage';
import LegalPage from './pages/LegalPage';
import FinancialPage from './pages/FinancialPage';
import GovernmentPage from './pages/GovernmentPage';
import HealthcarePage from './pages/HealthcarePage';
import ContactPage from './pages/ContactPage';
import NordicAIReportPage from './pages/NordicAIReportPage';
const App = () => {
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(Router, { children: _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', minHeight: '100vh' }, children: [_jsx(Navbar, {}), _jsx(Box, { component: "main", sx: { flexGrow: 1 }, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(NordicAIReportPage, {}) }), _jsx(Route, { path: "/platform", element: _jsx(PlatformPage, {}) }), _jsx(Route, { path: "/pilot-program", element: _jsx(PilotProgramPage, {}) }), _jsx(Route, { path: "/legal", element: _jsx(LegalPage, {}) }), _jsx(Route, { path: "/financial", element: _jsx(FinancialPage, {}) }), _jsx(Route, { path: "/government", element: _jsx(GovernmentPage, {}) }), _jsx(Route, { path: "/healthcare", element: _jsx(HealthcarePage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) })] }) }), _jsx(Footer, {})] }) })] }));
};
export default App;
//# sourceMappingURL=App.js.map