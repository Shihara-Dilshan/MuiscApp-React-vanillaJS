import React from "react";
import "./App.css";
import Nevbar from "./components/Nevbar";
import Intro from "./components/Intro";
import Visual from "./components/Visual";
import MusicCards from "./components/MusicCards";
import ContainerDiv from "./components/ContainerDiv";

function App() {
  return (
    <div className="App">
      <Nevbar />
      <Intro />
      <Visual />
      <div className="pads">
        <MusicCards
          src={process.env.PUBLIC_URL + "/sounds/bubbles.mp3"}
          class="pad1"
          AClass="sound"
        />
        <MusicCards
          src={process.env.PUBLIC_URL + "/sounds/clay.mp3"}
          class="pad2"
          AClass="sound"
        />
        <MusicCards
          src={process.env.PUBLIC_URL + "/sounds/confetti.mp3"}
          class="pad3"
          AClass="sound"
        />
        <MusicCards
          src={process.env.PUBLIC_URL + "/sounds/glimmer.mp3"}
          class="pad4"
          AClass="sound"
        />
        <MusicCards
          src={process.env.PUBLIC_URL + "/sounds/moon.mp3"}
          class="pad5"
          AClass="sound"
        />
        <MusicCards
          src={process.env.PUBLIC_URL + "/sounds/ufo.mp3"}
          class="pad6"
          AClass="sound"
        />
      </div>
    </div>
  );
}

export default App;
