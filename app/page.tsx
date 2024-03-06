"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";

import Leaderboard from "./leaderboard";

function NavBar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      className="NavBar"
    >
      <Toolbar>
        <Typography variant="h6" className="NavBar-logo">
          MAYATHON
        </Typography>
        <Button className="StravaLoginButton">
          Connect your Strava Account to Join
        </Button>
      </Toolbar>
    </AppBar>
  );
}

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
