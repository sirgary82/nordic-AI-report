import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Divider } from '@mui/material';
import { Assessment, Psychology, Security, Business, School } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ mr: 2, color: 'primary.main' }}>{icon}</Box>
          <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>{title}</Typography>
        </Box>
        <Typography variant="body1" paragraph>{description}</Typography>
        <Divider sx={{ my: 2 }} />
        <Box component="ul" sx={{ pl: 2, mb: 3, flexGrow: 1 }}>
          {features.map((feature, index) => (
            <Typography component="li" variant="body2" key={index} sx={{ mb: 1 }}>
              {feature}
            </Typography>
          ))}
        </Box>
        <Button variant="outlined" color="primary" component={Link} to="/contact">
          Request Service
        </Button>
      </CardContent>
    </Card>
  );
};

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM_6_46PM.jpeg">
      {/* Services Hero Section */}
      <Box sx={{
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Card sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            p: { xs: 3, md: 5 },
          }}>
            <CardContent>
              <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: 700, textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
                {t('services_title')}
              </Typography>
              <Typography variant="h5" component="p" sx={{ opacity: 0.95, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                {t('services_subtitle')}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Services Overview */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <ServiceCard 
                icon={<Assessment fontSize="large" />}
                title={t('services_strategy_title')}
                description={t('services_strategy_desc')}
                features={[
                  t('services_strategy_feature1'),
                  t('services_strategy_feature2'),
                  t('services_strategy_feature3'),
                  t('services_strategy_feature4')
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ServiceCard 
                icon={<Psychology fontSize="large" />}
                title={t('services_implementation_title')}
                description={t('services_implementation_desc')}
                features={[
                  t('services_implementation_feature1'),
                  t('services_implementation_feature2'),
                  t('services_implementation_feature3'),
                  t('services_implementation_feature4')
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ServiceCard 
                icon={<Security fontSize="large" />}
                title={t('services_security_title')}
                description={t('services_security_desc')}
                features={[
                  t('services_security_feature1'),
                  t('services_security_feature2'),
                  t('services_security_feature3'),
                  t('services_security_feature4')
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ServiceCard 
                icon={<Business fontSize="large" />}
                title={t('services_compliance_title')}
                description={t('services_compliance_desc')}
                features={[
                  t('services_compliance_feature1'),
                  t('services_compliance_feature2'),
                  t('services_compliance_feature3'),
                  t('services_compliance_feature4')
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ServiceCard 
                icon={<School fontSize="large" />}
                title={t('services_training_title')}
                description={t('services_training_desc')}
                features={[
                  t('services_training_feature1'),
                  t('services_training_feature2'),
                  t('services_training_feature3'),
                  t('services_training_feature4')
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Custom Solutions */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main', fontWeight: 700 }}>
                {t('services_custom_title')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('services_custom_desc')}
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                component={Link}
                to="/contact"
                sx={{ mt: 2 }}
              >
                {t('services_custom_button')}
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default ServicesPage;
