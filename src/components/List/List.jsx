import { useEffect, useState } from "react";
import Item from "../Item/Item";
import Input from "../Input/Input";
import Button from "../Button/Button";

const List = () => {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingValue, setEditingValue] = useState("");


  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((output) => setTodos(output.todos));
  }, []);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  console.log(task);

  const addHandler = () => {
    const trimTask = task.trim();
    if (trimTask) {
      const taskObj = {
        todo: trimTask,
      };
      setTodos([...todos, taskObj]);
    }
    setTask("");
  };

  const deleteHandler = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const checkboxHandler = (index) => {
    const updatedData = [...todos];
    updatedData[index].completed = !updatedData[index].completed;
    setTodos(updatedData);
  };

  const editHandler = (index) => {
    setEditingIndex(index);
    setEditingValue(todos[index].todo);
  };

  const saveHandler = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].todo = editingValue;
    setTodos(updatedTodos);
    setEditingIndex(-1);
    setEditingValue("");
  };

  return (
    <div>
      <Input style={{marginLeft:"35px"}} type={"text"} changeHandler={changeHandler} value={task} />
      <Button text={"Add"} bgCol={"beige"} clickHandler={addHandler} />
      <Item
        data={todos}
        onDelete={deleteHandler}
        checkboxHandler={checkboxHandler}
        editHandler={editHandler}
        editingIndex={editingIndex}
        editingValue={editingValue}
        onEditChange={(newValue) => setEditingValue(newValue)}
        saveHandler={(index, newVal) => saveHandler(index, newVal)}
      />
    </div>
  );
};

export default List;
