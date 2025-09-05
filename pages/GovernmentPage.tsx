import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Policy, Security, Assessment, Apartment, GroupWork } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

interface CaseCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ icon, title, description }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 28, mr: 2 } })}
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const GovernmentPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM_8_43PM.jpeg">
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
          {t('government.title', 'Public Sector & Government AI')}
        </Typography>

        <Card
          sx={{ 
            p: 4, 
            mb: 6,
          }}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
            {t('government.overview.title', 'AI for Nordic Public Sector')}
          </Typography>
          <Typography paragraph>
            {t('government.overview.description1', 'Our AI solutions for government and public sector organizations are designed to enhance service delivery, improve efficiency, and strengthen decision-making while maintaining the highest standards of transparency and data security.')}
          </Typography>
          <Typography paragraph>
            {t('government.overview.description2', 'We understand the unique challenges faced by Nordic public sector organizations, from regulatory compliance to citizen privacy concerns, and have built our solutions to address these specific needs.')}
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
          {t('government.useCases.title', 'Government Use Cases')}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<Policy />}
              title={t('government.useCases.citizenServices.title', 'Citizen Services')}
              description={t('government.useCases.citizenServices.description', 'AI-powered chatbots and virtual assistants that enhance citizen access to government services and information, reducing wait times and improving service quality.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<Security />}
              title={t('government.useCases.cybersecurity.title', 'Cybersecurity')}
              description={t('government.useCases.cybersecurity.description', 'Advanced threat detection systems that use AI to identify and respond to cybersecurity threats in real-time, protecting critical government infrastructure.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<Assessment />}
              title={t('government.useCases.policyAnalysis.title', 'Policy Analysis')}
              description={t('government.useCases.policyAnalysis.description', 'AI tools that help analyze the potential impacts of policy changes by processing vast amounts of data and identifying patterns and trends.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<Apartment />}
              title={t('government.useCases.urbanPlanning.title', 'Urban Planning')}
              description={t('government.useCases.urbanPlanning.description', 'AI-enhanced urban planning tools that optimize infrastructure development, traffic flow, and public service placement.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<GroupWork />}
              title={t('government.useCases.interagencyCollaboration.title', 'Interagency Collaboration')}
              description={t('government.useCases.interagencyCollaboration.description', 'Secure platforms for sharing data and insights across government agencies while maintaining appropriate access controls and data governance.')}
            />
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default GovernmentPage;