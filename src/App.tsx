import React from "react";
import MyEditor from "./components/MyEditor";

const App = () => {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="mt-1">
          <MyEditor />
        </div>
      </div>
    </>
  );
};

export default App;
