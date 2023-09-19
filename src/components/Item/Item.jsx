/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Item.css";

const Item = ({
  data,
  onDelete,
  checkboxHandler,
  editHandler,
  saveHandler,
  editingIndex,
  editingValue,
  onEditChange,
}) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li
          key={index}
          className={item.completed ? "completed" : ""}
          style={{ margin: "5px" }}
        >
          <Input
            type="checkbox"
            check={item.completed}
            changeHandler={() => checkboxHandler(index)}
          />
          {editingIndex === index ? (
            <>
              <Input
                type="text"
                value={editingValue}
                changeHandler={(e) => onEditChange(e.target.value)}
              />
              <Button
                text={"Save"}
                clickHandler={() => saveHandler(index, editingValue)}
                bgCol={"lightgreen"}
              />
            </>
          ) : (
            <>
              <span>{item.todo}</span>
              <Button
                text={"Update"}
                bgCol={"lightgreen"}
                clickHandler={() => editHandler(index)}
              />
            </>
          )}
          <Button
            color={"white"}
            bgCol={"red"}
            text={"Delete"}
            clickHandler={() => onDelete(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Item;
