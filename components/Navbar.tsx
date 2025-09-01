import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <Box component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
            LDKV Solutions Oy
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            European Sovereign Intelligence
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">{t('nav_home')}</Button>
          <Button color="inherit" component={Link} to="/nordic-ai-report">{t('nav_report')}</Button>
          <Button color="inherit" component={Link} to="/platform">{t('nav_platform')}</Button>
          <Button color="inherit" component={Link} to="/pilot-program">{t('nav_pilot')}</Button>
          <Button color="inherit" component={Link} to="/contact">{t('nav_contact')}</Button>
          <ButtonGroup variant="outlined" size="small" sx={{ ml: 2 }}>
            <Button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>EN</Button>
            <Button onClick={() => changeLanguage('fi')} disabled={i18n.language === 'fi'}>FI</Button>
          </ButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;