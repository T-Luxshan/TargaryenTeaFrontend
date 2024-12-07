import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/story");
        break;
      case 2:
        navigate("/tea");
        break;
      case 3:
        navigate("/trade");
        break;
      default:
        break;
    }
  };

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/Register");

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "64px",
        boxShadow: 1,
      }}
    >
      {/* Centered Navigation Tabs */}
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" sx={{ fontFamily: "Poppin", fontWeight: "600" }} />
        <Tab
          label="Story of Ceylon"
          sx={{ fontFamily: "Poppin", fontWeight: "600" }}
        />
        <Tab label="Tea" sx={{ fontFamily: "Poppin", fontWeight: "600" }} />
        <Tab label="Trade" sx={{ fontFamily: "Poppin", fontWeight: "600" }} />
      </Tabs>

      {/* Login and Signup Buttons on Right */}
      <Box
        sx={{
          position: "absolute",
          right: "16px",
          display: "flex",
          gap: "8px",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleLogin}
          sx={{
            fontFamily: "Poppin",
            fontWeight: "600",
            color: "green",
            borderColor: "green",
            "&:hover": {
              borderColor: "darkgreen",
              backgroundColor: "rgba(0,128,0,0.1)", // Light green on hover
            },
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          onClick={handleSignup}
          sx={{
            fontFamily: "Poppin",
            fontWeight: "600",
            backgroundColor: "#038541",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Signup
        </Button>
      </Box>
    </Box>
  );
}
