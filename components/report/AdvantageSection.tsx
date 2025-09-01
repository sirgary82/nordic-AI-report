
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';

const AdvantageCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent sx={{ p: 4, textAlign: 'center' }}>
      <Box sx={{ mb: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 40, color: 'secondary.main' } })}
      </Box>
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const AdvantageSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('advantage.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {t('advantage.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <AdvantageCard 
              icon={<LanguageIcon />}
              title={t('advantage.card1_title')}
              description={t('advantage.card1_desc')}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AdvantageCard
              icon={<AccountBalanceIcon />}
              title={t('advantage.card2_title')}
              description={t('advantage.card2_desc')}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AdvantageCard
              icon={<VerifiedUserIcon />}
              title={t('advantage.card3_title')}
              description={t('advantage.card3_desc')}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AdvantageCard
              icon={<SpeedIcon />}
              title={t('advantage.card4_title')}
              description={t('advantage.card4_desc')}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvantageSection;
