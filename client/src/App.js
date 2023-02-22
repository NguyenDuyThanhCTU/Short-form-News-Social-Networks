import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/register/Register";
import "./input.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Nav from "./component/nav/Nav";
import Login from "./component/login/Login";

function App() {
  return (
    <Router>
      <div className="">
        <Header className="fixed" />
        <Home />
        <Nav />

        <Routes>
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
