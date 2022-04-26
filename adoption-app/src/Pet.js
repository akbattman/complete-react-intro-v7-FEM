// import React from "react";
import { Link } from "react-router-dom"; // replacing <a>anchor tags to prevent full app reloads, navigate render clientside and introduce additional react logics

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

// REMOVED TO REPLACE WITH JSX. IMPORT AUTOMATIC WHEN JSX COMPILES

// const Pet = (props) => {
// const {name, animal, breed, images, location, id} = props;

// de-structured props
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    // <div>
    //   <h1>{props.name}</h1>
    //   <h2>{props.animal}</h2>
    //   <h2>{props.breed}</h2>
    // </div>

    // <a href={`/details/${id}`} className="pet">
    // //react router link logic replacement // compiles to an <anchor>
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {`${animal.charAt(0).toUpperCase() + animal.slice(1)}
          — ${breed}
          — ${location}`}
        </h2>
      </div>
    </Link>
    // </a>
  );
};

export default Pet;
