import { styled, Box } from '@mui/material';

export const ContainerBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  img {
    width: 900px;
    height: 600px;
  }

  @media (max-width: 768px) {
    img {
      width: 700px;
      height: 400px;
    }
  }

  @media (max-width: 375px) {
    img {
      width: 350px;
      height: 200px;
    }
  }
`;
