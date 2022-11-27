import { styled, Box } from '@mui/material';

export const ContainerBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  img {
    width: 900px;
    height: 600px;
  }

  @media (max-width: 900px) {
    img {
      width: 750px;
      height: 400px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 600px;
      height: 200px;
    }
  }

  @media (max-width: 375px) {
    img {
      width: 350px;
      height: 200px;
    }
  }
`;
