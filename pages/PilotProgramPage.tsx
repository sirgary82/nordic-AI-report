import React, { useState } from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, TextField, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';
import { sendPilotEmail } from '../utils/formService';

const PilotProgramPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    useCase: '',
    challenge: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await sendPilotEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        useCase: formData.useCase,
        challenge: formData.challenge
      });
      
      if (success) {
        setSubmitted(true);
        setSnackbarSeverity('success');
        setSnackbarMessage(t('pilot_form_success'));
        
        // Clear the form
        setFormData({
          name: '',
          email: '',
          company: '',
          industry: '',
          useCase: '',
          challenge: ''
        });
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage(t('pilot_form_error'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage(t('pilot_form_error'));
    } finally {
      setIsSubmitting(false);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM_6_46PM.jpeg">
      <Box sx={{ color: 'white', py: { xs: 8, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              mb: 3, 
              fontWeight: 700,
              textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
            }}
          >
            {t('pilot_title')}
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            sx={{ 
              opacity: 0.95,
              mb: 6, 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {t('pilot_subtitle')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: 2 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 4,
                  fontWeight: 600
                }}
              >
                {t('pilot_form_title')}
              </Typography>
              <Typography variant="h6" component="h3" sx={{ mb: 4 }}>{t('pilot_form_subtitle')}</Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label={t('pilot_form_contact_name')} 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label={t('pilot_form_email')} 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      type="email" 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label={t('pilot_form_company_name')} 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label={t('pilot_form_industry')} 
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth 
                      label={t('pilot_form_use_case')} 
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleChange}
                      required 
                      multiline 
                      rows={3} 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth 
                      label={t('pilot_form_challenge')} 
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      required 
                      multiline 
                      rows={3} 
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      size="large" 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        t('pilot_form_submit')
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </PageContainer>
  );
};

export default PilotProgramPage;