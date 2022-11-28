import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { useAuth } from '../../hooks/useAuth';
import { Container, Content } from './styles';

interface MainProps {
  Component: React.ComponentType;
}

export function Main({ Component }: MainProps): JSX.Element {
  const { isAuthenticated } = useAuth();

  return (
    <Container>
      <Navbar />

      <Content is_authenticated={isAuthenticated}>
        <div className="sidebar">
          <Sidebar />
        </div>

        <Component />
      </Content>
    </Container>
  );
}
