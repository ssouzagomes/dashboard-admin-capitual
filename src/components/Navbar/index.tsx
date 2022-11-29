import { Link, useLocation } from 'react-router-dom';
import { HiSearch, HiMenuAlt1, HiBell, HiOutlineLogin } from 'react-icons/hi';
import { IconButton, InputBase, Avatar, Typography } from '@mui/material';
import logo from '../../assets/icons/logo.svg';
import avatar from '../../assets/images/avatar.png';

import { useAuth } from '../../hooks/useAuth';

import {
  StyledContainer,
  LogoMenuBox,
  MenuIconButton,
  NotificationIconBox,
  NavigationBox,
  StyledPaper,
  LoginRegisterBox,
} from './styles';

interface NavbarProps {
  set_open_sidebar: (openSidebar: boolean) => void;
}

export function Navbar({ set_open_sidebar }: NavbarProps) {
  const { isAuthenticated, signIn } = useAuth();
  const location = useLocation();

  return (
    <StyledContainer>
      <LogoMenuBox>
        <img src={logo} alt="Logo" />

        {isAuthenticated && location.pathname === '/dashboard' ? (
          <StyledPaper>
            <IconButton type="button" aria-label="search">
              <HiSearch />
            </IconButton>

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </StyledPaper>
        ) : (
          <NavigationBox>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
            </ul>
          </NavigationBox>
        )}

        {isAuthenticated && (
          <MenuIconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => set_open_sidebar(true)}
          >
            <HiMenuAlt1 size={28} />
          </MenuIconButton>
        )}
      </LogoMenuBox>

      {isAuthenticated ? (
        <NotificationIconBox>
          <IconButton edge="end" color="inherit" aria-label="open drawer">
            <HiBell size={24} />
          </IconButton>

          <Avatar alt="Avatar" src={avatar} />
        </NotificationIconBox>
      ) : (
        <LoginRegisterBox>
          <IconButton color="inherit" disableRipple onClick={signIn}>
            <HiOutlineLogin size={24} />

            <Typography
              component="span"
              ml="6px"
              fontWeight={500}
              fontSize="14px"
              color="#6B7280"
            >
              Login/Register
            </Typography>
          </IconButton>
        </LoginRegisterBox>
      )}
    </StyledContainer>
  );
}
