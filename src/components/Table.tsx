import React, { useEffect, useState } from "react";
import axios from "axios";

export const Table = () => {
  const URI = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(URI)
      .then((res) => {
        for (let i = 0; i < res.data.results.length; i++) {
          setDatas(res.data.results);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md rounded mb-5">
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-indigo-600">
          <thead className="text-xs text-white uppercase bg-indigo-600 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Index
              </th>
              <th scope="col" className="px-6 py-3">
                Pokemon
              </th>
              <th scope="col" className="px-6 py-3">
                Detail
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr
                className="bg-transparent border border-indigo-600 hover:bg-gray-100"
                key={datas.indexOf(data) + 1}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {datas.indexOf(data) + 1}
                </th>
                <td className="px-6 py-4 text-indigo-600">{data.name}</td>
                <td className="px-6 py-4">
                  <a
                    href={"/detail/pokemon/" + (datas.indexOf(data) + 1)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {data.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Get Data
      </button>
    </div>
  );
};
