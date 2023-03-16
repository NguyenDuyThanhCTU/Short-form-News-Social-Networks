import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './input.css'
import {PublicRoutes} from './Routes/Index'
import DefaultLayout from './Layout/DefaultLayout'
import OnlyOneLayout from './Layout/OnlyOneLayout'

function App() {
  return (
    <Router>
      <Routes>
        {PublicRoutes.map((route, index) => {
          let Layout = DefaultLayout
          if (route.Layout) {
            Layout = route.Layout
          } else if (route.Layout === null) {
            Layout = OnlyOneLayout
          }

          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
