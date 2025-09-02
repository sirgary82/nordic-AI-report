import React from 'react';
import { Box, Container, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import { Gavel, VerifiedUser, FindInPage, HistoryEdu } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

interface CaseCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ icon, title, description }) => (
  <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 28, color: 'primary.main', mr: 2 } })}
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const LegalPage: React.FC = () => {
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
          {t('legal.title', 'Legal AI Solutions')}
        </Typography>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 6,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
            {t('legal.overview.title', 'AI for Nordic Legal Professionals')}
          </Typography>
          <Typography paragraph>
            {t('legal.overview.description', 'Our legal AI solutions are specifically designed for law firms and legal departments in the Nordic region, addressing the unique challenges of multilingual legal systems, data privacy regulations, and client confidentiality requirements.')}
          </Typography>
        </Paper>

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
          {t('legal.useCases.title', 'Legal Applications')}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<FindInPage />}
              title={t('legal.useCases.documentAnalysis.title', 'Document Analysis')}
              description={t('legal.useCases.documentAnalysis.description', 'AI-powered tools for analyzing and extracting key information from legal documents, contracts, and case files in multiple Nordic languages.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<Gavel />}
              title={t('legal.useCases.caseResearch.title', 'Case Research')}
              description={t('legal.useCases.caseResearch.description', 'Advanced search capabilities for finding relevant precedents and legal arguments across local and international case databases.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<VerifiedUser />}
              title={t('legal.useCases.complianceTools.title', 'Compliance Tools')}
              description={t('legal.useCases.complianceTools.description', 'Tools to analyze contracts and policies for compliance with GDPR, NIS2, and other key Nordic and EU regulations.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseCard
              icon={<HistoryEdu />}
              title={t('legal.useCases.draftingAssistance.title', 'Drafting Assistance')}
              description={t('legal.useCases.draftingAssistance.description', 'AI assistance for creating legal documents, contracts, and correspondence with industry-specific terminology in all Nordic languages.')}
            />
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default LegalPage;