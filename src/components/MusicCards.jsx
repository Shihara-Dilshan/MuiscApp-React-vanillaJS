import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../App.css";

function MusicCards(props) {
  return (
    <React.Fragment>
      <div className={props.class}></div>
      <audio src={props.src} className={props.AClass}></audio>
    </React.Fragment>
  );
}

export default MusicCards;
