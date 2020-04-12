import React from "react";
import "materialize-css/dist/css/materialize.min.css";

function MusicCards(props) {
  return (
    <div className="pads">
      <audio src={props.src}></audio>
    </div>
  );
}

export default MusicCards;
