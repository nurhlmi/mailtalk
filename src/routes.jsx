import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/Page404';

export default function Router() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '*', element: <NotFound replace /> },
  ]);
}
