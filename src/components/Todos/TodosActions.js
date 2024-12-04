import Button from "../UI/Button";
import styles from "../UI/Button.module.css";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <Button
        className={styles.buttonActions}
        title="Clear Completed Todos"
        onClick={resetTodos}
      >
        <MdDelete />
      </Button>
      <Button
        className={
          completedTodosExist
            ? styles.buttonActions
            : styles.buttonActionsButtonDisabled
        }
        title="Reset Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <IoMdDoneAll />
      </Button>
    </>
  );
}

export default TodosActions;
