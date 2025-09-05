import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { MedicalServices, Search, HealthAndSafety, Analytics, LocalHospital } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

interface UseCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const UseCard: React.FC<UseCardProps> = ({ icon, title, description }) => (
  <Card>
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 28, mr: 2 } })}
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const HealthcarePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM_7_15PM.jpeg">
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
          {t('healthcare.title', 'Healthcare AI Solutions')}
        </Typography>

        <Card
          sx={{ 
            p: 4,
            mb: 6
          }}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
            {t('healthcare.overview.title', 'Transforming Nordic Healthcare')}
          </Typography>
          <Typography paragraph>
            {t('healthcare.overview.description', 'Our healthcare AI solutions are designed specifically for Nordic healthcare systems, ensuring full compliance with local regulations and data privacy requirements. We help healthcare providers improve patient outcomes while maintaining the highest standards of data security.')}
          </Typography>
        </Card>

        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 4, 
            fontWeight: 600, 
            color: 'white',
            textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
          }}
        >
          {t('healthcare.useCases.title', 'Key Healthcare Applications')}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <UseCard
              icon={<MedicalServices />}
              title={t('healthcare.useCases.diagnosticAssistance.title', 'Diagnostic Assistance')}
              description={t('healthcare.useCases.diagnosticAssistance.description', 'AI-powered tools to help clinicians make more accurate diagnoses through analysis of medical images, lab results, and patient history.')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <UseCard
              icon={<Search />}
              title={t('healthcare.useCases.medicalResearch.title', 'Medical Research')}
              description={t('healthcare.useCases.medicalResearch.description', 'Accelerate research by analyzing vast datasets to identify patterns and correlations that humans might miss.')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <UseCard
              icon={<HealthAndSafety />}
              title={t('healthcare.useCases.patientMonitoring.title', 'Patient Monitoring')}
              description={t('healthcare.useCases.patientMonitoring.description', 'Remote patient monitoring systems that use AI to detect concerning trends and alert healthcare providers before conditions worsen.')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <UseCard
              icon={<Analytics />}
              title={t('healthcare.useCases.operationalEfficiency.title', 'Operational Efficiency')}
              description={t('healthcare.useCases.operationalEfficiency.description', 'Optimize hospital operations through predictive analytics for patient flow, resource allocation, and staff scheduling.')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <UseCard
              icon={<LocalHospital />}
              title={t('healthcare.useCases.personalizedMedicine.title', 'Personalized Medicine')}
              description={t('healthcare.useCases.personalizedMedicine.description', 'Tailor treatment plans to individual patients based on their genetic makeup, lifestyle factors, and medical history.')}
            />
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default HealthcarePage;