import Home from '../page/Home/Home';
import Following from '../page/Following/Following';
import Login from '../page/Login/Login';
import Register from '../page/Register/Register';
import Setting from '../page/Setting/Setting';
import Dashboard from '../page/Dashboard/Dashboard';
import Profile from '../page/Profile/Profile';
import ProfileLayout from '../component/Layout/ProfileLayout';

const PublicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/following', component: Following },
  { path: '/setting', component: Setting, Layout: null },
  { path: '/dashboard', component: Dashboard, Layout: ProfileLayout },
  { path: '/profile', component: Profile, Layout: ProfileLayout },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
