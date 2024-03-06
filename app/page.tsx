"use client";

import React from "react";
import { CssBaseline } from "@mui/material";

import NavBar from "./navbar";
import Leaderboard from "./leaderboard";

function Title() {
  return <h1 className="Title">Mayathon 2024!</h1>;
}

function Description() {
  return <p className="Description">Welcome to the challenge!</p>;
}

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <header className="App-header">
        <Title />
        <Description />
        <Leaderboard />
      </header>
    </div>
  );
}

export default App;
