import {
  styled,
  Box,
  Drawer,
  ListItem,
  ListItemText,
  css,
} from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;

  height: 100%;
`;

interface StyledDrawerProps {
  open_sidebar: boolean;
}

export const StyledDrawer = styled(Drawer)<StyledDrawerProps>`
  display: flex;

  .MuiDrawer-paper {
    width: 250px;
    box-sizing: border-box;
    position: relative;

    @media (max-width: 768px) {
      ${props =>
        props.open_sidebar &&
        css`
          position: fixed;
          width: 235px;
        `}
    }
  }
`;

export const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center;

  padding: 0;
`;

export const StyledListItemText = styled(ListItemText)`
  span {
    font-weight: 500;
    font-family: 'Inter';

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  span:nth-of-type():not(first-child()) {
    color: var(--gray-900);
  }
`;
