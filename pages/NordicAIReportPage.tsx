
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OpportunitySection from '../components/report/OpportunitySection';
import TechWaveSection from '../components/report/TechWaveSection';
import AdvantageSection from '../components/report/AdvantageSection';
import MarketSection from '../components/report/MarketSection';
import ReportPage from '../components/report/ReportPage';


const NordicAIReportPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <ReportPage>
            <Box sx={{ py: 8, textAlign: 'center', color: 'text.primary' }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{ color: 'primary.main', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                    >
                        {t('report.title')}
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9 }}>
                        {t('report.intro')}
                    </Typography>
                </Container>
            </Box>

            <OpportunitySection />
            <TechWaveSection />
            <AdvantageSection />
            <MarketSection />

        </ReportPage>
    );
};

export default NordicAIReportPage;