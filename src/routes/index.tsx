import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Route';

import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { Main } from '../pages/Main';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Main Component={Home} />} />
        <Route path="/dashboard" element={<Main Component={PrivateRoute} />}>
          <Route path="/dashboard" element={<Main Component={Home} />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
