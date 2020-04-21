import React from "react";
import ReactDOM from "react-dom";
import ExampleWork from "./example-work";
import { projectList } from "./projectList.json";

ReactDOM.render(
  <ExampleWork work={projectList} />,
  document.getElementById("example-work")
);
