import { useCallback, useState } from 'react';

import {
  List,
  IconButton,
  Divider,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Badge,
} from '@mui/material';

import {
  HiChartPie,
  HiChevronUp,
  HiChevronDown,
  HiClipboardList,
  HiCollection,
  HiSupport,
  HiDocumentReport,
  HiInboxIn,
  HiShoppingBag,
} from 'react-icons/hi';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  StyledBox,
  StyledDrawer,
  StyledListItem,
  StyledListItemText,
} from './styles';

export function Sidebar(): JSX.Element {
  const subListIcons = [
    <HiClipboardList size={24} />,
    <HiCollection size={24} />,
    <HiSupport size={24} />,
  ];

  const badgeTheme = createTheme({
    palette: {
      primary: {
        main: '#FBD5D5',
      },
    },
  });

  const [openedItem, setOpenedItem] = useState('');

  const handleOpenPage = useCallback(
    (page: string) => {
      setOpenedItem(openedItem === page ? '' : page);
    },
    [openedItem],
  );

  return (
    <StyledBox>
      <StyledDrawer variant="persistent" anchor="left" open>
        <List sx={{ padding: 0 }}>
          <StyledListItem disablePadding>
            <ListItemButton
              sx={{ paddingTop: 0, paddingBottom: 0, marginTop: 1 }}
              onClick={() => handleOpenPage('Overview')}
            >
              <ListItemIcon sx={{ color: '#0E9F6E' }}>
                <HiChartPie size={24} />
              </ListItemIcon>
              <StyledListItemText
                primary="Overview"
                sx={{ color: '#0E9F6E' }}
              />
            </ListItemButton>
          </StyledListItem>

          <StyledListItem disablePadding>
            <ListItemButton
              color="inherit"
              sx={{ paddingTop: 0, paddingBottom: 0, marginTop: 1 }}
              onClick={() => handleOpenPage('Pages')}
            >
              <ListItemIcon sx={{ color: '#111827' }}>
                <HiDocumentReport size={24} />
              </ListItemIcon>
              <StyledListItemText primary="Pages" />
              <IconButton edge="end">
                {openedItem === 'Pages' ? (
                  <HiChevronUp size={24} color="#111827" />
                ) : (
                  <HiChevronDown size={24} color="#111827" />
                )}
              </IconButton>
            </ListItemButton>
          </StyledListItem>
          <Collapse in={openedItem === 'Pages'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 9, pt: 0 }}>
                <StyledListItemText primary="Dashboard" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 9, pt: 0 }}>
                <StyledListItemText primary="Team" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 9, pt: 0 }}>
                <StyledListItemText primary="Projects" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 9, pt: 0 }}>
                <StyledListItemText primary="Calendar" />
              </ListItemButton>
            </List>
          </Collapse>

          <StyledListItem disablePadding>
            <ListItemButton
              color="inherit"
              sx={{ paddingTop: 0, paddingBottom: 0, marginTop: 1 }}
              onClick={() => handleOpenPage('Sales')}
            >
              <ListItemIcon sx={{ color: '#111827' }}>
                <HiShoppingBag size={24} />
              </ListItemIcon>
              <StyledListItemText primary="Sales" />
              <IconButton edge="end">
                {openedItem === 'Sales' ? (
                  <HiChevronUp size={24} color="#111827" />
                ) : (
                  <HiChevronDown size={24} color="#111827" />
                )}
              </IconButton>
            </ListItemButton>
          </StyledListItem>
          <Collapse in={openedItem === 'Sales'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 9, pt: 0 }}>
                <StyledListItemText primary="Product List" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 9, pt: 0 }}>
                <StyledListItemText primary="Billing" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 9, pt: 0 }}>
                <StyledListItemText primary="Invoice" />
              </ListItemButton>
            </List>
          </Collapse>

          <StyledListItem disablePadding>
            <ListItemButton
              color="inherit"
              sx={{ paddingTop: 0, paddingBottom: 0, marginTop: 1 }}
            >
              <ListItemIcon sx={{ color: '#111827' }}>
                <HiInboxIn size={24} />
              </ListItemIcon>
              <StyledListItemText primary="Messages" />
              <IconButton edge="start">
                <ThemeProvider theme={badgeTheme}>
                  <Badge badgeContent={1} color="primary" />
                </ThemeProvider>
              </IconButton>
            </ListItemButton>
          </StyledListItem>
        </List>

        <Divider />

        <List>
          {['Docs', 'Components', 'Helps'].map((text, index) => (
            <StyledListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#111827' }}>
                  {subListIcons[index]}
                </ListItemIcon>
                <StyledListItemText primary={text} />
              </ListItemButton>
            </StyledListItem>
          ))}
        </List>
      </StyledDrawer>
    </StyledBox>
  );
}
