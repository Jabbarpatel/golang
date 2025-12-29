import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, HStack, Text, Box, Image, PasswordInput } from "rsuite";
import * as authActions from "@/actions/auth_api";
import { AppNotification } from "@/components/General/AppNotification";
import { NotificationTypes } from "../../types/enums";

export type UserCredential = {
  userName: string;
  password: string;
};

const Login = () => {
  const Notification = AppNotification();
  const navigate = useNavigate();
  const [userCredential, setUserCredential] = useState<UserCredential>({
    userName: "",
    password: "",
  });

  const {
    status: isUserLoggedIn,
    mutate: userLogin,
    data: userLoginData,
    error: userLoginError,
  } = authActions.useLogin();

  useEffect(() => {
    if (isUserLoggedIn) {
      if (isUserLoggedIn === "success") {
        Notification({
          type: NotificationTypes.SUCCESS,
          message: "SUCCESS",
          description: "User logged in successfully !",
        });
        localStorage.setItem("token", userLoginData);
        navigate("/home");
      } else if (isUserLoggedIn === "error") {
        if (userLoginError instanceof AxiosError) {
          Notification({
            type: NotificationTypes.ERROR,
            message: "ERROR",
            description: userLoginError.response?.data.message,
          });
          return;
        }
        Notification({
          type: NotificationTypes.ERROR,
          message: "ERROR",
          description: "Failed to login !",
        });
      }
    }
  }, [isUserLoggedIn]);

  const handleLogin = () => {
    userLogin(userCredential);
  };

  return (
    <Box
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <HStack
        align="stretch"
        style={{
          width: 960,
          height: "85vh",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <Box
          width="40%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            background: "linear-gradient(180deg, #0b1f4b, #020617)",
          }}
        >
          <Image
            src="/yellow-book-app-icon.png"
            alt="Yellow Book"
            height={90}
            style={{
              marginBottom: 20,
              backgroundColor: "#facc15",
              padding: 18,
              borderRadius: 12,
            }}
          />

          <Text
            size="2xl"
            weight="bold"
            style={{ color: "#facc15", marginBottom: 8 }}
          >
            Yellow Book
          </Text>

          <Text style={{ color: "#c7d2fe" }}>Your business companion</Text>
        </Box>

        <Box
          flex={1}
          padding={48}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text size="xl" weight="bold" mb={6}>
            Welcome back
          </Text>

          <Text muted mb={32}>
            Login to continue.
          </Text>

          <Form
            fluid
            formValue={userCredential}
            onChange={(value) => setUserCredential(value as UserCredential)}
            onSubmit={handleLogin}
          >
            <Form.Group controlId="userName">
              <Form.Label>User name</Form.Label>
              <Form.Control
                name="userName"
                placeholder="Enter your username"
                size="lg"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                accepter={PasswordInput}
                name="password"
                placeholder="Enter your password"
                size="lg"
              />
            </Form.Group>

            <Button
              appearance="primary"
              block
              size="lg"
              style={{ marginTop: 24 }}
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Box>
      </HStack>
    </Box>
  );
};

export default Login;
