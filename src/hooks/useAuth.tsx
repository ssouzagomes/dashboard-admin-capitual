/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface AuthContextData {
  signIn(): void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = localStorage.getItem('@Dashboard:user');

    if (user) {
      return true;
    }

    return false;
  });

  const signIn = useCallback(() => {
    localStorage.setItem('@Dashboard:user', 'true');

    setIsAuthenticated(true);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
