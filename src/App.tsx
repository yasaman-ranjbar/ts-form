import { useState } from "react";
import Add from "./components/Add";
import List from "./components/List";
import "./style.css";
import Alert from "react-bootstrap/Alert";

export interface IPeople {
  id: number;
  fullname: string;
  age: number;
  img_url: string;
  bio?: string;
}
function App() {
  const [peoples, setPeoples] = useState<IPeople[]>([]);

  return (
    <div className="App container">
      <Alert key={"success"} variant={"success"}>
        Persons Lists
      </Alert>
      <List peoples={peoples} setPeoples={setPeoples} />
      <Add peoples={peoples} setPeoples={setPeoples} />
    </div>
  );
}

export default App;
