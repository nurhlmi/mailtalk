import { Link, Stack, Typography } from '@mui/material';

const CustomButton = (props) => {
  const { img, subtitle, title } = { ...props };
  return (
    <Stack
      direction="row"
      alignItems="center"
      bgcolor="#000"
      component={Link}
      href="https://www.finku.id/"
      target="_blank"
      underline="none"
      color="inherit"
      borderRadius={2}
      spacing={1}
      px={2}
      py={1}
    >
      <img src={`/static/icons/${img}`} alt="Icon" width="25" height="25" />
      <Stack alignItems="flex-start">
        <Typography variant="caption">{subtitle}</Typography>
        <Typography variant="body2" fontWeight="bold">
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CustomButton;
