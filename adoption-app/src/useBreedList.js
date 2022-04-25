import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  // naming syntax must be 'useXxxXxx'
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  // // just to demo react loads - alerts = 💩
  // useEffect(() => {
  //   alert(status);
  // }, [status]);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}