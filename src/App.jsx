import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import EmptyListMessage from "./components/EmptyListMessage";
import dateFormat from "dateformat";

function App() {
  const [toDoItemsObj, setToDoItemsObj] = useState([]);

  //Add button in AddToDo component (Adding Items)
  const addButtonHandle = (event, enteredToDo, enteredDate) => {
    const newToDoItem = [
      ...toDoItemsObj,
      {
        toDoName: enteredToDo,
        toDoDate: dateFormat(enteredDate, "dd-mmmm-yyyy"),
      },
    ];
    setToDoItemsObj(newToDoItem);
  };

  //To Delete the Item
  const deleteItem = (event, toDoName, toDoDate) => {
    const toDeleteItems = toDoItemsObj.filter(
      (item) => item.toDoName !== toDoName
    );
    setToDoItemsObj(toDeleteItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo addButtonHandle={addButtonHandle} />
      <EmptyListMessage toDoItemsObj={toDoItemsObj} />
      <ToDoItems
        toDoItemsProps={toDoItemsObj}
        deleteItem={deleteItem}
      ></ToDoItems>
    </center>
  );
}

export default App;
