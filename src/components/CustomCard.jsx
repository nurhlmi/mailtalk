import { Card, CardContent, Stack, Typography } from '@mui/material';

const CustomCard = (props) => {
  const { src, title, description } = { ...props };
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction={{ xs: 'row', md: 'column' }} alignItems={{ xs: 'center', md: 'flex-start' }} spacing={2}>
          <img src={src} alt="Illustration" width="200" />
          <Typography variant="h4">{title}</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" mt={2}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
