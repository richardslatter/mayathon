import React, { useEffect, useState } from "react";
import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

type Runner = {
  id: number;
  name: string;
  distance: number; // in kilometers
};

const fetchLeaderboardData = async (): Promise<Runner[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Runner 1", distance: 150 },
        { id: 2, name: "Runner 2", distance: 120 },
        { id: 3, name: "Runner 3", distance: 110 },
        // Added 10 more test entries
        { id: 4, name: "Runner 4", distance: 105 },
        { id: 5, name: "Runner 5", distance: 102 },
        { id: 6, name: "Runner 6", distance: 100 },
        { id: 7, name: "Runner 7", distance: 95 },
        { id: 8, name: "Runner 8", distance: 90 },
        { id: 9, name: "Runner 9", distance: 85 },
        { id: 10, name: "Runner 10", distance: 80 },
        { id: 11, name: "Runner 11", distance: 75 },
        { id: 12, name: "Runner 12", distance: 70 },
        { id: 13, name: "Runner 13", distance: 65 },
      ]);
    }, 1000);
  });
};

function Leaderboard() {
  const [runners, setRunners] = useState<Runner[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchLeaderboardData();
      setRunners(data);
    };

    getData();
  }, []);

  return (
    <Paper
      elevation={3}
      style={{
        margin: "20px",
        padding: "20px",
        backgroundColor: "#fff",
        // Adjust the width here
        width: "80%", // Uses 80% of the page width
        maxWidth: "1200px", // Sets a max width for larger screens
        marginLeft: "auto", // These two lines center the Paper component
        marginRight: "auto",
      }}
    >
      <Typography
        variant="h5"
        style={{
          marginBottom: "20px",
          color: "black",
          fontFamily: "MaisonNeue, sans-serif",
        }}
      >
        Leaderboard
      </Typography>
      <List>
        {runners.map((runner) => (
          <ListItem
            key={runner.id}
            style={{ borderBottom: "1px solid #eeeeee" }}
          >
            <ListItemText
              primary={runner.name}
              secondary={`${runner.distance} km`}
              primaryTypographyProps={{
                style: { fontFamily: "MaisonNeue, sans-serif", color: "#333" },
              }}
              secondaryTypographyProps={{
                style: {
                  fontFamily: "MaisonNeue, sans-serif",
                  color: "#fc5200",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Leaderboard;
