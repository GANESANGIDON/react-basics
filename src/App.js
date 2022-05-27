import React from "react";
import MouseCursor from "./components/MouseCursor";
import { Routes, Route } from "react-router-dom";
import { Cards, ScoreBoard, NavBar, Home} from "./components";

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/scoreboard" element={<ScoreBoard />} />
    <Route path="/cards" element={<Cards />} />
    </Routes>
    <NavBar />
    <MouseCursor />
    </div>
  );
}

export default App;
