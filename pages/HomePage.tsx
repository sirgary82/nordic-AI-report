import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircleOutline } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

const ValuePropCard: React.FC<{ icon: string; title: string; subtitle: string; items: string[] }> = ({ icon, title, subtitle, items }) => (
    <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <CardContent sx={{ p: 4 }}>
            <Typography variant="h2" sx={{ mb: 1 }}>{icon}</Typography>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>{title}</Typography>
            <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 2 }}>{subtitle}</Typography>
            <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
                {items.map((item, index) => (
                    <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">{item}</Typography>
                    </Box>
                ))}
            </Box>
        </CardContent>
    </Card>
);

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM.jpeg">
      {/* Hero Section */}
      <Box sx={{
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ mb: 3, fontWeight: 700, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {t('hero_title')}
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            {t('hero_subtitle')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Button variant="contained" color="secondary" component={Link} to="/pilot-program" size="large">
              {t('hero_pilot_button')}
            </Button>
            <Typography variant="caption" sx={{ color: 'secondary.light' }}>{t('hero_pilot_note')}</Typography>
            <Button variant="outlined" color="inherit" component={Link} to="/platform" sx={{ borderColor: 'white', color: 'white' }}>
              {t('hero_platform_button')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Value Propositions */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <ValuePropCard 
                    icon="🗣️"
                    title={t('value_prop_1_title')}
                    subtitle={t('value_prop_1_subtitle')}
                    items={[
                        t('value_prop_1_item_1'),
                        t('value_prop_1_item_2'),
                        t('value_prop_1_item_3'),
                        t('value_prop_1_item_4'),
                    ]}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ValuePropCard 
                    icon="🏰"
                    title={t('value_prop_2_title')}
                    subtitle={t('value_prop_2_subtitle')}
                    items={[
                        t('value_prop_2_item_1'),
                        t('value_prop_2_item_2'),
                        t('value_prop_2_item_3'),
                        t('value_prop_2_item_4'),
                    ]}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ValuePropCard 
                    icon="🔍"
                    title={t('value_prop_3_title')}
                    subtitle={t('value_prop_3_subtitle')}
                    items={[
                        t('value_prop_3_item_1'),
                        t('value_prop_3_item_2'),
                        t('value_prop_3_item_3'),
                        t('value_prop_3_item_4'),
                    ]}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ValuePropCard 
                    icon="🇪🇺"
                    title={t('value_prop_4_title')}
                    subtitle={t('value_prop_4_subtitle')}
                    items={[
                        t('value_prop_4_item_1'),
                        t('value_prop_4_item_2'),
                        t('value_prop_4_item_3'),
                        t('value_prop_4_item_4'),
                    ]}
                />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default HomePage;