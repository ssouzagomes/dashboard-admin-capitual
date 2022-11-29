import { styled, Box, css } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

interface ContentProps {
  is_authenticated: boolean;
  open_sidebar: boolean;
}

export const Content = styled(Box)<ContentProps>`
  display: flex;
  width: 100%;
  flex: 1;

  .sidebar {
    height: 100%;
  }

  ${props =>
    !props.is_authenticated &&
    css`
      .sidebar {
        display: none;
      }
    `}

  @media (max-width: 768px) {
    ${props =>
      !props.open_sidebar &&
      css`
        .sidebar {
          display: none;
        }
      `}
  }
`;

export const ComponentBox = styled(Box)`
  width: 100%;
  padding: 13px 13px 8px 13px;
`;
