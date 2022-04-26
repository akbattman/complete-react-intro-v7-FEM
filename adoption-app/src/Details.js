import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// // function component replacing ##
// const Details = () => {
//   // return <h1>Router - Hello World</h1>;
//   const { id } = useParams();
//   return <h2>{id}</h2>;
// };

// Class component - does not use any hooks - useXxx
class Details extends Component {
  // constructor(props) {
  //   // anytime in a constructor MUST PASS PROPS TO REACT - even without any properties in props, Details is child of Component
  //   super(props);

  //   this.state = { loading: true };
  // }

  state = { loading: true }; // constructor replacement due to babel plugin class-properties

  // lifecycle method - "effectively useEffect" - runs after render completes
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    // this.setState({ loading: false });

    // this.setState(json.pets[0]);

    // guarantees react batch loads setState avoiding render x2
    this.setState(Object.assign({ loading: false }, json.pets[0]));
    // this.setState({ loading: false, ...json.pets[0] });  ## OBJECT SPREAD - MDN REVISE
  }

  render() {
    if (this.state.loading) {
      return <h2>loading _</h2>;
    }

    throw new Error("B0000M");

    const { animal, breed, city, state, description, name, images } =
      this.state; // destructured for readability/key strokes in markup return(below)

    return (
      <div className="details">
        <Carousel images={images} />
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

// func comp just to get at params and add to class instance as hooks unuseable in class comp
const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
