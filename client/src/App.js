import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './input.css';
import { PublicRoutes } from './Routes/Index';
import DefaultLayout from './component/Layout/DefaultLayout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="">

        <Routes>
         
           {PublicRoutes.map((route, index) => {
            
            let Layout =  DefaultLayout;
            if(route.Layout){
              Layout = route.Layout
            }
            else if(route.Layout === null){
              Layout = Fragment
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
