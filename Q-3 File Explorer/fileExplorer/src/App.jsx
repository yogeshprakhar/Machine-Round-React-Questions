import data from "./data.json";
import FileExplorer from "./component/FileExplorer";
import "./index.css";

function App() {
  return (
    <>
      <FileExplorer folderData={data} />
    </>
  );
}

export default App;
