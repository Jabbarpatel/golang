import React, { ReactNode, JSX } from "react";
import { Divider, Modal } from "rsuite";

type Props = {
  open: boolean;
  children: ReactNode;
  title?: string | JSX.Element;
  size?: "xs" | "sm" | "md" | "lg" | "full";
  handleFooter?: () => JSX.Element | string | null;
  handleClose?: () => void;
};

const ReactModal = ({
  open,
  children,
  title = "This is title",
  size = "lg",
  handleFooter = () => "This is footer",
  handleClose = () => {},
}: Props) => {
  return (
    <>
      <Modal open={open} onClose={handleClose} size={size}>
        <Modal.Header>
          <Modal.Title style={{ fontWeight: "bold" }}>{title}</Modal.Title>
        </Modal.Header>
        <Divider />
        <Modal.Body>{children}</Modal.Body>
        <Divider />
        <Modal.Footer>{handleFooter()}</Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactModal;
