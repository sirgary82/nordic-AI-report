import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, bio, image }) => {
  return (
    <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          {/* Provide empty string as fallback for src */}
          <Avatar 
            src={image || ""}
            alt={name}
            sx={{ width: 120, height: 120, mb: 2 }}
          />
          <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 0.5 }}>{name}</Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 2 }}>{title}</Typography>
        </Box>
        <Typography variant="body1">{bio}</Typography>
      </CardContent>
    </Card>
  );
};

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundImage="/images/LKDV_website_layout_1_57PM_7_15PM.jpeg">
      {/* Company Overview Section */}
      <Box sx={{
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Card sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            p: { xs: 3, md: 5 },
          }}>
            <CardContent>
              <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: 700, textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
                {t('about_title')}
              </Typography>
              <Typography variant="h5" component="p" sx={{ opacity: 0.95, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                {t('about_subtitle')}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Company Mission & Vision */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main', fontWeight: 700 }}>
                    {t('about_mission_title')}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {t('about_mission_text1')}
                  </Typography>
                  <Typography variant="body1">
                    {t('about_mission_text2')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main', fontWeight: 700 }}>
                    {t('about_vision_title')}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {t('about_vision_text1')}
                  </Typography>
                  <Typography variant="body1">
                    {t('about_vision_text2')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Company History */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', mb: 6 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
                {t('about_history_title')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('about_history_text1')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('about_history_text2')}
              </Typography>
              <Typography variant="body1">
                {t('about_history_text3')}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Leadership Team */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" sx={{ mb: 4, color: 'white', fontWeight: 700, textShadow: '1px 1px 3px rgba(0,0,0,0.5)', textAlign: 'center' }}>
            {t('about_team_title')}
          </Typography>
          <Grid container spacing={4}>
            {/* Team members would be mapped dynamically from translation in real implementation */}
            <Grid item xs={12} md={4}>
              <TeamMember 
                name={t('about_team_member1_name')}
                title={t('about_team_member1_title')}
                bio={t('about_team_member1_bio')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamMember 
                name={t('about_team_member2_name')}
                title={t('about_team_member2_title')}
                bio={t('about_team_member2_bio')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamMember 
                name={t('about_team_member3_name')}
                title={t('about_team_member3_title')}
                bio={t('about_team_member3_bio')}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default AboutPage;
