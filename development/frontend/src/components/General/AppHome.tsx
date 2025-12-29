import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import {
  ArrowForwardIos,
  Group,
  AccountCircle,
  Settings,
  GroupsOutlined,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type HomeCardProps = {
  title: string;
  description: string;
  route: string;
  color: string;
  icon: React.ReactNode;
};

const cards: HomeCardProps[] = [
  {
    title: "Dashboard",
    description: "Overview of key activities.",
    route: "/dashboard",
    color: "#1976d2",
    icon: <DashboardIcon fontSize="large" />,
  },
  {
    title: "Users",
    description: "Manage users and permissions.",
    route: "/users",
    color: "#2e7d32",
    icon: <Group fontSize="large" />,
  },
  {
    title: "Customers",
    description: "Manage customers and related data.",
    route: "/customers",
    color: "#0288d1",
    icon: <GroupsOutlined fontSize="large" />,
  },
  {
    title: "Profile",
    description: "View and update your profile.",
    route: "/profile",
    color: "#6a1b9a",
    icon: <AccountCircle fontSize="large" />,
  },
  {
    title: "Settings",
    description: "Configure system preferences.",
    route: "/settings",
    color: "#ed6c02",
    icon: <Settings fontSize="large" />,
  },
];

const HomeCards = ({
  title,
  description,
  route,
  color,
  icon,
}: HomeCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(route)}
      sx={{
        cursor: "pointer",
        borderRadius: 3,
        background: "linear-gradient(145deg, #ffffff, #f9fbff)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        transition: "all 0.3s ease",
        height: "100%",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              bgcolor: color,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>

          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography color="text.secondary" sx={{ fontWeight: "bold" }}>
            {description}
          </Typography>
          <ArrowForwardIos fontSize="small" color="action" />
        </Box>
      </CardContent>
    </Card>
  );
};

const AppHome = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 1,
      }}
    >
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <HomeCards {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AppHome;
