import { AuthProvider } from './hooks/useAuth';
import Global from './styles/global';
import { Routes } from './routes';

export function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Global />
    </>
  );
}
