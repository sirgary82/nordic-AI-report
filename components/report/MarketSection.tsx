
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChartComponent from './Chart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MarketSection: React.FC = () => {
  const { t } = useTranslation();
  const marketChartData = {
    labels: [t('market.chart_label_primary'), t('market.chart_label_expansion')],
    datasets: [{
      label: t('market.chart_label_focus'),
      data: [70, 30],
      backgroundColor: [
        'rgba(0, 242, 234, 1)',
        'rgba(127, 140, 141, 1)'
      ],
      borderColor: '#f4f6f8',
      borderWidth: 2
    }]
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('market.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {t('market.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h3" gutterBottom>{t('market.focus_title')}</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {t('market.focus_desc')}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText 
                  primary={t('market.legal_primary')}
                  secondary={t('market.legal_secondary')}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary={t('market.healthcare_primary')}
                  secondary={t('market.healthcare_secondary')}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary={t('market.financial_primary')}
                  secondary={t('market.financial_secondary')}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent sx={{ height: 400 }}>
                <ChartComponent type="doughnut" data={marketChartData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MarketSection;
