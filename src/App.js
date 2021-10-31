import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Yorumlar from "./components/Yorumlar";
import Iletişim from "./components/Iletişim";
import Hakkımda from "./components/Hakkımda";

const App = (props) => {

  return (
    <main className="App">
      <Nav />

      <Route path="/" exact component={Hakkımda} />
      <Route path="/yaptigim_isler"  component={Projects} />
      <Route path="/yorumlar"  component={Yorumlar} />
      <Route path="/iletisim"  component={Iletişim} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps)(App);
// export default connect(mapStateToProps, { sepeteEkle })(App);
