import Home from './pages/Home.jsx';
import About  from './pages/About.jsx';
import Housing  from './pages/Housing.jsx';
import ErrorPage  from './pages/ErrorPage.jsx';

const myRoutes = [
  { path: '/', label: 'Accueil', component: <Home /> },
  { path: '/about', label: 'A Propos', component: <About /> },
  { path: '/housing/:housingId', component: <Housing /> },
  { path: '/error', component: <ErrorPage /> },
  { path: '/error/:errorId', component: <ErrorPage /> },

];
export default myRoutes;

