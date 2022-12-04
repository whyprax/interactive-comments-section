import React from "react";
import { AddComments, Comments } from "./components";

const App = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col justify-center w-2/6 mx-auto  items-center py-12">
        <Comments />
        <AddComments />
      </div>
    </div>
  );
};

export default App;
