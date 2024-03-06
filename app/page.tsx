"use client";

import React from "react";
import { CssBaseline } from "@mui/material";

import NavBar from "./navbar";
import Leaderboard from "./leaderboard";

function Intro() {
  return (
    <>
      <h1 className="Title">Mayathon 2024</h1>
      <p className="Description">Welcome to the challenge!</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <Intro />
      <Leaderboard />
    </div>
  );
}

export default App;
