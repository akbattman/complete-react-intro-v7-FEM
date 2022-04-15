import { useState } from "react"; //hook

const ANIMALS = ["bird", "reptile", "fish", "dog", "cat"];

const SearchParams = () => {
  // const location = "Emsworth, Hants";
  const { location, setLocation } = useState("");
  const { animal, setAnimal } = useState("");
  const { breed, setBreed } = useState("");
  const allBreeds = ["Setter", "Daschund"];

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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {/* IMPLICIT RETURN - single line return function - (multilined with brackets) */}
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
            {/* {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })} */}
          </select>
        </label>

        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {allBreeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
