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
              The Nordic AI Reality
            </Typography>
            <Typography variant="h5" sx={{ color: 'white' }}>
              While 90% of AI projects globally fail to deliver value, we belong to the successful 10%
            </Typography>
          </CardContent>
        </Card>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                p: 4, 
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: 3,
                borderTop: '8px solid #FF4C4C',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HighlightOffIcon sx={{ fontSize: 32, color: '#FF4C4C', mr: 2 }} />
                <Typography variant="h4" component="h3" sx={{ color: 'primary.main' }}>
                  The American Approach
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                American tech giants and startups often promise transformative AI revolutions but deliver marketing hype instead of practical solutions.
              </Typography>
              
              <Box sx={{ mt: 2, mb: 4 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 2, color: 'primary.main' }}>
                  Why 90% of AI Projects Fail:
                </Typography>
                <Typography variant="body1" component="div" sx={{ pl: 2, borderLeft: '3px solid #FF4C4C' }}>
                  • Oversold capabilities and unrealistic expectations<br />
                  • Generic solutions ignoring local market needs<br />
                  • Data privacy concerns and regulatory non-compliance<br />
                  • Focus on flashy demos over practical implementation<br />
                  • Poor integration with existing workflows
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mt: 'auto' }}>
                "Many companies are promising an AI revolution but delivering only buzzwords and temporary hype."
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                p: 4, 
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: 3,
                borderTop: '8px solid #00F2EA',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 32, color: '#00F2EA', mr: 2 }} />
                <Typography variant="h4" component="h3" sx={{ color: 'primary.main' }}>
                  The Nordic Approach
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                Our Finnish approach is focused on practical applications, regulatory compliance, and deep integration with your existing business processes.
              </Typography>
              
              <Box sx={{ mt: 2, mb: 4 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 2, color: 'primary.main' }}>
                  Why We Succeed Where Others Fail:
                </Typography>
                <Typography variant="body1" component="div" sx={{ pl: 2, borderLeft: '3px solid #00F2EA' }}>
                  • Full compliance with EU data regulations<br />
                  • Finnish language and cultural nuance expertise<br />
                  • Focus on practical business outcomes<br />
                  • Seamless integration with existing workflows<br />
                  • Transparent and explainable AI systems
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mt: 'auto' }}>
                "We focus on building solutions that actually work in production environments, not just demos."
              </Typography>
            </Card>
          </Grid>
        </Grid>
        
        <Card sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: 3,
          mb: 6
        }}>
          <CardContent sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
              Our Approach Makes the Difference
            </Typography>
            <Typography variant="body1">
              Instead of promoting unrealistic AI capabilities, we concentrate on developing practical tools that solve real business challenges while maintaining complete data sovereignty.
            </Typography>
          </CardContent>
        </Card>
        
        <Divider sx={{ mb: 6 }} />
      </Container>
    </Box>
  );
};

export default NordicApproachSection;
