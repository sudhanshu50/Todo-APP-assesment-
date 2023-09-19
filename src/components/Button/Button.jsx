const Button = ({ text, color, bgCol, clickHandler }) => {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bgCol,
        margin: "0px 5px",
        borderRadius: "5px",
      }}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
