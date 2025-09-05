import React, { useState } from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, TextField, Snackbar, Alert, Paper, CircularProgress } from '@mui/material';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';
import { sendContactEmail } from '../utils/formService';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    message: ''
  });
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
      const success = await sendContactEmail(formData);
      
      if (success) {
        setSnackbarSeverity('success');
        setSnackbarMessage(t('contact_form_success'));
        
        // Clear the form
        setFormData({
          name: '',
          email: '',
          company: '',
          jobTitle: '',
          message: ''
        });
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage(t('contact_form_error'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage(t('contact_form_error'));
    } finally {
      setIsSubmitting(false);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM_8_43PM.jpeg">
      <Box sx={{ color: 'white', py: { xs: 8, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Card sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            p: { xs: 3, md: 5 },
          }}>
            <CardContent>
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 700,
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                }}
              >
                {t('contact_title')}
              </Typography>
              <Typography 
                variant="h5" 
                component="p" 
                sx={{ 
                  opacity: 0.95,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                {t('contact_subtitle')}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email color="primary" sx={{ mr: 2, fontSize: 28 }} />
                    <Box>
                      <Typography variant="h6" component="h3">Email</Typography>
                      <Typography variant="body1" component="p">info@lkdv.fi</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Phone color="primary" sx={{ mr: 2, fontSize: 28 }} />
                    <Box>
                      <Typography variant="h6" component="h3">Phone</Typography>
                      <Typography variant="body1" component="p">+358 50 123 4567</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn color="primary" sx={{ mr: 2, fontSize: 28 }} />
                    <Box>
                      <Typography variant="h6" component="h3">Address</Typography>
                      <Typography variant="body1" component="p">
                        Maria 01<br />
                        Lapinlahdenkatu 16<br />
                        00180 Helsinki, Finland
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      mb: 3,
                      fontWeight: 600
                    }}
                  >
                    {t('contact_form_title')}
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                          fullWidth 
                          label={t('contact_form_name')} 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                          fullWidth 
                          label={t('contact_form_email')} 
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
                          label={t('contact_form_company')} 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required 
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                          fullWidth 
                          label={t('contact_form_job_title')} 
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required 
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField 
                          fullWidth 
                          label={t('contact_form_use_case')} 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required 
                          multiline 
                          rows={4} 
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
                            t('contact_form_submit')
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
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

export default ContactPage;