import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const detailUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const getDetail = () => {
    axios
      .get(detailUrl)
      .then((res) => {
        console.log(res);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header />
      <button
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={getDetail}
      >
        Get Data
      </button>
    </div>
  );
};
