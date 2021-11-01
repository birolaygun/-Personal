import React from "react";
import { connect } from "react-redux";
import "./style.css";
import Nav from "./components/Nav";

const App = (props) => {

  return (
    <main className="App">
      <Nav />

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
