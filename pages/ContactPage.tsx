import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
            {t('contact_title')}
          </Typography>
          <Typography variant="h5" component="p" sx={{ opacity: 0.9 }}>
            {t('contact_subtitle')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 3 }}>{t('contact_form_title')}</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}><TextField fullWidth label={t('contact_form_name')} required /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label={t('contact_form_email')} required type="email" /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label={t('contact_form_company')} required /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label={t('contact_form_title')} required /></Grid>
                <Grid item xs={12}><TextField fullWidth label={t('contact_form_use_case')} required multiline rows={4} /></Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button variant="contained" size="large">{t('contact_form_submit')}</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;