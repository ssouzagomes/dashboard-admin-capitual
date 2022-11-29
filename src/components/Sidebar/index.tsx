import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  HiLockClosed,
  HiArrowLeft,
} from 'react-icons/hi';

import {
  StyledBox,
  StyledDrawer,
  StyledListItem,
  StyledListItemText,
} from './styles';

interface SidebarProps {
  open_sidebar: boolean;
  set_open_sidebar: (openSidebar: boolean) => void;
}

export function Sidebar({
  open_sidebar,
  set_open_sidebar,
}: SidebarProps): JSX.Element {
  const subListIcons = [
    <HiClipboardList size={24} />,
    <HiCollection size={24} />,
    <HiSupport size={24} />,
  ];

  const navigate = useNavigate();
  const [openedItem, setOpenedItem] = useState('');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const badgeTheme = createTheme({
    palette: {
      primary: {
        main: '#FBD5D5',
      },
    },
  });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleOpenPage = useCallback(
    (page: string) => {
      setOpenedItem(openedItem === page ? '' : page);

      if (page === 'Overview' || page === 'Dashboard') {
        navigate('/dashboard');
      }
    },
    [openedItem, navigate],
  );

  return (
    <StyledBox>
      <StyledDrawer
        variant="persistent"
        anchor="left"
        open
        open_sidebar={open_sidebar}
      >
        <List sx={{ padding: 0 }}>
          {windowSize < 768 && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="close sidebar"
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '100%',
                  pr: 2,
                }}
                onClick={() => set_open_sidebar(false)}
              >
                <HiArrowLeft />
              </IconButton>

              <Divider />
            </>
          )}

          <StyledListItem disablePadding>
            <ListItemButton
              sx={{ paddingTop: 0, paddingBottom: 0, marginTop: 1 }}
              onClick={() => handleOpenPage('Overview')}
            >
              <ListItemIcon
                sx={{
                  color: '#111827',
                  ...(openedItem === 'Overview' && {
                    color: '#0E9F6E',
                  }),
                }}
              >
                <HiChartPie size={24} />
              </ListItemIcon>
              <StyledListItemText
                primary="Overview"
                sx={{
                  color: '#111827',
                  ...(openedItem === 'Overview' && {
                    color: '#0E9F6E',
                  }),
                }}
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
              <ListItemButton
                sx={{ pl: 9, pt: 0 }}
                onClick={() => handleOpenPage('Dashboard')}
              >
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

          <StyledListItem disablePadding>
            <ListItemButton
              color="inherit"
              sx={{ paddingTop: 0, marginTop: 1 }}
              onClick={() => handleOpenPage('Authentication')}
            >
              <ListItemIcon sx={{ color: '#111827' }}>
                <HiLockClosed size={24} />
              </ListItemIcon>
              <StyledListItemText primary="Authentication" />
              <IconButton edge="end">
                {openedItem === 'Authentication' ? (
                  <HiChevronUp size={24} color="#111827" />
                ) : (
                  <HiChevronDown size={24} color="#111827" />
                )}
              </IconButton>
            </ListItemButton>
          </StyledListItem>
        </List>

        <Divider />

        <List sx={{ paddingTop: 0 }}>
          {['Docs', 'Components', 'Helps'].map((text, index) => (
            <StyledListItem key={text} disablePadding>
              <ListItemButton
                sx={{ paddingTop: 0, paddingBottom: 0, marginTop: 1 }}
              >
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
