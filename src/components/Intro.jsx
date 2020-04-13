import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../App.css";

class Intro extends Component {
  render() {
    return (
      <div>
        <h4>Tap on a Color</h4>
        <h5 id="pIntro">One tap Beats</h5>
      </div>
    );
  }
}

export default Intro;
