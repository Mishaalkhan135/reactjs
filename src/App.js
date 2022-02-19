import React, { useState, useEffect } from "react";
import { PropsDemo } from "./Components";
import { Login, Todo } from "./Components";
import { useSelector } from "react-redux";
const App = () => {
  const [todoTask, setTodoTask] = useState("");
  const [message, setMessage] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt velit elementum mi consequat volutpat. Vestibulum sem tellus, vehicula nec tempus at, placerat at ex. Sed finibus mauris eu velit sagittis commodo. Phasellus vulputate odio sapien, quis sagittis mauris imperdiet viverra. Maecenas non euismod magna. Proin et ornare massa. Phasellus at vehicula nunc, id gravida lacus. Etiam arcu nunc, ultrices at justo eu, bibendum maximus ipsum. In quis nisi consequat, imperdiet ipsum nec, semper ante. Proin finibus velit sapien, non sollicitudin nunc sagittis at. Duis eleifend leo at ligula ultrices, ac congue ex lobortis."
  );
  const user = useSelector((state) => state?.user);
  useEffect(() => {
    console.log("todoTask", todoTask);
  }, [todoTask]);
  useEffect(() => {
    console.log("user", user);
  }, [user]);
  return (
    <div>
      {user?.email ? (
        <div>
          <Todo setTodoTask={setTodoTask} />
        </div>
      ) : (
        <Login />
      )}
      {/* <PropsDemo message={message} /> */}
    </div>
  );
};

export default App;
