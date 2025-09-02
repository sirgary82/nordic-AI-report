import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Paper } from '@mui/material';
import { CheckCircleOutline, Security, Storage, Code } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
    <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
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
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM_6_46PM.jpeg">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          color="white"
          sx={{ 
            mb: 6, 
            fontWeight: 700,
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
          }}
        >
          {t('platform.title', 'Our AI Platform')}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Security sx={{ fontSize: 40, color: 'primary.main' }} />}
              title={t('platform.security.title', 'Enterprise Security')}
              description={t('platform.security.description', 'Military-grade security with data isolation and encryption at all levels.')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Storage sx={{ fontSize: 40, color: 'primary.main' }} />}
              title={t('platform.data.title', 'Data Sovereignty')}
              description={t('platform.data.description', 'Your data remains in your control, within Nordic borders, compliant with all EU regulations.')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Code sx={{ fontSize: 40, color: 'primary.main' }} />}
              title={t('platform.integration.title', 'Easy Integration')}
              description={t('platform.integration.description', 'Straightforward API integration with your existing systems and workflows.')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<CheckCircleOutline sx={{ fontSize: 40, color: 'primary.main' }} />}
              title={t('platform.compliance.title', 'Regulatory Compliance')}
              description={t('platform.compliance.description', 'Built from the ground up to meet Nordic and EU regulatory requirements.')}
            />
          </Grid>
        </Grid>

        <Paper 
          elevation={3} 
          sx={{ 
            mt: 8, 
            p: 4, 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
            {t('platform.details.title', 'Platform Details')}
          </Typography>
          <Typography paragraph>
            {t('platform.details.description1', 'Our AI platform is designed specifically for Nordic organizations that require the highest levels of security, data privacy, and regulatory compliance. By keeping all data processing within Nordic borders, we ensure complete data sovereignty.')}
          </Typography>
          <Typography paragraph>
            {t('platform.details.description2', 'The platform supports a wide range of AI capabilities including natural language processing, document analysis, decision support, and predictive analytics - all while ensuring your data never leaves your control.')}
          </Typography>
        </Paper>
      </Container>
    </PageContainer>
  );
};

export default PlatformPage;