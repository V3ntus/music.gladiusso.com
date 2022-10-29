import React from "react";
import * as ReactDOM from "react-dom/client";

// Components
import Title from "./components/Title";
import Delayed from "./components/Delayed";
import HomeContainer from "./components/HomeContainer";

// Style
import "./index.css";
import "./locomotive-scroll.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <Title />
      <Delayed waitBeforeShow={3000}>
        <HomeContainer />
      </Delayed>
    </>
  );
}

setTimeout(() => root.render(<App />), 2000);
