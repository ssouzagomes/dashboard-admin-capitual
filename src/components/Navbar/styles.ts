import { styled, Box, IconButton, Paper } from '@mui/material';

export const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 16px;

  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
`;

export const LogoMenuBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 360px) {
    img {
      display: none;
    }
  }
`;

export const NavigationBox = styled(Box)`
  display: flex;

  ul {
    list-style-type: none;

    display: flex;
    gap: 16px;
  }

  a {
    text-decoration: none;

    font-weight: 500;
    font-size: 14px;
    color: var(--gray-500);

    transition: color 0.2s;

    :hover,
    :active {
      color: var(--blue-600);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledPaper = styled(Paper)`
  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    width: 400px;
    padding: 2px 4px;
    border-radius: 16px;

    background: var(--gray-050);
    border: 1px solid var(--gray-200);

    box-shadow: none;

    color: var(--gray-500);
    font-weight: 400;
    font-size: 16px;
  }
`;

export const MenuIconButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NotificationIconBox = styled(Box)`
  display: flex;
  align-items: center;

  gap: 10px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const LoginRegisterBox = styled(Box)`
  display: flex;
  align-items: center;

  transition: background-color 0.2s;
  border-radius: 12px;

  :hover {
    background: var(--gray-100);
  }
`;
