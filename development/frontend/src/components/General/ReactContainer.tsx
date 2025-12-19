import React, { ReactNode } from "react";
import { Box } from "rsuite";

type Props = {
  children: ReactNode;
};

const ReactContainer = ({ children }: Props) => {
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
        {children}
      </Box>
    </Box>
  );
};

export default ReactContainer;
