import { useState } from "react"; //hook

const SearchParams = () => {
  // const location = "Emsworth, Hants";
  const { location, setLocation } = useState("");
  const { animal, setAnimal } = useState("");

  return (
    <div className="search-params">
      <form>
        {/*controlled form - value and handler provided (demonstrating hooks)
        uncontrolled form <form onSubmit{(e)=>{e.**}/>*/}
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
