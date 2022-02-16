import React, { useState, useEffect } from "react";
import { PropsDemo } from "./Components";

const App = () => {
  const [message, setMessage] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt velit elementum mi consequat volutpat. Vestibulum sem tellus, vehicula nec tempus at, placerat at ex. Sed finibus mauris eu velit sagittis commodo. Phasellus vulputate odio sapien, quis sagittis mauris imperdiet viverra. Maecenas non euismod magna. Proin et ornare massa. Phasellus at vehicula nunc, id gravida lacus. Etiam arcu nunc, ultrices at justo eu, bibendum maximus ipsum. In quis nisi consequat, imperdiet ipsum nec, semper ante. Proin finibus velit sapien, non sollicitudin nunc sagittis at. Duis eleifend leo at ligula ultrices, ac congue ex lobortis."
  );

  useEffect(() => {}, []);

  return (
    <div>
      <PropsDemo message={message} />
    </div>
  );
};

export default App;
