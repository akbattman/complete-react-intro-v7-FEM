import { Component } from "react";

class Carousel extends Component {
  // constructor ## plugin replaced REMINDER ##
  state = {
    active: 0,
  };

  // default props - all instances will share but does not belong to carousel instance
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state; // instance only assigned individually with contructor ## eg. 5 instances = 5 active .states. Carousel can modify its state.
    const { images } = this.props; // shared as static to all instances ## eg. 5 instances = 1 nonunique prop shared. Props are passed - cannot be modified.

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
