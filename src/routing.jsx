import Home from './pages/Home.jsx';
import About  from './pages/About.jsx';
import Housing  from './pages/Housing.jsx';
import ErrorPage  from './pages/ErrorPage.jsx';

const myRoutes = [
  { path: '/OCR-DA-P11/', label: 'Accueil', component: <Home /> },
  { path: '/OCR-DA-P11/about', label: 'A Propos', component: <About /> },
  { path: '/OCR-DA-P11/housing/:housingId', component: <Housing /> },
  { path: '/OCR-DA-P11/error', component: <ErrorPage /> },
  { path: '/OCR-DA-P11/error/:errorId', component: <ErrorPage /> },

];
export default myRoutes;

