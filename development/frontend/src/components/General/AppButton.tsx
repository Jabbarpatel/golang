import React from "react";
import { Button, ButtonProps } from "@mui/material";

type Props = ButtonProps & {
  variant?: "text" | "outlined" | "contained";
  children: React.ReactNode;
};

const AppButton = ({ variant, children, ...props }: Props) => {
  return (
    <Button
      {...props}
      variant={variant || "contained"}
      sx={{ ...props.sx, px: 4, borderRadius: 20 }}
    >
      {children}
    </Button>
  );
};
export default AppButton;
