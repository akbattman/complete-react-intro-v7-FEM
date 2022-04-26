// import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details"; // ? how is Detials read now details is wrapped export ?
import ThemeContext from "./ThemeContext";

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
  const theme = useState("darkgrey");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        {/* theme available, not read */}
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
      {/* <div>
        <h1>Adopt Me!</h1>
        <Pet name="Iris" animal="Tortoise" breed="Greek" />
        <Pet name="Dolly" animal="Dog" breed="Setter" />
        <Pet name="Nemo" animal="Fish" breed="Clown" />
        <SearchParams />
      </div> */}
    </StrictMode>
  );
};

// ReactDOM.render removed after import at file head
// render<(React.createElement(App)>, document.getElementById("root"));
render(<App />, document.getElementById("root"));
