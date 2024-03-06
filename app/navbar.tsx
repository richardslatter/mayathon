import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        padding: "10px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          style={{
            color: "#fc5200",
            fontFamily: "'MaisonNeue', sans-serif",
            fontSize: "24px",
            textDecoration: "none",
          }}
        >
          MAYATHON
        </Typography>
        <Button
          sx={{
            backgroundColor: "#fc5200",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            textTransform: "none",
            border: "none",
            cursor: "pointer",
            marginLeft: "auto",
            "&:hover": {
              backgroundColor: "#c94100",
            },
          }}
        >
          Connect your Strava Account to Join
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
