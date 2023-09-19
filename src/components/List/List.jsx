import { useEffect, useState } from "react";
import Item from "../Item/Item";
import Input from "../Input/Input";
import Button from "../Button/Button";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

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
        isDone: false,
        isEditing: false,
        editingItem: trimTask,
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

  console.log(todos);

  return (
    <div>
      <Input type={"text"} changeHandler={changeHandler} value={task} />
      <Button text={"Add"} bgCol={"beige"} clickHandler={addHandler} />
      <Item
        data={todos}
        onDelete={deleteHandler}
        checkboxHandler={checkboxHandler}
      />
    </div>
  );
};

export default List;
