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
  width: 250;

  .MuiDrawer-paper {
    width: 250px;
    box-sizing: border-box;
    position: relative;

    @media (max-width: 768px) {
      ${props =>
        props.open_sidebar &&
        css`
          position: fixed;
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
  }

  span:nth-of-type():not(first-child()) {
    color: var(--gray-900);
  }
`;
