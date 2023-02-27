import Home from '../page/Home/Home';
import Following from '../page/Following/Following';
import Login from '../page/Login/Login';
import Register from '../page/Register/Register';
import Setting from '../page/Setting/Setting';
import Dashboard from '../page/Dashboard/Dashboard';

const PublicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login ,Layout: null},
  { path: '/register', component: Register },
  { path: '/following', component: Following },
  { path: '/setting', component: Setting },
  { path: '/dashboard', component: Dashboard },
];

const PrivateRoutes = [
 
];

export { PublicRoutes, PrivateRoutes };
