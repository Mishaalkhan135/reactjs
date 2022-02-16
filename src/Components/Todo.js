import { useState } from "react";

const Todo = () => {
  const [arr, setArr] = useState([]);
  const [task, setTask] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [updateIndex, setIndex] = useState(null);
  const AddTodo = (e) => {
    if (!task?.length) {
      return alert("Please add a task");
    }
    arr.push(task);
    setArr([...arr]);
    setTask("");
  };
  const deleteTodo = (index) => {
    arr.splice(index, 1);
    setArr([...arr]);
    Cancel();
  };
  const editTodo = (index) => {
    setTask(arr[index]);
    setEdit(true);
    setIndex(index);
  };
  const Cancel = () => {
    setTask("");
    setEdit(false);
  };
  const UpdateTodo = (index) => {
    arr[updateIndex] = task;
    setTask("");
    setEdit(false);
    setIndex(null);
    setArr([...arr]);
  };

  return (
    <div>
      <div>
        <input
          name='task'
          placeholder='Add Tasks'
          onChange={(e) => setTask(e?.target?.value)}
          value={task}
        />
        {!isEdit ? (
          <button onClick={AddTodo}>Add Task</button>
        ) : (
          <span>
            <button onClick={UpdateTodo}>Update</button>
            <button onClick={Cancel}>Cancel</button>
          </span>
        )}
      </div>
      <ol>
        {arr.map((v, i) => {
          return (
            <li key={i}>
              <span>{v}</span>
              &nbsp;
              <button onClick={() => editTodo(i)}>Edit</button>
              &nbsp;
              <button onClick={() => deleteTodo(i)}>Delete</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Todo;
