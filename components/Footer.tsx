import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
              LKDV Solutions Oy
            </Typography>
            <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
              European Sovereign Intelligence
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
                info@lkdv.fi
              </Typography>
              <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
                Maria 01, Helsinki, Finland
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
              {t('footer_company')}
            </Typography>
            <MuiLink component={Link} to="/about" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_about')}</MuiLink>
            <MuiLink component={Link} to="/services" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_services')}</MuiLink>
            <MuiLink component={Link} to="/contact" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('nav_contact')}</MuiLink>
          </Grid>
          
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
              {t('footer_products')}
            </Typography>
            <MuiLink component={Link} to="/platform" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_platform_overview')}</MuiLink>
            <MuiLink component={Link} to="/nordic-ai-report" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('nav_report')}</MuiLink>
            <MuiLink component={Link} to="/pilot-program" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_contact_pilot')}</MuiLink>
          </Grid>
          
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
              {t('nav_industries')}
            </Typography>
            <MuiLink component={Link} to="/legal" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_industries_legal')}</MuiLink>
            <MuiLink component={Link} to="/financial" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_industries_financial')}</MuiLink>
            <MuiLink component={Link} to="/government" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_industries_government')}</MuiLink>
            <MuiLink component={Link} to="/healthcare" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_industries_healthcare')}</MuiLink>
          </Grid>
          
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
              {t('nav_contact')}
            </Typography>
            <MuiLink component={Link} to="/contact" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_contact_demo')}</MuiLink>
            <MuiLink component={Link} to="/contact" color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none' }}>{t('footer_contact_support')}</MuiLink>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: '#34495e', pt: 3, mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
            &copy; {new Date().getFullYear()} LKDV Solutions Oy. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: '#bdc3c7', mt: 1, display: 'block' }}>
            Visit us at <MuiLink href="https://lkdv.fi" target="_blank" rel="noopener" color="secondary">lkdv.fi</MuiLink>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
