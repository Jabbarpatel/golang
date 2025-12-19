import React from "react";
import { Box, Text } from "rsuite";

const ReactContainer = () => {
  return (
    <Box
      style={{
        padding: 25,
        background: "#e4e7eb",
        minHeight: "100vh",
      }}
    >
      <Box
        p={20}
        rounded={12}
        bg="#fff"
        shadow="xl"
        style={{
          height: "92vh",
          width: "100%",
        }}
      >
        <Text align="center" size="lg">
          Container With Visible Shadow
        </Text>
      </Box>
    </Box>
  );
};

export default ReactContainer;
