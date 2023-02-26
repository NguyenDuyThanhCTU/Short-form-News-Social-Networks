import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './input.css';
import { PublicRoutes } from './Routes/Index';
import DefaultLayout from './component/Layout/DefaultLayout';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          {PublicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            console.log(<Layout />);
            console.log(DefaultLayout);
            return (
              <Route key={index} path={route.path} element={<Layout route={<Page />}></Layout>} />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
