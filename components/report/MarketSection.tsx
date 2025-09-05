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
        <Card sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.4)', 
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 4,
          mb: 8 
        }}>
          <CardContent sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
              {t('market.title')}
            </Typography>
            <Typography variant="h5" sx={{ color: 'white' }}>
              {t('market.subtitle')}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: 3,
          mb: 4
        }}>
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h3" gutterBottom sx={{ color: 'primary.main' }}>{t('market.focus_title')}</Typography>
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
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default MarketSection;
