import React from "react";
import Header from "../components/Header";
import { Table } from "../components/Table";
import { Search } from "../components/Search";

export const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Table />
    </div>
  );
};
