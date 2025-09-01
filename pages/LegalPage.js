import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
const LegalPage = () => {
    const { t } = useTranslation();
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: { bgcolor: 'primary.main', color: 'white', py: { xs: 8, md: 12 } }, children: _jsxs(Container, { maxWidth: "md", sx: { textAlign: 'center' }, children: [_jsx(Typography, { variant: "h1", component: "h1", sx: { mb: 2 }, children: t('legal_title') }), _jsx(Typography, { variant: "h5", component: "p", sx: { opacity: 0.9 }, children: t('legal_subtitle') })] }) }), _jsx(Box, { sx: { py: { xs: 8, md: 12 } }, children: _jsxs(Container, { maxWidth: "md", children: [_jsx(Typography, { variant: "h2", component: "h2", sx: { mb: 4 }, children: t('legal_main_title') }), _jsx(Typography, { variant: "body1", sx: { mb: 2 }, children: t('legal_main_desc') }), _jsx(Typography, { variant: "h4", component: "h3", sx: { mt: 6, mb: 2 }, children: t('legal_use_cases_title') }), _jsxs("ul", { children: [_jsx("li", { children: t('legal_use_case_1') }), _jsx("li", { children: t('legal_use_case_2') }), _jsx("li", { children: t('legal_use_case_3') }), _jsx("li", { children: t('legal_use_case_4') })] })] }) })] }));
};
export default LegalPage;
//# sourceMappingURL=LegalPage.js.map