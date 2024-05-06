import { useState } from "react";

function AddToDo({ addButtonHandle }) {
  const [enteredToDo, setEnteredToDo] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Getting Data From The Input
  let getEnteredToDoFunc = (event) => {
    setEnteredToDo(event.target.value);
    // event.target.value = "";
  };

  // //Getting Date
  let getEnteredDate = (event) => {
    setEnteredDate(event.target.value);
    // event.target.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row new-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={enteredToDo}
            onChange={getEnteredToDoFunc}
          />
        </div>
        <div className="col-4">
          <input type="date" value={enteredDate} onChange={getEnteredDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success new-button"
            onClick={(event) => {
              if (enteredToDo.length != 0 && enteredDate.length != 0) {
                addButtonHandle(event, enteredToDo, enteredDate);
                setEnteredToDo("");
                setEnteredDate("");
              } else {
                alert("Enter the Values!");
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
