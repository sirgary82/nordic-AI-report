import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircleOutline } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
const ValuePropCard = ({ icon, title, subtitle, items }) => (_jsx(Card, { sx: { height: '100%' }, children: _jsxs(CardContent, { sx: { p: 4 }, children: [_jsx(Typography, { variant: "h2", sx: { mb: 1 }, children: icon }), _jsx(Typography, { variant: "h5", component: "h3", sx: { fontWeight: 700, mb: 1 }, children: title }), _jsx(Typography, { variant: "subtitle1", color: "primary", sx: { fontWeight: 600, mb: 2 }, children: subtitle }), _jsx(Box, { component: "ul", sx: { p: 0, listStyle: 'none' }, children: items.map((item, index) => (_jsxs(Box, { component: "li", sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(CheckCircleOutline, { color: "success", sx: { mr: 1 } }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: item })] }, index))) })] }) }));
const HomePage = () => {
    const { t } = useTranslation();
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: {
                    position: 'relative',
                    color: 'white',
                    py: { xs: 8, md: 12 },
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '70vh',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(/images/hero-background.jpeg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.6)',
                        zIndex: -1,
                    }
                }, children: _jsxs(Container, { maxWidth: "md", children: [_jsx(Typography, { variant: "h1", component: "h1", sx: { mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }, children: t('hero_title') }), _jsx(Typography, { variant: "h5", component: "p", sx: { mb: 4, opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }, children: t('hero_subtitle') }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }, children: [_jsx(Button, { variant: "contained", color: "secondary", component: Link, to: "/pilot-program", size: "large", children: t('hero_pilot_button') }), _jsx(Typography, { variant: "caption", sx: { color: 'secondary.light' }, children: t('hero_pilot_note') }), _jsx(Button, { variant: "outlined", color: "inherit", component: Link, to: "/platform", sx: { borderColor: 'white', color: 'white' }, children: t('hero_platform_button') })] })] }) }), _jsx(Box, { sx: { py: { xs: 8, md: 12 } }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(ValuePropCard, { icon: "\uD83D\uDDE3\uFE0F", title: t('value_prop_1_title'), subtitle: t('value_prop_1_subtitle'), items: [
                                        t('value_prop_1_item_1'),
                                        t('value_prop_1_item_2'),
                                        t('value_prop_1_item_3'),
                                        t('value_prop_1_item_4'),
                                    ] }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(ValuePropCard, { icon: "\uD83C\uDFF0", title: t('value_prop_2_title'), subtitle: t('value_prop_2_subtitle'), items: [
                                        t('value_prop_2_item_1'),
                                        t('value_prop_2_item_2'),
                                        t('value_prop_2_item_3'),
                                        t('value_prop_2_item_4'),
                                    ] }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(ValuePropCard, { icon: "\uD83D\uDD0D", title: t('value_prop_3_title'), subtitle: t('value_prop_3_subtitle'), items: [
                                        t('value_prop_3_item_1'),
                                        t('value_prop_3_item_2'),
                                        t('value_prop_3_item_3'),
                                        t('value_prop_3_item_4'),
                                    ] }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(ValuePropCard, { icon: "\uD83C\uDDEA\uD83C\uDDFA", title: t('value_prop_4_title'), subtitle: t('value_prop_4_subtitle'), items: [
                                        t('value_prop_4_item_1'),
                                        t('value_prop_4_item_2'),
                                        t('value_prop_4_item_3'),
                                        t('value_prop_4_item_4'),
                                    ] }) })] }) }) })] }));
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map