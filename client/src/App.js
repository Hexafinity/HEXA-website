// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RegisterPopup from "./components/RegisterPopup";
import { useState } from "react";

import Routes from "./Routes";

function App() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <Router>
      <Header setModelOpen={setModelOpen} />
      <Routes />
      <Footer />
      <RegisterPopup />
      <RegisterPopup />
    </Router>
  );
}

export default App;

{/* <div className="nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i">
    <div className="ovm-line"></div>
  </div> */}