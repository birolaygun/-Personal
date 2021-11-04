import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./reducers/index";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import About from "./components/About";


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        
        <Route path="/" exact component={About} />
        <Route path="/yaptigim_isler" exact component={Projects} />
        <Route path="/yorumlar" exact component={Comments} />
        <Route path="/iletisim" exact component={Contact} />

        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
