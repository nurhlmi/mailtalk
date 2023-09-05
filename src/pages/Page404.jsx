import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Box component="img" src="/static/illustrations/404.svg" sx={{ height: 300, mx: 'auto' }} />

          <Typography variant="h3" paragraph>
            Maaf, halaman tidak ditemukan!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }} mb={3}>
            Kami tidak dapat menemukan halaman yang Anda cari. Pastikan untuk memeriksa ejaan Anda.
          </Typography>

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Kembali
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
