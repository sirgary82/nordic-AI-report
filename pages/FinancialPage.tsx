import React from 'react';
import { Box, Container, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import { TrendingUp, Security, Assessment, AccountBalance, Payments } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

interface UseCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const UseCard: React.FC<UseCardProps> = ({ icon, title, description }) => (
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

const FinancialPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM_6_56PM.jpeg">
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
          {t('financial.title', 'Financial Services AI')}
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
            {t('financial.overview.title', 'AI for Nordic Financial Institutions')}
          </Typography>
          <Typography paragraph>
            {t('financial.overview.description', 'Our financial services AI solutions are designed to meet the specific needs of Nordic banks, insurance companies, and investment firms, with a strong focus on security, compliance, and data sovereignty.')}
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
          {t('financial.useCases.title', 'Financial Services Applications')}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <UseCard
              icon={<TrendingUp />}
              title={t('financial.useCases.riskAnalysis.title', 'Risk Analysis')}
              description={t('financial.useCases.riskAnalysis.description', 'Advanced AI models for credit risk assessment, market risk analysis, and fraud detection tailored to Nordic financial markets.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <UseCard
              icon={<Security />}
              title={t('financial.useCases.fraudDetection.title', 'Fraud Detection')}
              description={t('financial.useCases.fraudDetection.description', 'Real-time anomaly detection systems that identify suspicious activities while maintaining low false positive rates.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <UseCard
              icon={<Assessment />}
              title={t('financial.useCases.complianceAutomation.title', 'Compliance Automation')}
              description={t('financial.useCases.complianceAutomation.description', 'AI-powered monitoring of transactions and communications to ensure compliance with AML, KYC, and other financial regulations.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <UseCard
              icon={<AccountBalance />}
              title={t('financial.useCases.wealthManagement.title', 'Wealth Management')}
              description={t('financial.useCases.wealthManagement.description', 'Personalized investment recommendations and portfolio analysis with specific focus on Nordic market conditions and preferences.')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <UseCard
              icon={<Payments />}
              title={t('financial.useCases.paymentSystems.title', 'Payment Systems')}
              description={t('financial.useCases.paymentSystems.description', 'Secure, intelligent payment processing with advanced fraud protection and seamless integration with Nordic payment platforms.')}
            />
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default FinancialPage;