import { Box, styled, Typography } from '@mui/material';

export const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 29%;

  background: white;
  border-radius: 16px;
  padding: 24px;
  gap: 16px;

  @media (max-width: 1320px) {
    width: 40%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CustomersBox = styled(Box)`
  display: flex;
  flex-direction: column;

  div:last-child {
    border: 0;
  }
`;

export const CustomerItem = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  border-bottom: 1px solid var(--gray-200);
`;

export const UserDataBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NameEmailBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const TypographyBody1 = styled(Typography)`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  color: var(--gray-900);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const TypographyBody2 = styled(Typography)`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  color: var(--gray-500);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
