import { useState } from "react";
import explorer from "./data";
import "./App.css";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [exploreData, setExploreData] = useState(explorer);
  
  const { insertNode } = useTraverseTree();
  
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  
  return (
    <>
      <div className="App">
        <Folder handleInsertNode={handleInsertNode} explorer={exploreData} />
      </div>
    </>
  );
}

export default App;
