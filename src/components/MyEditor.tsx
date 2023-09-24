import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import files from "../utils/files";
import styles from "../style";

type TFileNames = "script.js" | "style.css" | "index.html";
type TFileContent = {
  [K in TFileNames]?: string;
};

function MyEditor() {
  const [fileName, setFileName] = useState<TFileNames>("index.html");
  const [fileContent, setFileContent] = useState<TFileContent>({});

  const file = files[fileName];

  // Function to handle saving the content to localStorage
  const handleSave = () => {
    const updatedFileContent = {
      ...fileContent,
      [fileName]: Code,
    };
    setFileContent(updatedFileContent);

    localStorage.setItem("fileContent", JSON.stringify(updatedFileContent));
  };

  // Function to load content from local storage on component mount
  useEffect(() => {
    const savedFileContent = localStorage.getItem("fileContent");
    if (savedFileContent) {
      setFileContent(JSON.parse(savedFileContent));
    }
  }, []);

  const Code = fileContent[fileName] || "";

  return (
    <>
      <div className="flex justify-between">
        <div>
          {Object.keys(files).map((name) => (
            <button
              key={name}
              className={styles.fileBtnStyle}
              disabled={fileName === name}
              onClick={() => setFileName(name as TFileNames)}
            >
              {name}
            </button>
          ))}
        </div>
        <div>
          <button className={styles.fileBtnStyle} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <Editor
        height="95vh"
        width="95vw"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={Code}
        onChange={(value) =>
          setFileContent((prevContent) => ({
            ...prevContent,
            [fileName]: value,
          }))
        }
      />
    </>
  );
}

export default MyEditor;
