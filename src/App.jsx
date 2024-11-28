import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Buyers from "./pages/BuyersPage";
import Orders from "./pages/OrderListPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E8B57",
    },
    secondary: {
      main: "#1a5e3a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              backgroundColor: "#f5f5f5",
              minHeight: "100vh",
            }}
          >
            <Box sx={{ marginTop: "64px" }}>
              <Routes>
                <Route path="/buyers" element={<Buyers />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
