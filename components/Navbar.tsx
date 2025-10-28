import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  ButtonGroup, 
  Menu, 
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu as MenuIcon, KeyboardArrowDown } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [productsAnchorEl, setProductsAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleProductsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProductsAnchorEl(event.currentTarget);
  };
  
  const handleMobileMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileAnchorEl(event.currentTarget);
  };
  
  const handleProductsClose = () => {
    setProductsAnchorEl(null);
  };
  
  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <Box component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
            LKDV Solutions Oy
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            European Sovereign Intelligence
          </Typography>
        </Box>
        
        {isMobile ? (
          // Mobile menu
          <Box>
            <IconButton 
              color="inherit" 
              onClick={handleMobileMenuClick}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileAnchorEl}
              open={Boolean(mobileAnchorEl)}
              onClose={handleMobileClose}
            >
              <MenuItem component={Link} to="/" onClick={handleMobileClose}>
                {t('nav_home')}
              </MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleMobileClose}>
                {t('nav_about')}
              </MenuItem>
              <MenuItem component={Link} to="/services" onClick={handleMobileClose}>
                {t('nav_services')}
              </MenuItem>
              <MenuItem component={Link} to="/platform" onClick={handleMobileClose}>
                {t('nav_products')}
              </MenuItem>
              <MenuItem component={Link} to="/nordic-ai-report" onClick={handleMobileClose}>
                {t('nav_report')}
              </MenuItem>
              <MenuItem component={Link} to="/contact" onClick={handleMobileClose}>
                {t('nav_contact')}
              </MenuItem>
              <MenuItem>
                <ButtonGroup variant="outlined" size="small" sx={{ mt: 1 }}>
                  <Button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>EN</Button>
                  <Button onClick={() => changeLanguage('fi')} disabled={i18n.language === 'fi'}>FI</Button>
                </ButtonGroup>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          // Desktop menu
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/">{t('nav_home')}</Button>
            <Button color="inherit" component={Link} to="/about">{t('nav_about')}</Button>
            <Button color="inherit" component={Link} to="/services">{t('nav_services')}</Button>
            
            <Button 
              color="inherit" 
              endIcon={<KeyboardArrowDown />} 
              onClick={handleProductsClick}
              aria-controls="products-menu"
              aria-haspopup="true"
            >
              {t('nav_products')}
            </Button>
            <Menu
              id="products-menu"
              anchorEl={productsAnchorEl}
              open={Boolean(productsAnchorEl)}
              onClose={handleProductsClose}
            >
              <MenuItem component={Link} to="/platform" onClick={handleProductsClose}>
                {t('nav_isolated_ai')}
              </MenuItem>
              <MenuItem component={Link} to="/nordic-ai-report" onClick={handleProductsClose}>
                {t('nav_report')}
              </MenuItem>
            </Menu>
            
            <Button color="inherit" component={Link} to="/contact">{t('nav_contact')}</Button>
            
            <ButtonGroup variant="outlined" size="small" sx={{ ml: 2 }}>
              <Button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>EN</Button>
              <Button onClick={() => changeLanguage('fi')} disabled={i18n.language === 'fi'}>FI</Button>
            </ButtonGroup>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
