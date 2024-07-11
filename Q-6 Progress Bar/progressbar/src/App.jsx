import { useState } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? <ProgressBar /> : ""}

      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
}

export default App;
