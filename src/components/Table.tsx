import React from "react";
import axios from "axios";

export const Table = () => {
  const URI = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const getAPI = () => {
    axios
      .get(URI)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={getAPI}
      >
        Get Data
      </button>
    </div>
  );
};
