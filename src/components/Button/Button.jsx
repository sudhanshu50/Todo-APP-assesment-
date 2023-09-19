/* eslint-disable react/prop-types */
const Button = ({ text, color, bgCol, clickHandler }) => {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bgCol,
        margin: "0px 5px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
