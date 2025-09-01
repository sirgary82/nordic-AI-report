import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Typography, Button, Box, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (_jsx(AppBar, { position: "sticky", color: "default", elevation: 1, children: _jsxs(Toolbar, { sx: { justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }, children: [_jsxs(Box, { component: Link, to: "/", sx: { textDecoration: 'none', color: 'inherit' }, children: [_jsx(Typography, { variant: "h6", component: "div", sx: { fontWeight: 700, color: 'primary.main' }, children: "LDKV Solutions Oy" }), _jsx(Typography, { variant: "caption", sx: { color: 'text.secondary' }, children: "European Sovereign Intelligence" })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Button, { color: "inherit", component: Link, to: "/", children: t('nav_home') }), _jsx(Button, { color: "inherit", component: Link, to: "/nordic-ai-report", children: t('nav_report') }), _jsx(Button, { color: "inherit", component: Link, to: "/platform", children: t('nav_platform') }), _jsx(Button, { color: "inherit", component: Link, to: "/pilot-program", children: t('nav_pilot') }), _jsx(Button, { color: "inherit", component: Link, to: "/contact", children: t('nav_contact') }), _jsxs(ButtonGroup, { variant: "outlined", size: "small", sx: { ml: 2 }, children: [_jsx(Button, { onClick: () => changeLanguage('en'), disabled: i18n.language === 'en', children: "EN" }), _jsx(Button, { onClick: () => changeLanguage('fi'), disabled: i18n.language === 'fi', children: "FI" })] })] })] }) }));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map