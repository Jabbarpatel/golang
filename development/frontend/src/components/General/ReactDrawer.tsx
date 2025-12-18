import React, { JSX, ReactNode } from "react";
import { Drawer, Divider } from "rsuite";

export type Props = {
  open: boolean;
  children: ReactNode;
  handleClose?: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "full";
  title?: string;
  footer?: () => JSX.Element | null;
};

const ReactDrawer = ({
  open,
  children,
  handleClose = () => {},
  size = "xs",
  title = "This is title",
  footer = () => <span>This is footer</span>,
}: Props) => {
  return (
    <Drawer open={open} onClose={handleClose} size={size}>
      <Drawer.Header>
        <Drawer.Title style={{ fontWeight: "bold" }}>{title}</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body
        style={{
          padding: 10,
          height: "74%",
          scrollbarWidth: "thin",
        }}
      >
        {children}
      </Drawer.Body>
      <Divider />
      <Drawer.Actions style={{ padding: 5 }}>{footer()}</Drawer.Actions>
    </Drawer>
  );
};

export default ReactDrawer;
