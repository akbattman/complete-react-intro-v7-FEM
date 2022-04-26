import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrBounds caught an ERROR !!", error, info); // console.error not good code outside learning. Investigate tools for larger app/production.
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error on this listing.
          <Link to="/">Click Here for Home</Link> or wait 5 seconds.
        </h2>
      );
    }

    return this.props.children; // if no error - children is whatever the boundary tag encapsulates
  }
}

export default ErrorBoundary;
