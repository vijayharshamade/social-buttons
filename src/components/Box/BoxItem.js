const BoxItem = (props) => {
  const { data } = props;
  const { text, className } = data;
  return (
    <>
      <li className={`box ${className}`}>
        <p className="box-title"> {text}</p>
      </li>
    </>
  );
};

export default BoxItem;
