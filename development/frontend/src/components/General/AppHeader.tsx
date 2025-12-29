import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import AppButton from "./AppButton";
import { Colors } from "@/colors/Colors";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{
        background: Colors.softSkyBlue,
        color: "#1f2933",
      }}
    >
      <Toolbar sx={{ position: "relative" }}>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          YELLOW BOOK
        </Typography>

        <Box sx={{ marginLeft: "auto" }}>
          <AppButton
            variant="contained"
            startIcon={<HomeIcon />}
            sx={{ background: Colors.skyBlue }}
          >
            HOME
          </AppButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
