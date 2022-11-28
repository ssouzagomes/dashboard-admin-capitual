import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Route';

import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { Main } from '../pages/Main';
import { Dashboard } from '../pages/Dashboard';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Main Component={Home} />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Main Component={Dashboard} />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
