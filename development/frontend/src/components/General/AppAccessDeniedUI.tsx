import { Box, Typography, Stack } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AppButton from "./AppButton";
import { Colors } from "../../colors/Colors";

const AccessDeniedUI = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: 140,
            fontWeight: 800,
            color: "#d4e0ee",
            position: "absolute",
            zIndex: 0,
          }}
        >
          403
        </Typography>

        <Box
          sx={{
            zIndex: 1,
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #60a5fa, #2563eb)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(37,99,235,0.35)",
            marginTop: 1,
          }}
        >
          <LockOutlined sx={{ fontSize: 46, color: "#fff" }} />
        </Box>
      </Box>

      <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
        We are sorry…
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ maxWidth: 420, mx: "auto", mb: 3 }}
      >
        The page you’re trying to access has restricted permissions. Please
        contact your system administrator if you believe this is a mistake.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <AppButton
          variant="contained"
          size="large"
          sx={{
            background: Colors.skyBlue,
          }}
          onClick={() => navigate("/home")}
        >
          Home
        </AppButton>
        <AppButton
          variant="contained"
          size="large"
          sx={{
            background: Colors.skyBlue,
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </AppButton>
      </Stack>
    </Box>
  );
};

export default AccessDeniedUI;
