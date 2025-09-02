
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OpportunitySection from '../components/report/OpportunitySection';
import TechWaveSection from '../components/report/TechWaveSection';
import AdvantageSection from '../components/report/AdvantageSection';
import MarketSection from '../components/report/MarketSection';
import PageContainer from '../components/PageContainer';

const NordicAIReportPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM.jpeg">
            <Box sx={{ py: 8, textAlign: 'center', color: 'text.primary' }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{ 
                            color: 'white', 
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                            fontWeight: 700 
                        }}
                    >
                        {t('report.title', 'The Nordic AI Advantage Report')}
                    </Typography>
                    <Typography 
                        variant="h5" 
                        component="p" 
                        sx={{ 
                            mb: 4, 
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.2)' 
                        }}
                    >
                        {t('report.intro', 'A comprehensive analysis of AI opportunities and advantages in the Nordic region')}
                    </Typography>
                </Container>
            </Box>

            <OpportunitySection />
            <TechWaveSection />
            <AdvantageSection />
            <MarketSection />
        </PageContainer>
    );
};

export default NordicAIReportPage;