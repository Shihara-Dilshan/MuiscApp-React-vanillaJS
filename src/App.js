import React from "react";
import "./App.css";
import Nevbar from "./components/Nevbar";
import Intro from "./components/Intro";
import Visual from "./components/Visual";
import MusicCards from "./components/MusicCards";

function App() {
  return (
    <div className="App">
      <Nevbar />
      <Intro />
      <Visual />
      <MusicCards src={process.env.PUBLIC_URL + "/sounds/bubbles.mp3"} />
      <MusicCards src={process.env.PUBLIC_URL + "/sounds/clay.mp3"} />
      <MusicCards src={process.env.PUBLIC_URL + "/sounds/confetti.mp3"} />
      <MusicCards src={process.env.PUBLIC_URL + "/sounds/glimmer.mp3"} />
      <MusicCards src={process.env.PUBLIC_URL + "/sounds/moon.mp3"} />
      <MusicCards src={process.env.PUBLIC_URL + "/sounds/ufo.mp3"} />
    </div>
  );
}

export default App;
