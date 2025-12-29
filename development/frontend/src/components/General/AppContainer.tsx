import { ReactNode } from "react";
import { Box } from "rsuite";
import { Colors } from "@/colors/Colors";

type Props = {
  children: ReactNode;
};

const AppContainer = ({ children }: Props) => {
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
        bg={Colors.softSkyBlue}
        shadow="xl"
        style={{
          height: "92vh",
          width: "100%",
          overflowY: "auto",
          scrollbarWidth: "thin",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppContainer;
