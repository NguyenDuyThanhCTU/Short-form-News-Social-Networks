import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/register/Register";
import Login from "./component/login/Login";
import "./input.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />

        <Routes>
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
