import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../App.css";

function MusicCards(props) {
  return (
    <div className="pads">
      <div className={props.class}></div>
      <audio src={props.src} className={props.AClass}></audio>
    </div>
  );
}

export default MusicCards;
