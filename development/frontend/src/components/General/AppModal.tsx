import { ReactNode, JSX } from "react";
import { Divider, Modal, ModalProps } from "rsuite";

type Props = ModalProps & {
  open: boolean;
  children: ReactNode;
  title?: string | JSX.Element;
  size?: "xs" | "sm" | "md" | "lg" | "full";
  handleFooter?: () => JSX.Element | string | null;
  handleClose?: () => void;
};

const AppModal = ({
  open,
  children,
  title = "This is title",
  size = "lg",
  handleFooter = () => "This is footer",
  handleClose = () => {},
  ...props
}: Props) => {
  return (
    <Modal open={open} size={size} onClose={handleClose} {...props}>
      <Modal.Header>
        <Modal.Title style={{ fontWeight: "bold" }}>{title}</Modal.Title>
      </Modal.Header>
      <Divider />
      <Modal.Body>{children}</Modal.Body>
      <Divider />
      <Modal.Footer>{handleFooter()}</Modal.Footer>
    </Modal>
  );
};

export default AppModal;
