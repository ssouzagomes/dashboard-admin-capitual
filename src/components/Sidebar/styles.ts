import { styled, Box, Drawer, ListItem, ListItemText } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;

  height: 100%;
`;

export const StyledDrawer = styled(Drawer)`
  display: flex;
  width: 250;

  .MuiDrawer-paper {
    width: 250px;
    box-sizing: border-box;
    position: relative;
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
    color: var(--gray-900);
    font-family: 'Inter';
  }
`;
