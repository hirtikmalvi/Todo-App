function ToDoItem({ toDoName, toDoDate, deleteItem }) {
  return (
    <div className="container">
      <div className="row new-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger new-button"
            onClick={(event) => {
              deleteItem(event, toDoName, toDoDate);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
