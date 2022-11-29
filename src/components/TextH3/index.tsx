import { Typography } from '@mui/material';

interface TextH3Props {
  text: string;
}

export function TextH3({ text }: TextH3Props): JSX.Element {
  return (
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: 14,
        color: '#71717A',
      }}
    >
      {text}
    </Typography>
  );
}
