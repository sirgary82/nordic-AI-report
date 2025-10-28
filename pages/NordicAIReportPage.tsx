import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OpportunitySection from '../components/report/OpportunitySection';
import TechWaveSection from '../components/report/TechWaveSection';
import AdvantageSection from '../components/report/AdvantageSection';
import MarketSection from '../components/report/MarketSection';
import NordicApproachSection from '../components/report/NordicApproachSection';
import PageContainer from '../components/PageContainer';

const NordicAIReportPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM.jpeg">
            <Box sx={{ py: 8, textAlign: 'center', color: 'text.primary' }}>
                <Container maxWidth="md">
                    <Card>
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{ 
                                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                                fontWeight: 700
                            }}
                        >
                            {t('report.title')}
                        </Typography>
                        <Typography 
                            variant="h5" 
                            component="p" 
                            sx={{ 
                                mb: 4, 
                                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                            }}
                        >
                            {t('report.intro')}
                        </Typography>
                    </Card>
                </Container>
            </Box>

            {/* The 10% That Succeed */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                            {t('report.ten_percent.title')}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {t('report.ten_percent.p1')}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {t('report.ten_percent.p2')}
                        </Typography>
                        <Typography variant="body1">
                            {t('report.ten_percent.p3')}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            {/* The Unmatched Finnish Advantage */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                            {t('advantage.title')}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {t('advantage.subtitle')}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{t('advantage.card1_title')}</Typography>
                                        <Typography variant="body2">{t('advantage.card1_desc')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{t('advantage.card2_title')}</Typography>
                                        <Typography variant="body2">{t('advantage.card2_desc')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{t('advantage.card3_title')}</Typography>
                                        <Typography variant="body2">{t('advantage.card3_desc')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{t('advantage.card4_title')}</Typography>
                                        <Typography variant="body2">{t('advantage.card4_desc')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>

            {/* Enterprise AI: The Boom is Here */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                            {t('opportunity.title')}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {t('opportunity.subtitle')}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h2" sx={{ fontWeight: 700 }}>37.6%</Typography>
                                        <Typography variant="subtitle1">{t('opportunity.stat_cagr')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h2" sx={{ fontWeight: 700 }}>€2.86B</Typography>
                                        <Typography variant="subtitle1">{t('opportunity.stat_market')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h2" sx={{ fontWeight: 700 }}>~70%</Typography>
                                        <Typography variant="subtitle1">{t('opportunity.stat_firms')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>

            {/* Finland Leads the Charge in AI Adoption */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                            {t('opportunity.chart_title')}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {t('opportunity.chart_desc')}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            {/* Capturing the €500M+ Market & Strategic Focus Areas */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                            {t('market.title')}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {t('market.subtitle')}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, mt: 3, mb: 2, color: 'white' }}>
                            {t('market.focus_title')}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{t('market.legal_primary')}</Typography>
                                        <Typography variant="body2">{t('market.legal_secondary')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{t('market.healthcare_primary')}</Typography>
                                        <Typography variant="body2">{t('market.healthcare_secondary')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{t('market.financial_primary')}</Typography>
                                        <Typography variant="body2">{t('market.financial_secondary')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>

            {/* The Tech Wave Fueling the Growth & Bedrock of Trusted AI */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                            {t('techwave.title')}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {t('techwave.subtitle')}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, mt: 3, mb: 2, color: 'white' }}>
                            {t('techwave.confidential_title')}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {t('techwave.confidential_desc')}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{t('techwave.confidential_market_label')}</Typography>
                                        <Typography variant="body2">{t('techwave.confidential_market_value')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{t('techwave.confidential_growth_label')}</Typography>
                                        <Typography variant="body2">{t('techwave.confidential_growth_value')}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Typography variant="body1" paragraph sx={{ mt: 3 }}>
                            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 700 }}>{t('techwave.confidential_local_label')}</Box> {t('techwave.confidential_local_value')}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            {/* Existing report sections */}
            <NordicApproachSection />
            <AdvantageSection />
            <OpportunitySection />
            <MarketSection />
            <TechWaveSection />
        </PageContainer>
    );
};

export default NordicAIReportPage;
