// Leaderboard.tsx
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
      style={{ margin: "20px", padding: "20px", backgroundColor: "#fff" }}
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
