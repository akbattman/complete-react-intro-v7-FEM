// import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Iris",
//       animal: "Tortoise",
//       breed: "Greek",
//     }),
//     React.createElement(Pet, {
//       name: "Dolly",
//       animal: "Dog",
//       breed: "Setter",
//     }),
//     React.createElement(Pet, {
//       name: "Nemo",
//       animal: "Fish",
//       breed: "Clown",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Iris" animal="Tortoise" breed="Greek" />
      <Pet name="Dolly" animal="Dog" breed="Setter" />
      <Pet name="Nemo" animal="Fish" breed="Clown" /> */}
      <SearchParams />
    </div>
  );
};

// ReactDOM.render removed after import at file head
// render<(React.createElement(App)>, document.getElementById("root"));
render(<App />, document.getElementById("root"));
