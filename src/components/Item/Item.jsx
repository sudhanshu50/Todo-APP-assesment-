import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Item.css";

const Item = ({ data, onDelete, checkboxHandler }) => {
  return (
    <ul>
      {data &&
        data.map((item, index) => (
          <li
            className={item.completed ? "completed" : ""}
            style={{ margin: "5px" }}
            key={index}
          >
            <Input
              type={"checkbox"}
              check={item.completed}
              changeHandler={() => checkboxHandler(index)}
            />
            {item.todo}
            <Button text={"Update"} color={"white"} bgCol={"green"} />
            <Button
              clickHandler={() => onDelete(index)}
              text={"Delete"}
              color={"white"}
              bgCol={"red"}
            />
          </li>
        ))}
    </ul>
  );
};

export default Item;
