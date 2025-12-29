import { Notification, useToaster, NotificationProps } from "rsuite";

type NotificationType = "info" | "success" | "warning" | "error";

type NotifyOptions = NotificationProps & {
  message: string;
  description?: string;
  type?: NotificationType;
  placement?: "topStart" | "topEnd" | "bottomStart" | "bottomEnd";
  duration?: number;
};

export const AppNotification = () => {
  const toaster = useToaster();

  const notify = ({
    message,
    description,
    type = "info",
    placement = "topEnd",
    duration = 4000,
    ...props
  }: NotifyOptions) => {
    toaster.push(
      <Notification
        type={type}
        header={message}
        style={{ minWidth: 400 }}
        closable
        {...props}
      >
        {description && <p>{description}</p>}
      </Notification>,
      { placement, duration }
    );
  };

  return notify;
};
