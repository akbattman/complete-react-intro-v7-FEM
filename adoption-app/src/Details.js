import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

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

  state = { loading: true, showModal: false }; // constructor replacement due to babel plugin class-properties

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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>loading _</h2>;
    }

    // throw new Error("TEST - B0000M - DEMO");

    const { animal, breed, city, state, description, name, images, showModal } =
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
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          {/* <button>Adopt {name}</button> */}
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Adopting {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// func comp just to get at params and add to class instance as hooks unuseable in class comp
const WrappedDetails = () => {
  const params = useParams();
  return (
    // boundary must be on parent component to catch otherwise boundary collapses with the error.
    <ErrorBoundary>
      <Details params={params} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
