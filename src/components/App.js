// create your App component here
import React, { useEffect, useState } from "react";

export default function App() {
  const [randomDog, setRandomDog] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setRandomDog(data.message));
  }, []);

  if (!randomDog) return <p>Loading...</p>;
  return (
    <div>
      <img src={randomDog} alt="A Random Dog" />
    </div>
  );
}
