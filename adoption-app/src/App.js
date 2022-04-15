import React from "react";
import { render } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// parent being rendered
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Iris",
      animal: "Tortoise",
      breed: "Greek",
    }),
    React.createElement(Pet, {
      name: "Dolly",
      animal: "Dog",
      breed: "Setter",
    }),
    React.createElement(Pet, {
      name: "Nemo",
      animal: "Fish",
      breed: "Clown",
    }),
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById("root")); now imported at file head
render(React.createElement(App), document.getElementById("root"));
