import "./index.css";
const Notification = (props) => {
  console.log(props);
  const { data } = props;
  const { className, iconUrl, message } = data;
  console.log(className);
  const containerClassName = `notification-container ${className}`;
  return (
    <>
      <li className={containerClassName}>
        <img className="icon" src={iconUrl} alt={iconUrl} />
        <p className="message">{message}</p>
      </li>
    </>
  );
};

export default Notification;
