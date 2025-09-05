
import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChartComponent from './Chart';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tech-wave-tabpanel-${index}`}
      aria-labelledby={`tech-wave-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const TechWaveSection: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const confidentialChartData = {
    labels: ['2023', '2030'],
    datasets: [{
      label: t('techwave.confidential_chart_label'),
      data: [1.38, 40],
      backgroundColor: 'rgba(0, 242, 234, 0.2)',
      borderColor: 'rgba(0, 242, 234, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(0, 242, 234, 1)',
      tension: 0.1
    }]
  };

  const ragChartData = {
    labels: ['2024', '2030'],
    datasets: [{
      label: t('techwave.rag_chart_label'),
      data: [1.2, 11.0],
      backgroundColor: 'rgba(0, 242, 234, 0.2)',
      borderColor: 'rgba(0, 242, 234, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(0, 242, 234, 1)',
      tension: 0.1
    }]
  };

  const agenticChartData = {
    labels: ['2025', '2032'],
    datasets: [{
      label: t('techwave.agentic_chart_label'),
      data: [13.8, 140],
      backgroundColor: 'rgba(0, 242, 234, 0.2)',
      borderColor: 'rgba(0, 242, 234, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(0, 242, 234, 1)',
      tension: 0.1
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
              {t('techwave.title')}
            </Typography>
            <Typography variant="h5" sx={{ color: 'white' }}>
              {t('techwave.subtitle')}
            </Typography>
          </CardContent>
        </Card>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label={t('techwave.tab_confidential')} />
            <Tab label={t('techwave.tab_rag')} />
            <Tab label={t('techwave.tab_agentic')} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
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
                  <Typography variant="h3" component="h3" gutterBottom sx={{ color: 'primary.main' }}>{t('techwave.confidential_title')}</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {t('techwave.confidential_desc')}
                  </Typography>
                  <Typography variant="body1"><strong style={{color: '#00f2ea'}}>{t('techwave.confidential_market_label')}</strong> {t('techwave.confidential_market_value')}</Typography>
                  <Typography variant="body1"><strong style={{color: '#00f2ea'}}>{t('techwave.confidential_growth_label')}</strong> {t('techwave.confidential_growth_value')}</Typography>
                  <Typography variant="body1"><strong style={{color: '#34495e'}}>{t('techwave.confidential_local_label')}</strong> {t('techwave.confidential_local_value')}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent sx={{ height: 400 }}>
                      <ChartComponent type="line" data={confidentialChartData} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </TabPanel>

        <TabPanel value={value} index={1}>
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
                  <Typography variant="h3" component="h3" gutterBottom sx={{ color: 'primary.main' }}>{t('techwave.rag_title')}</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {t('techwave.rag_desc')}
                  </Typography>
                  <Typography variant="body1"><strong style={{color: '#00f2ea'}}>{t('techwave.rag_market_label')}</strong> {t('techwave.rag_market_value')}</Typography>
                  <Typography variant="body1"><strong style={{color: '#00f2ea'}}>{t('techwave.rag_growth_label')}</strong> {t('techwave.rag_growth_value')}</Typography>
                  <Typography variant="body1"><strong style={{color: '#34495e'}}>{t('techwave.rag_local_label')}</strong> {t('techwave.rag_local_value')}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent sx={{ height: 400 }}>
                      <ChartComponent type="line" data={ragChartData} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </TabPanel>

        <TabPanel value={value} index={2}>
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
                  <Typography variant="h3" component="h3" gutterBottom sx={{ color: 'primary.main' }}>{t('techwave.agentic_title')}</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {t('techwave.agentic_desc')}
                  </Typography>
                  <Typography variant="body1"><strong style={{color: '#00f2ea'}}>{t('techwave.agentic_market_label')}</strong> {t('techwave.agentic_market_value')}</Typography>
                  <Typography variant="body1"><strong style={{color: '#00f2ea'}}>{t('techwave.agentic_adoption_label')}</strong> {t('techwave.agentic_adoption_value')}</Typography>
                  <Typography variant="body1"><strong style={{color: '#34495e'}}>{t('techwave.agentic_local_label')}</strong> {t('techwave.agentic_local_value')}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent sx={{ height: 400 }}>
                      <ChartComponent type="line" data={agenticChartData} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </TabPanel>

      </Container>
    </Box>
  );
};

export default TechWaveSection;
