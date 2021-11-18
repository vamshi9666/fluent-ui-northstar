import logo from "./logo.svg";
import "./App.css";
import { Table } from "@fluentui/react-northstar";

const rawData = [
  {
    id: "1",
    name: "Vamsi Krishna",
    age: "25",
    image: {
      uri: "https://picsum.photos/200/300/?random",
    },
  },
  {
    id: "2",
    name: "Vamsi Krishna",
    age: "25",
    image: {
      uri: "https://picsum.photos/200/300/?random",
    },
  },
  {
    id: "3",
    name: "Vamsi Krishna",
    age: "25",
    image: {
      uri: "https://picsum.photos/200/300/?random",
    },
  },
];

function App() {
  return (
    <div className="App">
      <Table
        rows={rawData}
        header={{
          items: [],
        }}
      />
    </div>
  );
}

export default App;
