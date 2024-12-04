import { useState } from "react";
import formStyles from "./TodoForm.module.css";
import buttonStyles from "../UI/Button.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={formStyles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className={buttonStyles.button} type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
