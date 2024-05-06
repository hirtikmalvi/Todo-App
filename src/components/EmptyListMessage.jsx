import styles from "./EmptyListMessage.module.css";

function EmptyListMessage({ toDoItemsObj }) {
  return (
    <>
      {toDoItemsObj.length == 0 ? (
        <p className={styles.message}>Please Enter Todo. Your list is Empty!</p>
      ) : null}
    </>
  );
}

export default EmptyListMessage;
