import ToDoItem from "./ToDoItem";

let ToDoItems = ({ toDoItemsProps, deleteItem }) => {
  return (
    <>
      <div className="todo-items-container">
        {toDoItemsProps.map((item) => (
          <ToDoItem
            key={item.toDoName}
            deleteItem={deleteItem}
            toDoName={item.toDoName}
            toDoDate={item.toDoDate}
          ></ToDoItem>
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
