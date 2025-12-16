import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Divider,
} from "@heroui/react";
import { JSX, ReactNode } from "react";

export type Props = {
  isOpen: boolean;
  children: ReactNode;
  title?: string | JSX.Element;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  footer?: () => JSX.Element | null;
  onClose?: () => void;
};

const ReactModal = ({
  isOpen,
  title,
  children,
  size = "2xl",
  footer = () => <span>This is footer</span>,
  onClose = () => {},
  ...props
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      size={size}
      placement="top"
      onClose={onClose}
      {...props}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1" {...props}>
          {title}
        </ModalHeader>
        <Divider />
        <ModalBody style={{ padding: 10 }} {...props}>
          {children}
        </ModalBody>
        <Divider />
        <ModalFooter {...props}>{footer()}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ReactModal;
