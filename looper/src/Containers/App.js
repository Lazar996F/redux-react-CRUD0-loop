import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Provider } from "react-redux";
//import store from "../store";
import Navbar from "../components/Navbar/Navbar";
import ClientBar from "../Containers/ClientBar";
import Artwork from "../Containers/Artwork";

function App() {
  return (
    //<Provider store={store}>
    <Router>
      <Route path="/" component={Navbar} />
      <Route path="/dashboard" component={ClientBar} />
      <Route path="/artwork" component={Artwork} />
    </Router>
    // </Provider>
  );
}

export default App;
