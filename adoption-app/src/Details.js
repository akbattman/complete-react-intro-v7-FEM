import { useParams } from "react-router-dom";

const Details = () => {
  // return <h1>Router - Hello World</h1>;
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
