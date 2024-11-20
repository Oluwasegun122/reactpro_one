import styles from "./todoItom.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete is clicked", item);
    let items = todos.filter((todo) => todo !== item);
    setTodos(items);
  }
  function handleComplete(name) {
    const newArry = todos.map((todo) =>
      todo.name === name ? { ...todo, Done: !todo.Done } : todo
    );
    setTodos(newArry);
  }
  const complete = item.Done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={complete} onClick={() => handleComplete(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className={styles.delete}>
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
