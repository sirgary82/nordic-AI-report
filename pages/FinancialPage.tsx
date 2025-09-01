import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FinancialPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
            {t('financial_title')}
          </Typography>
          <Typography variant="h5" component="p" sx={{ opacity: 0.9 }}>
            {t('financial_subtitle')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" sx={{ mb: 4 }}>{t('financial_main_title')}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t('financial_main_desc')}
          </Typography>
          <Typography variant="h4" component="h3" sx={{ mt: 6, mb: 2 }}>{t('financial_use_cases_title')}</Typography>
          <ul>
            <li>{t('financial_use_case_1')}</li>
            <li>{t('financial_use_case_2')}</li>
            <li>{t('financial_use_case_3')}</li>
            <li>{t('financial_use_case_4')}</li>
            <li>{t('financial_use_case_5')}</li>
          </ul>
        </Container>
      </Box>
    </>
  );
};

export default FinancialPage;