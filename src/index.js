import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./reducers/index";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";
import Yorumlar from "./components/Yorumlar";
import Iletişim from "./components/Iletişim";
import Hakkımda from "./components/Hakkımda";


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Hakkımda} />
        <Route path="/yaptigim_isler" exact component={Projects} />
        <Route path="/yorumlar" exact component={Yorumlar} />
        <Route path="/iletisim" exact component={Iletişim} />

        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
