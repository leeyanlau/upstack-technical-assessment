import React from "react";
import { SearchBar, RepoCard } from "../components/index";

const Home = () => {
  return (
    <div className="container">
      <h1>Repositories</h1>
      <SearchBar />
      <RepoCard />
    </div>
  );
};

export default Home;
