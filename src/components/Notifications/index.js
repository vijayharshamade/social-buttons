import "./index.css";
import Notification from "./Notification.js";
const notificationList = [
  {
    id: 1,
    className: "primary-bg-color",
    iconUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    message: "Information Message",
  },
  {
    id: 2,
    className: "success-bg-color",
    iconUrl: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
    message: "Success Message",
  },
  {
    id: 3,
    className: "warning-bg-color",
    iconUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
    message: "Warning Message",
  },
  {
    id: 4,
    className: "danger-bg-color",
    iconUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
    message: "Error Message",
  },
];

const Notifications = () => {
  return (
    <>
      <div className="notifications-app-container ">
        <h1 className="title">Notifications</h1>
        <ul className="notification-list-container">
          {notificationList.map((eachNotification) => (
            <Notification key={eachNotification.id} data={eachNotification} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Notifications;

//original code
// const Notification = props => {
//   const {className, iconUrl, message} = props
//   const containerClassName = `notification-container ${className}`

//   return (
//     <div className={containerClassName}>
//       <img className="icon" src={iconUrl} />
//       <p className="message">{message}</p>
//     </div>
//   )
// }

// const element = (
//   <div className="notifications-app-container">
//     <h1 className="title">Notifications</h1>
//     <div className="notifications-list-container">
//       <Notification
//         className="primary-bg-color"
//         iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
//         message="Information Message"
//       />
//       <Notification
//         className="success-bg-color"
//         iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
//         message="Success Message"
//       />
//       <Notification
//         className="warning-bg-color"
//         iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
//         message="Warning Message"
//       />
//       <Notification
//         className="danger-bg-color"
//         iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
//         message="Error Message"
//       />
//     </div>
//   </div>
// )

// ReactDOM.render(element, document.getElementById('root'))
