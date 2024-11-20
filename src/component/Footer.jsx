import styles from "./footer.module.css";
export default function Footer({ todos }) {
  const completedTodo = todos.filter((todo) => todo.Done).length;
  const totalTodo = todos.length;
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todo: {completedTodo}</span>
      <span className={styles.item}>Total Todo: {totalTodo}</span>
      <div className={styles.itemone}>
        <span>Completed Todo: {completedTodo}</span>
      </div>
      <div className={styles.itemtwo}>
        <span>Total Todo: {totalTodo}</span>
      </div>
    </div>
  );
}
