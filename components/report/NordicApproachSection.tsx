import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const NordicApproachSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Card sx={{ mb: 8 }}>
          <CardContent sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
              {t('approach.reality_title', 'The Nordic AI Reality')}
            </Typography>
            <Typography variant="h5" sx={{ color: 'white' }}>
              {t('approach.reality_subtitle', 'While 90% of AI projects globally fail to deliver value, we belong to the successful 10%')}
            </Typography>
          </CardContent>
        </Card>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, height: '100%', borderTop: '8px solid #FF4C4C', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HighlightOffIcon sx={{ fontSize: 32, color: '#FF4C4C', mr: 2 }} />
                <Typography variant="h4" component="h3" sx={{ color: 'white' }}>
                  {t('approach.american.title')}
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 3, color: 'white' }}>
                {t('approach.american.desc')}
              </Typography>
              
              <Box sx={{ mt: 2, mb: 4 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 2, color: 'white' }}>
                  {t('approach.why_fail_title')}
                </Typography>
                <Typography variant="body1" component="div" sx={{ pl: 2, borderLeft: '3px solid #FF4C4C', color: 'white' }}>
                  • {t('approach.why_fail_item_1')}<br />
                  • {t('approach.why_fail_item_2')}<br />
                  • {t('approach.why_fail_item_3')}<br />
                  • {t('approach.why_fail_item_4')}<br />
                  • {t('approach.why_fail_item_5')}
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mt: 'auto', color: 'white' }}>
                “{t('approach.american_quote')}”
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, height: '100%', borderTop: '8px solid #00F2EA', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 32, color: '#00F2EA', mr: 2 }} />
                <Typography variant="h4" component="h3" sx={{ color: 'white' }}>
                  {t('approach.nordic.title')}
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 3, color: 'white' }}>
                {t('approach.nordic.desc')}
              </Typography>
              
              <Box sx={{ mt: 2, mb: 4 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 2, color: 'white' }}>
                  {t('approach.why_succeed_title')}
                </Typography>
                <Typography variant="body1" component="div" sx={{ pl: 2, borderLeft: '3px solid #00F2EA', color: 'white' }}>
                  • {t('approach.why_succeed_item_1')}<br />
                  • {t('approach.why_succeed_item_2')}<br />
                  • {t('approach.why_succeed_item_3')}<br />
                  • {t('approach.why_succeed_item_4')}<br />
                  • {t('approach.why_succeed_item_5')}
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mt: 'auto', color: 'white' }}>
                “{t('approach.nordic_quote')}”
              </Typography>
            </Card>
          </Grid>
        </Grid>
        
        <Card sx={{ mb: 6 }}>
          <CardContent sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'white' }}>
              {t('approach.difference_title', 'Our Approach Makes the Difference')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'white' }}>
              {t('approach.difference_body', 'Instead of promoting unrealistic AI capabilities, we concentrate on developing practical tools that solve real business challenges while maintaining complete data sovereignty.')}
            </Typography>
          </CardContent>
        </Card>
        
        <Divider sx={{ mb: 6 }} />
      </Container>
    </Box>
  );
};

export default NordicApproachSection;
