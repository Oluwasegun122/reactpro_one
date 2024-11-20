import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", Done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", Done: false });
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formDiv}>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTodo({ name: e.target.value, Done: false })}
            value={todo.name}
            placeholder="Enter Tode Item"
          />
          <button className={styles.button} type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
