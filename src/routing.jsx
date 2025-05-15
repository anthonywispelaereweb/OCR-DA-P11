import Home from './pages/Home.jsx';
import About  from './pages/About.jsx';

const myRoutes = [
  { path: '/', label: 'Accueil', component: <Home /> },
  { path: '/about', label: 'A Propos', component: <About /> },
  { path: '/housing/:housingId', component: <About /> }
];
export default myRoutes;

