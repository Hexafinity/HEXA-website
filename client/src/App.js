import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RegisterPopup from "./components/RegisterPopup";
import { useState } from "react";
import Routes from "./Routes";
import { Provider } from 'react-redux';

import configureStore from '../src/store/store';
const store = configureStore();


function App() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <Header setModelOpen={setModelOpen} />
        <Routes />
        <Footer />
        <RegisterPopup />
        <RegisterPopup />
      </Router>
    </Provider>
  );
}

export default App;