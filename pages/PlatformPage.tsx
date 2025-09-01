import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Paper } from '@mui/material';
import { CheckCircleOutline, Security, Storage, Code } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
    <Card sx={{ height: '100%' }}>
        <CardContent sx={{ p: 3, textAlign: 'center' }}>
            {icon}
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>{title}</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
    </Card>
);

const PlatformPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Page Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
            {t('platform_title')}
          </Typography>
          <Typography variant="h5" component="p" sx={{ opacity: 0.9 }}>
            {t('platform_subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Core Capabilities */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8 }}>{t('platform_capabilities_title')}</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureCard 
                icon={<Code sx={{ fontSize: 40, color: 'primary.main' }} />}
                title={t('platform_capability_1_title')}
                description={t('platform_capability_1_desc')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard 
                icon={<Storage sx={{ fontSize: 40, color: 'primary.main' }} />}
                title={t('platform_capability_2_title')}
                description={t('platform_capability_2_desc')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard 
                icon={<Security sx={{ fontSize: 40, color: 'primary.main' }} />}
                title={t('platform_capability_3_title')}
                description={t('platform_capability_3_desc')}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Architecture Overview */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
            <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8 }}>{t('platform_architecture_title')}</Typography>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2}}>{t('platform_architecture_subtitle')}</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {t('platform_architecture_desc')}
                </Typography>
                <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{t('platform_architecture_small_model_title')}</Typography>
                        <Typography variant="body2">
                            {t('platform_architecture_small_model_desc')}
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{t('platform_architecture_large_model_title')}</Typography>
                        <Typography variant="body2">
                            {t('platform_architecture_large_model_desc')}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
      </Box>

      {/* Deployment Options */}
      <Box id="deployment" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8 }}>{t('platform_deployment_title')}</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <FeatureCard 
                    icon={<Storage sx={{ fontSize: 40, color: 'primary.main' }} />}
                    title={t('platform_deployment_1_title')}
                    description={t('platform_deployment_1_desc')}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <FeatureCard 
                    icon={<Security sx={{ fontSize: 40, color: 'primary.main' }} />}
                    title={t('platform_deployment_2_title')}
                    description={t('platform_deployment_2_desc')}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <FeatureCard 
                    icon={<Code sx={{ fontSize: 40, color: 'primary.main' }} />}
                    title={t('platform_deployment_3_title')}
                    description={t('platform_deployment_3_desc')}
                />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Security & Compliance */}
      <Box id="security" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 8 }}>{t('platform_security_title')}</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <FeatureCard 
                    icon={<CheckCircleOutline sx={{ fontSize: 40, color: 'success.main' }} />}
                    title={t('platform_security_1_title')}
                    description={t('platform_security_1_desc')}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <FeatureCard 
                    icon={<CheckCircleOutline sx={{ fontSize: 40, color: 'success.main' }} />}
                    title={t('platform_security_2_title')}
                    description={t('platform_security_2_desc')}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <FeatureCard 
                    icon={<CheckCircleOutline sx={{ fontSize: 40, color: 'success.main' }} />}
                    title={t('platform_security_3_title')}
                    description={t('platform_security_3_desc')}
                />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PlatformPage;