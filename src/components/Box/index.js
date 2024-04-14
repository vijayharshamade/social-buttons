import "./index.css";
import BoxItem from "./BoxItem";
const Box = () => {
  const boxesArray = [
    { id: 1, text: "small", className: "small-box" },
    { id: 2, text: "medium", className: "medium-box" },
    { id: 3, text: "large", className: "large-box" },
  ];
  return (
    <>
      <div className="boxes-app-container">
        <h1 className="boxes-heading">Boxes</h1>
        <ul className="boxes-container">
          {boxesArray.map((eachBox) => (
            <BoxItem key={eachBox.id} data={eachBox} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Box;
