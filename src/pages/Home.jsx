import { Box, Card, CardContent, Container, Grid, Link, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import CustomCard from '../components/CustomCard';
import CustomAccordion from '../components/CustomAccordion';

export default function Home() {
  return (
    <Page title="Anonym Messaging. Open Chat. Thematic Discussion.">
      <Navbar />
      <Stack
        id="home"
        sx={{
          color: '#fff',
          //  background: '#185a9d',
          //  background: '-webkit-linear-gradient(to right, #43cea2, #185a9d)',
          background: 'linear-gradient(to right, #43cea2, #185a9d)',
        }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="center" pt={15} pb={10}>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }} order={{ xs: 2, md: 1 }}>
              <Typography variant="h2">Anonym Messaging.</Typography>
              <Typography variant="h2">Open Chat.</Typography>
              <Typography variant="h2">
                Thematic Discussion. <br />
                <small>for Your Community *)</small>
              </Typography>
              <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }} spacing={2} mt={5}>
                <Link href={import.meta.env.VITE_PLAYSTORE} target="_blank" rel="noreferrer">
                  <img src="/static/badges/GooglePlay.svg" alt="Download di Google Play" width={150} />
                </Link>
                {/* <Link href={import.meta.env.VITE_APPSTORE} target="_blank" rel="noreferrer">
                  <img src="/static/badges/AppStore.svg" alt="Download di Google Play" width={150} />
                </Link> */}
              </Stack>
              <Typography variant="body2" mt={5}>
                *) Invited group only. Sementara, hanya untuk domain email yang terundang.
              </Typography>
            </Grid>
            <Grid item align="center" xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
              <img src="/static/mockups/portrait.png" alt="Download on the App Store" width="50%" />
            </Grid>
          </Grid>
        </Container>
      </Stack>
      <Container sx={{ pt: 12 }} id="feature">
        <Typography variant="h3" align="center" gutterBottom>
          Build Community You Desire
        </Typography>
        <Typography color="text.secondary" align="center">
          That is fun, friendly, inclusive, open, creative, and innovative
        </Typography>
        <Grid container spacing={3} mt={0}>
          <Grid item xs={12} md={4}>
            <CustomCard
              src="/static/illustrations/texting.svg"
              title="Anonym Messaging"
              description="Fitur ini memudahkan anggota organisasi di berbagai level untuk mendapatkan informasi yang lebih faktual, tidak bias, sekaligus aman bagi pemberi informasi."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomCard
              src="/static/illustrations/messaging.svg"
              title="Open Chat"
              description="Fitur ini memudahkan anggota organisasi di berbagai level untuk mengirimkan atau mendapatkan informasi secara sangat cepat. Cocok untuk informasi semacam 'breaking news'"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomCard
              src="/static/illustrations/feed.svg"
              title="Thematic Discussion"
              description="Fitur ini menjembatani ide-ide kreatif dari anggota komunitas/organisasi tanpa batas-batas geografi dan hirarki jabatan. Ini untuk membuka peluang-peluang baru bagi organisasi dan anggotanya."
            />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ pt: 12 }}>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Re-Color Your Identity
            </Typography>
            <Typography color="text.secondary">
              Bangun reputasi kamu dengan mengisi profil secara lengkap, serta memilih warna tulisan yang cocok dengan
              kepribadian kamu. Warna ini akan menjadi ciri khas kamu dan menjadi penguat karakter kamu dalam
              berinteraksi dengan pengguna lain. Warna pilihanmu akan terlihat pada setiap obrolan (kecuali di fitur
              anonym messaging).
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
            <img src="/static/illustrations/select.svg" alt="Order" width="100%" />
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} sm={8} md={6}>
            <img src="/static/illustrations/customization.svg" alt="Order" width="100%" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Edit & Delete your Post
            </Typography>
            <Typography color="text.secondary">
              Hampir di semua bagian (kecuali anonym messaging), postingan kamu bisa diciptakan secara bebas karena bisa
              diedit dan dihapus sesering yang kamu mau. Ini memudahkan kamu untuk senantiasa memperbaiki akurasi
              informasi.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Reply Privately: Anonymously or Openly
            </Typography>
            <Typography color="text.secondary">
              Setiap postingan orang lain dapat dibalas secara privat, baik secara terbuka maupun anonim. Ini memudahkan
              kamu untuk berkomunikasi secara lebih pas berdasarakn konteksnya. Ada hal-hal yang tidak bisa direspon
              secara terbuka, namun justru perlu direspon secara privat, atau bahkan secara anonim.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
            <img src="/static/illustrations/chat.svg" alt="Order" width="100%" />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ pt: 12 }} id="faq">
        <CustomAccordion />
      </Container>
      <Container sx={{ pt: 12 }} id="download">
        <Card
          sx={{
            mb: 10,
            color: '#fff',
            background: 'linear-gradient(to right, #43cea2, #185a9d)',
          }}
        >
          <CardContent sx={{ px: { xs: 1, md: 2 } }}>
            <Typography variant="h3" textAlign={{ xs: 'center', md: 'left' }}>
              Download aplikasi MailTalk sekarang!
            </Typography>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }} spacing={{ xs: 1, md: 2 }} mt={2}>
              <Link href={import.meta.env.VITE_PLAYSTORE} target="_blank" rel="noreferrer">
                <img src="/static/badges/GooglePlay.svg" alt="Download di Google Play" width={150} />
              </Link>
              {/* <Link href={import.meta.env.VITE_APPSTORE} target="_blank" rel="noreferrer">
                <img src="/static/badges/AppStore.svg" alt="Download di Google Play" width={150} />
              </Link> */}
            </Stack>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                top: 20,
                right: 0,
                width: 800,
                height: 800,
                background:
                  'url(https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </Page>
  );
}
