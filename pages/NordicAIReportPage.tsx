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
                            The Nordic AI Advantage Report
                        </Typography>
                        <Typography 
                            variant="h5" 
                            component="p" 
                            sx={{ 
                                mb: 4, 
                                textShadow: '1px 1px 2px rgba(0,0,0,0.2)' 
                            }}
                        >
                            A monumental shift is underway. While 90% of global AI projects fail, our Nordic approach delivers working solutions that create real business value.
                        </Typography>
                    </Card>
                </Container>
            </Box>

            {/* The 10% That Succeed */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
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

            {/* The Unmatched Finnish Advantage */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                            The Unmatched Finnish Advantage
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our Isolated AI Platform offers a unique value proposition that global providers cannot match, built on four pillars of local expertise and technological superiority.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Language Depth</Typography>
                                        <Typography variant="body2">Superior understanding of Finnish grammar, legal terminology, and business context.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Local Integration</Typography>
                                        <Typography variant="body2">Direct access to Finnish open source data like YTJ business registry, Finlex, and Statistics Finland.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Compliance Specialization</Typography>
                                        <Typography variant="body2">Deep understanding of Finnish GDPR interpretation, legislation on highly regulated markets, and local regulatory nuances.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Speed to Market</Typography>
                                        <Typography variant="body2">With a 95% complete MVP, the platform offers a significant head start in capturing the market.</Typography>
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
                            Enterprise AI: The Boom is Here
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The era of AI experimentation is over. For Finnish and Nordic enterprises, AI is now a core operational component, creating a massive market for solutions that respect data sovereignty.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h2" sx={{ fontWeight: 700 }}>37.6%</Typography>
                                        <Typography variant="subtitle1">Global Enterprise AI CAGR (2025-2030)</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h2" sx={{ fontWeight: 700 }}>€2.86B</Typography>
                                        <Typography variant="subtitle1">Finnish AI Market by 2030 (Projected)</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h2" sx={{ fontWeight: 700 }}>~70%</Typography>
                                        <Typography variant="subtitle1">of large Finnish firms using AI (up from 53% in 2023)</Typography>
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
                            Finland Leads the Charge in AI Adoption
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Nordic countries are Europe's top AI adopters. Among large enterprises, Finland shows an exceptional commitment, significantly outpacing the EU average and demonstrating a mature market ready for advanced solutions.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            {/* Capturing the €500M+ Market & Strategic Focus Areas */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                            Capturing the €500M+ Market
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our strategy focuses on dominating the Finnish market first, then expanding to the broader Nordic region and other small-language nations with similar sovereignty needs.
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, mt: 3, mb: 2 }}>
                            Strategic Focus Areas
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Legal Firms (~€50M opportunity)</Typography>
                                        <Typography variant="body2">Providing RAG solutions for case law and document analysis with Finnish legal terminology.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Healthcare</Typography>
                                        <Typography variant="body2">Addressing HIPAA compliance needs with secure analysis of patient data using Finnish medical terms.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Financial Services</Typography>
                                        <Typography variant="body2">Meeting strict GDPR requirements with local business intelligence and secure transaction analysis.</Typography>
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
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                            The Tech Wave Fueling the Growth
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Three critical technology trends are converging to unlock the next generation of enterprise AI, each creating its own multi-billion euro market.
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, mt: 3, mb: 2 }}>
                            The Bedrock of Trusted AI
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Securing data during processing is paramount for regulated industries. Confidential Computing is the key, with Europe's market growing faster than North America's.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Global Market</Typography>
                                        <Typography variant="body2">~$5.5B (2023) ➔ ~$154B (2030)</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>European Growth</Typography>
                                        <Typography variant="body2">~62% CAGR, outpacing global average.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Typography variant="body1" paragraph sx={{ mt: 3 }}>
                            Local Driver: Essential for GDPR & HIPAA compliance, enabling AI on sensitive data. Our platform is built on this principle.
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