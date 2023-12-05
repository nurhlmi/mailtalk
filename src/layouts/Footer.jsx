import { Box, Link, Container, Divider, Grid, Stack, Typography } from '@mui/material';
// import { FacebookRounded, Instagram, Twitter } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <Box component="footer" bgcolor="#101820" color="#fff" pt={10} pb={5}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} pb={5}>
          <Grid item xs={12} md={3}>
            <Logo white />
            <Typography variant="body2" mt={2.2}>
              Anonym Messaging.
              <br />
              Open Chat.
              <br />
              Thematic Discussion.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack spacing={1}>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Home
              </Link>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Fitur
              </Link>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                FAQ
              </Link>
              <Link
                href={import.meta.env.VITE_PLAYSTORE}
                color="inherit"
                underline="none"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack spacing={1}>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Tentang Kami
              </Link>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Kontak Kami
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/privacy-policy" color="inherit" underline="none">
                Kebijakan Privasi
              </Link>
              <Link component={RouterLink} to="/terms-condition" color="inherit" underline="none">
                Syarat & Ketentuan
              </Link>
              <Link component={RouterLink} to="/account-deletion" color="inherit" underline="none">
                Penghapusan Akun
              </Link>
              {/* <Tooltip title="Instagram">
                <IconButton>
                  <Instagram />
                </IconButton>
              </Tooltip>
              <Tooltip title="Facebook">
                <IconButton>
                  <FacebookRounded />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter">
                <IconButton>
                  <Twitter />
                </IconButton>
              </Tooltip> */}
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="caption" color="text.secondary">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
