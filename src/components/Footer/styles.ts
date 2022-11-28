import { styled, Box } from '@mui/material';

export const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 176px;

  border-radius: 16px;
  padding: 32px 48px;
  gap: 32px;

  background: white;

  .copyright {
    font-weight: 400;
    font-size: 16px;
    color: var(--gray-500);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 120px;
  }
`;

export const SocialMediasBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
`;
