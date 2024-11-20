import TodeItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodeList({ todos, setTodos }) {
  const sortedTode = todos
    .slice()
    .sort((a, b) => Number(a.Done) - Number(b.Done));
  return (
    <div className={styles.list}>
      <div className={styles.listitem}>
        {sortedTode.map((item) => (
          <TodeItem
            item={item}
            key={item.name}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </div>
    </div>
  );
}
