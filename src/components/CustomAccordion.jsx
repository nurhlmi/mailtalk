import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomAccordion() {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography color="text.secondary" align="center" mb={4}>
        Pertanyaan yang sering diajukan
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>MailTalk itu apa sih?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            MailTalk adalah aplikasi pesan instan tertutup yang hanya menjembatani komunikasi sesama pengguna dengan
            domain email yang sama. Misal, Anda memiliki email dengan alamat sumiati@mailtalk.id maka Anda hanya bisa
            berinteraksi dengan pengguna lain yang memiliki domain email yang sama dengan Anda, yaitu @mailtalk.id.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Apa keuntungan menggunakan MailTalk?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dengan menggunakan MailTalk, Anda memiliki peluang untuk berinteraksi dengan seluruh anggota komunitas atau
            organisasi Anda. Organisasi yang besar biasanya menyulitkan anggotanya untuk kenal satu sama lain. Dengan
            aplikasi ini, Anda akan mudah menemukan teman-teman baru dalam satu komunitas besar Anda.
            <br />
            <br />
            Anda juga bisa membangun reputasi yang positif dengan memanfaatkan fitur-fitur yang ada. Reputasi ini sangat
            baik untuk kepentingan Anda dan organisasi/komunitas Anda.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Siapa saja yang bisa bergabung?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Untuk menjadi pengguna MailTalk, Anda harus memiliki alamat email khusus organisasi, misalnya yang memiliki
            domain @mailtalk.id. Kalau nama organisasi Anda misalnya adalah 'mycompany', biasanya alamat email Anda
            adalah namakamu@mycompany.id. Gunakanlah alamat email tersebut.
            <br />
            <br />
            Untuk saat ini, hanya domain email yang sudah diundang yang bisa menggunakan MailTalk. Selanjutnya akan
            terus ditambah sesuai dengan perkembangan pengguna.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
