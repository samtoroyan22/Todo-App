import { useState } from "react";
import stylesTodo from "./Todo.module.css";
import buttonStyles from "../UI/Button.module.css";
import { RiTodoFill } from "react-icons/ri";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function Todo({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const saveEditHandler = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`${stylesTodo.todo} ${
        todo.isCompleted ? stylesTodo.completedTodo : ""
      }`}
    >
      {isEditing ? (
        <>
          <input
            className={stylesTodo.editInput}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={saveEditHandler} className={buttonStyles.saveButton}>
            Save
          </button>
        </>
      ) : (
        <>
          <RiTodoFill className={stylesTodo.todoIcon} />
          <div className={stylesTodo.todoText}>{todo.text}</div>
          <MdEdit
            className={stylesTodo.editIcon}
            onClick={() => setIsEditing(true)}
          />
          <IoMdClose
            className={stylesTodo.todoIconDel}
            onClick={() => deleteTodo(todo.id)}
          />
          <IoMdCheckmark
            className={stylesTodo.todoIconCheck}
            onClick={() => toggleTodo(todo.id)}
          />
        </>
      )}
    </div>
  );
}

export default Todo;
