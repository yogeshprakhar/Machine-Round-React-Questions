import { useState } from "react";

const FileExplorer = ({ folderData }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  const addFolder = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <h5>
        {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        <span onClick={handleClick}>{folderData.name}</span>
      </h5>
      {showChildren &&
        folderData?.children?.map((childData, index) => {
          return <FileExplorer key={index} folderData={childData} />;
        })}
    </div>
  );
};

export default FileExplorer;
