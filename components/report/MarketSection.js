import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChartComponent from './Chart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const MarketSection = () => {
    const { t } = useTranslation();
    const marketChartData = {
        labels: [t('market.chart_label_primary'), t('market.chart_label_expansion')],
        datasets: [{
                label: t('market.chart_label_focus'),
                data: [70, 30],
                backgroundColor: [
                    'rgba(0, 242, 234, 1)',
                    'rgba(127, 140, 141, 1)'
                ],
                borderColor: '#f4f6f8',
                borderWidth: 2
            }]
    };
    return (_jsx(Box, { component: "section", sx: { py: { xs: 8, md: 12 } }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Typography, { variant: "h2", component: "h2", gutterBottom: true, children: t('market.title') }), _jsx(Typography, { variant: "h5", color: "text.secondary", children: t('market.subtitle') })] }), _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsxs(Grid, { item: true, xs: 12, md: 6, children: [_jsx(Typography, { variant: "h3", component: "h3", gutterBottom: true, children: t('market.focus_title') }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { mb: 2 }, children: t('market.focus_desc') }), _jsxs(List, { children: [_jsxs(ListItem, { children: [_jsx(ListItemIcon, { children: _jsx(CheckCircleIcon, { color: "secondary" }) }), _jsx(ListItemText, { primary: t('market.legal_primary'), secondary: t('market.legal_secondary') })] }), _jsxs(ListItem, { children: [_jsx(ListItemIcon, { children: _jsx(CheckCircleIcon, { color: "secondary" }) }), _jsx(ListItemText, { primary: t('market.healthcare_primary'), secondary: t('market.healthcare_secondary') })] }), _jsxs(ListItem, { children: [_jsx(ListItemIcon, { children: _jsx(CheckCircleIcon, { color: "secondary" }) }), _jsx(ListItemText, { primary: t('market.financial_primary'), secondary: t('market.financial_secondary') })] })] })] }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(Card, { children: _jsx(CardContent, { sx: { height: 400 }, children: _jsx(ChartComponent, { type: "doughnut", data: marketChartData }) }) }) })] })] }) }));
};
export default MarketSection;
//# sourceMappingURL=MarketSection.js.map