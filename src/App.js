import React from "react";
import "./App.css";
//import Button from "./Button.jsx";
// const buttonsText = [
//   { text: "Like", id: 1, backgroundColor: "#eab308" },
//   { text: "Comment", id: 2, backgroundColor: "#ffffff" },
//   { text: "Share", id: 3, backgroundColor: "#1d4ed8" },
// ];

const App = () => {
  return (
    <>
      <div className="social-buttons-container">
        <div className="content-container">
          <h1 className="heading">Social buttons</h1>
          {/* <ul className="buttons-container">
            {buttonsText.map((eachButton) => (
              <Button key={eachButton.id} buttonDate={eachButton} />
            ))}
          </ul> */}
          <div className="buttons-container">
            <button className="button like">Like</button>
            <button className="button comment">Comment</button>
            <button className="button share">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

// const Button = props => {
//   const {className, buttonText} = props

//   return <button className={`button ${className}`}>{buttonText}</button>
// }

// const element = (
//   <div className="social-buttons-container">
//     <div className="content-container">
//       <h1 className="heading">Social Buttons</h1>
//       <div className="buttons-container">
//         <Button buttonText="Like" className="like-button" />
//         <Button buttonText="Comment" className="comment-button" />
//         <Button buttonText="Share" className="share-button" />
//       </div>
//     </div>
//   </div>
// )

// ReactDOM.render(element, document.getElementById('root'))
