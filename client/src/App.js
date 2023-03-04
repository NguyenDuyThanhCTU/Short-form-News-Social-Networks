import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './input.css';
import { PublicRoutes } from './Routes/Index';
import DefaultLayout from './component/Layout/DefaultLayout';
import OnlyOneLayout from './component/Layout/OnlyOneLayout';

function App() {
  return (
    <Router>
      <div className="h-full w-full">
        <Routes>
          {PublicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.Layout) {
              Layout = route.Layout;
            } else if (route.Layout === null) {
              Layout = OnlyOneLayout;
            }

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
