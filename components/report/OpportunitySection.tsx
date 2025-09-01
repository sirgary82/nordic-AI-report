
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChartComponent from './Chart';

const OpportunitySection: React.FC = () => {
  const { t } = useTranslation();
  const adoptionChartData = {
    labels: [t('opportunity.chart_label_fi_ent'), t('opportunity.chart_label_denmark'), t('opportunity.chart_label_eu_avg')],
    datasets: [{
      label: t('opportunity.chart_label_adoption_rate'),
      data: [70, 27.6, 13.5],
      backgroundColor: 'rgba(0, 242, 234, 0.6)',
      borderColor: 'rgba(0, 242, 234, 1)',
      borderWidth: 1
    }]
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('opportunity.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {t('opportunity.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="p" color="secondary" sx={{ fontWeight: 700 }}>
                  37.6%
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {t('opportunity.stat_cagr')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="p" color="secondary" sx={{ fontWeight: 700 }}>
                  €2.86B
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {t('opportunity.stat_market')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="p" color="secondary" sx={{ fontWeight: 700 }}>
                  ~70%
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {t('opportunity.stat_firms')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h3" component="h3" align="center" gutterBottom>
              {t('opportunity.chart_title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
              {t('opportunity.chart_desc')}
            </Typography>
            <Box sx={{ height: 400 }}>
              <ChartComponent type="bar" data={adoptionChartData} />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default OpportunitySection;
