import React from "react";
import { connect } from "react-redux";

class App extends React.PureComponent {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
