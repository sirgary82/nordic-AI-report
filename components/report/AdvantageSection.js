import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
const AdvantageCard = ({ icon, title, description }) => (_jsx(Card, { sx: { height: '100%' }, children: _jsxs(CardContent, { sx: { p: 4, textAlign: 'center' }, children: [_jsx(Box, { sx: { mb: 2 }, children: React.cloneElement(icon, { sx: { fontSize: 40, color: 'secondary.main' } }) }), _jsx(Typography, { variant: "h5", component: "h3", gutterBottom: true, children: title }), _jsx(Typography, { color: "text.secondary", children: description })] }) }));
const AdvantageSection = () => {
    const { t } = useTranslation();
    return (_jsx(Box, { component: "section", sx: { py: { xs: 8, md: 12 } }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Typography, { variant: "h2", component: "h2", gutterBottom: true, children: t('advantage.title') }), _jsx(Typography, { variant: "h5", color: "text.secondary", children: t('advantage.subtitle') })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { item: true, xs: 12, md: 3, children: _jsx(AdvantageCard, { icon: _jsx(LanguageIcon, {}), title: t('advantage.card1_title'), description: t('advantage.card1_desc') }) }), _jsx(Grid, { item: true, xs: 12, md: 3, children: _jsx(AdvantageCard, { icon: _jsx(AccountBalanceIcon, {}), title: t('advantage.card2_title'), description: t('advantage.card2_desc') }) }), _jsx(Grid, { item: true, xs: 12, md: 3, children: _jsx(AdvantageCard, { icon: _jsx(VerifiedUserIcon, {}), title: t('advantage.card3_title'), description: t('advantage.card3_desc') }) }), _jsx(Grid, { item: true, xs: 12, md: 3, children: _jsx(AdvantageCard, { icon: _jsx(SpeedIcon, {}), title: t('advantage.card4_title'), description: t('advantage.card4_desc') }) })] })] }) }));
};
export default AdvantageSection;
//# sourceMappingURL=AdvantageSection.js.map