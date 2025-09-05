import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircleOutline } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

const ValuePropCard: React.FC<{ icon: string; title: string; subtitle: string; items: string[] }> = ({ icon, title, subtitle, items }) => (
    <Card sx={{
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 3
    }}>
        <CardContent sx={{ p: 4 }}>
            <Typography variant="h2" sx={{ mb: 1, color: 'white' }}>{icon}</Typography>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>{title}</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>{subtitle}</Typography>
            <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
                {items.map((item, index) => (
                    <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                        <Typography variant="body2" sx={{ color: 'white' }}>{item}</Typography>
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
        minHeight: '60vh',
      }}>
        <Container maxWidth="md">
          <Card sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 3,
            p: { xs: 3, md: 5 },
          }}>
            <CardContent>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 4,
                  fontWeight: 700,
                  fontSize: '1.8rem',
                  lineHeight: 1.2,
                  fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                  color: 'white',
                  textAlign: 'center',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                  WebkitFontSmoothing: 'antialiased',
                  boxSizing: 'inherit',
                  margin: '0px 0px 40px',
                }}
              >
                {t('company_hero_title')}
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  fontWeight: 400,
                  fontSize: '1.5rem',
                  lineHeight: 1.334,
                  fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                  color: 'white',
                  textAlign: 'center',
                  opacity: 0.95,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  WebkitFontSmoothing: 'antialiased',
                  boxSizing: 'inherit',
                  margin: '0px 0px 32px',
                }}
              >
                {t('company_hero_subtitle')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Button variant="contained" color="secondary" component={Link} to="/about" size="large">
                  {t('company_about_button')}
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/services" size="large">
                  {t('company_services_button')}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* What We Do Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ mb: 5, textAlign: 'center', color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            {t('company_what_we_do_title')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <Card sx={{ 
                  height: '100%', 
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3
                }}>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Typography variant="h2" sx={{ mb: 2, color: 'white' }}>🛠️</Typography>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 2, color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                          {t('company_product_title')}
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                          {t('company_product_desc')}
                        </Typography>
                        <Button variant="contained" color="secondary" component={Link} to="/platform" size="large">
                          {t('company_product_button')}
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card sx={{ 
                  height: '100%', 
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3
                }}>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Typography variant="h2" sx={{ mb: 2, color: 'white' }}>👨‍💼</Typography>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 2, color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                          {t('company_consulting_title')}
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                          {t('company_consulting_desc')}
                        </Typography>
                        <Button variant="contained" color="secondary" component={Link} to="/services" size="large">
                          {t('company_consulting_button')}
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card sx={{ 
                  height: '100%', 
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3
                }}>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Typography variant="h2" sx={{ mb: 2, color: 'white' }}>🤝</Typography>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 2, color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                          {t('company_partnership_title')}
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                          {t('company_partnership_desc')}
                        </Typography>
                        <Button variant="contained" color="secondary" component={Link} to="/contact" size="large">
                          {t('company_partnership_button')}
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ mb: 5, textAlign: 'center', color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            {t('company_why_choose_title')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <ValuePropCard 
                    icon=""
                    title={t('company_value_prop_1_title')}
                    subtitle={t('company_value_prop_1_subtitle')}
                    items={[
                        t('company_value_prop_1_item_1'),
                        t('company_value_prop_1_item_2'),
                        t('company_value_prop_1_item_3'),
                        t('company_value_prop_1_item_4'),
                    ]}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ValuePropCard 
                    icon="🇺"
                    title={t('company_value_prop_2_title')}
                    subtitle={t('company_value_prop_2_subtitle')}
                    items={[
                        t('company_value_prop_2_item_1'),
                        t('company_value_prop_2_item_2'),
                        t('company_value_prop_2_item_3'),
                        t('company_value_prop_2_item_4'),
                    ]}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ValuePropCard 
                    icon="🧠"
                    title={t('company_value_prop_3_title')}
                    subtitle={t('company_value_prop_3_subtitle')}
                    items={[
                        t('company_value_prop_3_item_1'),
                        t('company_value_prop_3_item_2'),
                        t('company_value_prop_3_item_3'),
                        t('company_value_prop_3_item_4'),
                    ]}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ValuePropCard 
                    icon="🚀"
                    title={t('company_value_prop_4_title')}
                    subtitle={t('company_value_prop_4_subtitle')}
                    items={[
                        t('company_value_prop_4_item_1'),
                        t('company_value_prop_4_item_2'),
                        t('company_value_prop_4_item_3'),
                        t('company_value_prop_4_item_4'),
                    ]}
                />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Card sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 3,
            color: 'white', 
            textAlign: 'center'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
                {t('company_cta_title')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {t('company_cta_subtitle')}
              </Typography>
              <Button variant="contained" color="secondary" component={Link} to="/contact" size="large">
                {t('company_cta_button')}
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default HomePage;