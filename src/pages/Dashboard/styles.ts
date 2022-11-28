import { styled, Box } from '@mui/material';

export const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 16px;
`;

export const CustomersProductsBox = styled(Box)`
  display: flex;
  gap: 16px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
