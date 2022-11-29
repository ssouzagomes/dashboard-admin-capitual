import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { useAuth } from '../../hooks/useAuth';
import { ComponentBox, Container, Content } from './styles';

interface MainProps {
  Component: React.ComponentType;
}

export function Main({ Component }: MainProps): JSX.Element {
  const { isAuthenticated } = useAuth();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Container>
      <Navbar set_open_sidebar={setOpenSidebar} />

      <Content
        is_authenticated={!!isAuthenticated}
        open_sidebar={!!openSidebar}
      >
        <div className="sidebar">
          <Sidebar
            open_sidebar={!!openSidebar}
            set_open_sidebar={setOpenSidebar}
          />
        </div>

        <ComponentBox>
          <Component />
        </ComponentBox>
      </Content>
    </Container>
  );
}
