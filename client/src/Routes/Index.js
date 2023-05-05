import Following from '../page/Following/Following'
import VideoCard from '../Layout/DefaultLayout/VideoCard/VideoCard'
import Login from '../page/Login/Login'
import Register from '../page/Register/Register'
import Setting from '../page/Setting/Setting'
import Dashboard from '../page/Dashboard/Dashboard'
import Profile from '../page/Profile/Profile'
import Upload from '../page/Upload/Upload'
import ProfileLayout from '../Layout/ProfileLayout'
import OnlyHeader from '../Layout/OnlyHeader'
import Detail from '../page/Detail/Detail'
import OnlyOneLayout from '../Layout/OnlyOneLayout/index'
import Empty from '../page/Empty/Empty'
import LossPass from '../page/LostPass/LossPass'

const PublicRoutes = [
  {path: '/', component: Empty},
  {path: '/login', component: Login},
  {path: '/losspassword', component: LossPass},
  {path: '/register', component: Register},
  {path: '/following', component: Following},
  {path: '/setting', component: Setting, Layout: null},
  {path: '/dashboard', component: Dashboard, Layout: ProfileLayout},
  {path: '/profile/:id', component: Profile, Layout: ProfileLayout},
  {path: '/upload', component: Upload, Layout: OnlyHeader},
  {path: '/post/:id', component: Detail, Layout: OnlyOneLayout},
]

const PrivateRoutes = []

export {PublicRoutes, PrivateRoutes}
