import React from 'react';
import { render } from "react-dom";
import { CompaniesComponent } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <CompaniesComponent/>
  </div>
);

render(<App />, document.getElementById("root"));
