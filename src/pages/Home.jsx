import React from "react";
import { SearchBar, RepoCard } from "../components/index";

import "../styles/Home/Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="home_title">React Community Repositories</h1>
      <SearchBar />
      <RepoCard />
    </div>
  );
};

export default Home;
