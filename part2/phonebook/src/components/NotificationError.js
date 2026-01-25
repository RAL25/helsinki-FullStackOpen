const NotificationError = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="message2">{message}</div>;
};

export default NotificationError;
