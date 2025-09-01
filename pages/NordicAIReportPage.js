import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OpportunitySection from '../components/report/OpportunitySection';
import TechWaveSection from '../components/report/TechWaveSection';
import AdvantageSection from '../components/report/AdvantageSection';
import MarketSection from '../components/report/MarketSection';
import ReportPage from '../components/report/ReportPage';
const NordicAIReportPage = () => {
    const { t } = useTranslation();
    return (_jsxs(ReportPage, { children: [_jsx(Box, { sx: { py: 8, textAlign: 'center', color: 'text.primary' }, children: _jsxs(Container, { maxWidth: "md", children: [_jsx(Typography, { variant: "h2", component: "h1", gutterBottom: true, sx: { color: 'primary.main', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }, children: t('report.title') }), _jsx(Typography, { variant: "h5", component: "p", sx: { mb: 4, opacity: 0.9 }, children: t('report.intro') })] }) }), _jsx(OpportunitySection, {}), _jsx(TechWaveSection, {}), _jsx(AdvantageSection, {}), _jsx(MarketSection, {})] }));
};
export default NordicAIReportPage;
//# sourceMappingURL=NordicAIReportPage.js.map