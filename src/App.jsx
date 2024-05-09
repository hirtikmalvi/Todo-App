import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useContext, useReducer, useState } from "react";
import EmptyListMessage from "./components/EmptyListMessage";
import dateFormat from "dateformat";
import { toDoItemsContext } from "./store/todo-items-store";

//Using useReducer Hook
let toDoItemsObjReducer = (currentToDoItems, action) => {
  let newToDoItems = currentToDoItems;
  if (action.type === "ADD_ITEM") {
    newToDoItems = [
      ...currentToDoItems,
      {
        toDoName: action.payload.enteredToDo,
        toDoDate: dateFormat(action.payload.enteredDate, "dd-mmmm-yyyy"),
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currentToDoItems.filter(
      (item) => item.toDoName !== action.payload.toDoName
    );
  }
  return newToDoItems;
};

function App() {
  //Dispatcher Func is the BOSS here. which does all the controls.
  //Dispatcher passes
  const [toDoItemsObj, toDoItemsDispatcher] = useReducer(
    toDoItemsObjReducer,
    []
  );

  //Add button in AddToDo component (Adding Items)
  const addNewItem = (event, enteredToDo, enteredDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        enteredToDo,
        enteredDate,
      },
    };
    toDoItemsDispatcher(newItemAction);
  };

  //To Delete the Item
  const deleteItem = (event, toDoName, toDoDate) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        toDoName,
      },
    };
    toDoItemsDispatcher(deleteItemAction);
  };

  return (
    <toDoItemsContext.Provider value={{ toDoItemsObj, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <EmptyListMessage />
        <ToDoItems />
      </center>
    </toDoItemsContext.Provider>
  );
}
export default App;
