import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChartComponent from './Chart';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (_jsx("div", { role: "tabpanel", hidden: value !== index, id: `tech-wave-tabpanel-${index}`, "aria-labelledby": `tech-wave-tab-${index}`, ...other, children: value === index && (_jsx(Box, { sx: { p: 3 }, children: children })) }));
}
const TechWaveSection = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const confidentialChartData = {
        labels: ['2023', '2030'],
        datasets: [{
                label: t('techwave.confidential_chart_label'),
                data: [1.38, 40],
                backgroundColor: 'rgba(0, 242, 234, 0.2)',
                borderColor: 'rgba(0, 242, 234, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(0, 242, 234, 1)',
                tension: 0.1
            }]
    };
    const ragChartData = {
        labels: ['2024', '2030'],
        datasets: [{
                label: t('techwave.rag_chart_label'),
                data: [1.2, 11.0],
                backgroundColor: 'rgba(0, 242, 234, 0.2)',
                borderColor: 'rgba(0, 242, 234, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(0, 242, 234, 1)',
                tension: 0.1
            }]
    };
    const agenticChartData = {
        labels: ['2025', '2032'],
        datasets: [{
                label: t('techwave.agentic_chart_label'),
                data: [13.8, 140],
                backgroundColor: 'rgba(0, 242, 234, 0.2)',
                borderColor: 'rgba(0, 242, 234, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(0, 242, 234, 1)',
                tension: 0.1
            }]
    };
    return (_jsx(Box, { component: "section", sx: { py: { xs: 8, md: 12 } }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Typography, { variant: "h2", component: "h2", gutterBottom: true, children: t('techwave.title') }), _jsx(Typography, { variant: "h5", color: "text.secondary", children: t('techwave.subtitle') })] }), _jsx(Box, { sx: { borderBottom: 1, borderColor: 'divider' }, children: _jsxs(Tabs, { value: value, onChange: handleChange, centered: true, children: [_jsx(Tab, { label: t('techwave.tab_confidential') }), _jsx(Tab, { label: t('techwave.tab_rag') }), _jsx(Tab, { label: t('techwave.tab_agentic') })] }) }), _jsx(TabPanel, { value: value, index: 0, children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsxs(Grid, { item: true, xs: 12, md: 6, children: [_jsx(Typography, { variant: "h3", component: "h3", gutterBottom: true, children: t('techwave.confidential_title') }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { mb: 2 }, children: t('techwave.confidential_desc') }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#00f2ea' }, children: t('techwave.confidential_market_label') }), " ", t('techwave.confidential_market_value')] }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#00f2ea' }, children: t('techwave.confidential_growth_label') }), " ", t('techwave.confidential_growth_value')] }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#34495e' }, children: t('techwave.confidential_local_label') }), " ", t('techwave.confidential_local_value')] })] }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(Card, { children: _jsx(CardContent, { sx: { height: 400 }, children: _jsx(ChartComponent, { type: "line", data: confidentialChartData }) }) }) })] }) }), _jsx(TabPanel, { value: value, index: 1, children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsxs(Grid, { item: true, xs: 12, md: 6, children: [_jsx(Typography, { variant: "h3", component: "h3", gutterBottom: true, children: t('techwave.rag_title') }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { mb: 2 }, children: t('techwave.rag_desc') }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#00f2ea' }, children: t('techwave.rag_market_label') }), " ", t('techwave.rag_market_value')] }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#00f2ea' }, children: t('techwave.rag_growth_label') }), " ", t('techwave.rag_growth_value')] }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#34495e' }, children: t('techwave.rag_local_label') }), " ", t('techwave.rag_local_value')] })] }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(Card, { children: _jsx(CardContent, { sx: { height: 400 }, children: _jsx(ChartComponent, { type: "line", data: ragChartData }) }) }) })] }) }), _jsx(TabPanel, { value: value, index: 2, children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsxs(Grid, { item: true, xs: 12, md: 6, children: [_jsx(Typography, { variant: "h3", component: "h3", gutterBottom: true, children: t('techwave.agentic_title') }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { mb: 2 }, children: t('techwave.agentic_desc') }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#00f2ea' }, children: t('techwave.agentic_market_label') }), " ", t('techwave.agentic_market_value')] }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#00f2ea' }, children: t('techwave.agentic_adoption_label') }), " ", t('techwave.agentic_adoption_value')] }), _jsxs(Typography, { variant: "body1", children: [_jsx("strong", { style: { color: '#34495e' }, children: t('techwave.agentic_local_label') }), " ", t('techwave.agentic_local_value')] })] }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(Card, { children: _jsx(CardContent, { sx: { height: 400 }, children: _jsx(ChartComponent, { type: "line", data: agenticChartData }) }) }) })] }) })] }) }));
};
export default TechWaveSection;
//# sourceMappingURL=TechWaveSection.js.map