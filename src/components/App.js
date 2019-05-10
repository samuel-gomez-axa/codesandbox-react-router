import React from "react";
import Header from "./Header";
import Main from "./Main";

const App = props => {
  console.log("MATCH APP", props);
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
