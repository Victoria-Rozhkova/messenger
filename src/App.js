import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Router } from "./components/Router/Router";
import { store } from "./store/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
