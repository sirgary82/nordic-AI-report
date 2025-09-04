import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Paper, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const NordicApproachSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            The Nordic AI Reality
          </Typography>
          <Typography variant="h5" color="text.secondary">
            While 90% of AI projects globally fail to deliver value, we belong to the successful 10%
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%',
                borderTop: '8px solid #FF4C4C',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HighlightOffIcon sx={{ fontSize: 32, color: '#FF4C4C', mr: 2 }} />
                <Typography variant="h4" component="h3">
                  The American Approach
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                American tech giants and startups often promise transformative AI revolutions but deliver marketing hype instead of practical solutions.
              </Typography>
              
              <Box sx={{ mt: 2, mb: 4 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
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
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%',
                borderTop: '8px solid #00F2EA',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 32, color: '#00F2EA', mr: 2 }} />
                <Typography variant="h4" component="h3">
                  The Nordic Approach
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                We focus on practical, working solutions that integrate with your existing processes. Our goal is to enhance your capabilities, not replace them.
              </Typography>
              
              <Box sx={{ mt: 2, mb: 4 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
                  How We Deliver Real Value:
                </Typography>
                <Typography variant="body1" component="div" sx={{ pl: 2, borderLeft: '3px solid #00F2EA' }}>
                  • Deep understanding of Finnish language and business context<br />
                  • Practical solutions tailored to local regulations<br />
                  • Focus on workflow integration, not disruption<br />
                  • Transparent about capabilities and limitations<br />
                  • 95% complete MVP instead of PowerPoint promises
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mt: 'auto' }}>
                "We don't oversell AI. If a simpler solution like N8N workflow automation would better serve your needs, we'll recommend that instead."
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" component="h3" gutterBottom>
              The 10% That Succeed
            </Typography>
            <Typography variant="body1" paragraph>
              Recent research confirms that 90% of AI projects fail to deliver meaningful business value. At LKDV, we're focused on being part of the successful 10% by emphasizing practical implementation over hype.
            </Typography>
            <Typography variant="body1" paragraph>
              Our success comes from understanding that AI is not about replacing human expertise but enhancing it. We work with customers who are willing to adapt and learn, integrating AI tools into their workflows thoughtfully rather than disrupting everything.
            </Typography>
            <Typography variant="body1">
              The key difference: We build solutions that actually work, not just in demos but in your daily operations.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default NordicApproachSection;
