import { Typography } from '@mui/material';

interface TextH2Props {
  text: string;
}

export function TextH2({ text }: TextH2Props): JSX.Element {
  return (
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 20,
        color: '#111827',
      }}
    >
      {text}
    </Typography>
  );
}
