import React from "react";

function Title() {
  return <h1 className="Title"> Mayathon 2024 Leaderboard!</h1>;
}

function Description() {
  return <p className="Description">test</p>;
}

// Main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Description />
      </header>
    </div>
  );
}

export default App;
