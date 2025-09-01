import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChartComponent from './Chart';
const OpportunitySection = () => {
    const { t } = useTranslation();
    const adoptionChartData = {
        labels: [t('opportunity.chart_label_fi_ent'), t('opportunity.chart_label_denmark'), t('opportunity.chart_label_eu_avg')],
        datasets: [{
                label: t('opportunity.chart_label_adoption_rate'),
                data: [70, 27.6, 13.5],
                backgroundColor: 'rgba(0, 242, 234, 0.6)',
                borderColor: 'rgba(0, 242, 234, 1)',
                borderWidth: 1
            }]
    };
    return (_jsx(Box, { component: "section", sx: { py: { xs: 8, md: 12 } }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Typography, { variant: "h2", component: "h2", gutterBottom: true, children: t('opportunity.title') }), _jsx(Typography, { variant: "h5", color: "text.secondary", children: t('opportunity.subtitle') })] }), _jsxs(Grid, { container: true, spacing: 4, sx: { mb: 8 }, children: [_jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(Card, { sx: { height: '100%' }, children: _jsxs(CardContent, { sx: { p: 4, textAlign: 'center' }, children: [_jsx(Typography, { variant: "h2", component: "p", color: "secondary", sx: { fontWeight: 700 }, children: "37.6%" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", children: t('opportunity.stat_cagr') })] }) }) }), _jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(Card, { sx: { height: '100%' }, children: _jsxs(CardContent, { sx: { p: 4, textAlign: 'center' }, children: [_jsx(Typography, { variant: "h2", component: "p", color: "secondary", sx: { fontWeight: 700 }, children: "\u20AC2.86B" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", children: t('opportunity.stat_market') })] }) }) }), _jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(Card, { sx: { height: '100%' }, children: _jsxs(CardContent, { sx: { p: 4, textAlign: 'center' }, children: [_jsx(Typography, { variant: "h2", component: "p", color: "secondary", sx: { fontWeight: 700 }, children: "~70%" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", children: t('opportunity.stat_firms') })] }) }) })] }), _jsx(Card, { children: _jsxs(CardContent, { sx: { p: 4 }, children: [_jsx(Typography, { variant: "h3", component: "h3", align: "center", gutterBottom: true, children: t('opportunity.chart_title') }), _jsx(Typography, { variant: "body1", color: "text.secondary", align: "center", sx: { mb: 4 }, children: t('opportunity.chart_desc') }), _jsx(Box, { sx: { height: 400 }, children: _jsx(ChartComponent, { type: "bar", data: adoptionChartData }) })] }) })] }) }));
};
export default OpportunitySection;
//# sourceMappingURL=OpportunitySection.js.map