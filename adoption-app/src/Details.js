import { Component } from "react";
import { useParams } from "react-router-dom";

// // function component replacing ##
// const Details = () => {
//   // return <h1>Router - Hello World</h1>;
//   const { id } = useParams();
//   return <h2>{id}</h2>;
// };

// Class component - does not use any hooks - useXxx
class Details extends Component {
  constructor(props) {
    // anytime in a constructor MUST PASS PROPS TO REACT - even without any properties in props, Details is child of Component
    super(props);

    this.state = { loading: true };
  }

  render() {
    if (this.state.loading) {
      return <h2>loading _</h2>;
    }

    const { animal, breed, city, state, description, name, id } = this.state; // destructured for readability/key strokes in markup return

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {`${animal.charAt(0).toUpperCase() + animal.slice(1)}
          — ${breed}
          — ${city}, ${state}`}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
