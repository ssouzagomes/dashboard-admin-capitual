import { styled, Box, css } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

interface ContentProps {
  is_authenticated: boolean;
}

export const Content = styled(Box)<ContentProps>`
  display: flex;
  width: 100%;

  ${props =>
    !props.is_authenticated &&
    css`
      .sidebar {
        display: none;
      }
    `}

  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
  }
`;
