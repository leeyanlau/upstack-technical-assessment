import React from "react";
import { SearchBar, RepoCard, Loading } from "../components/index";

import { useSelector } from "react-redux";

import "../styles/Home/Home.css";

const Home = () => {
  const isLoading = useSelector((state) => state.reposReducer.isLoading);

  return (
    <div className="container">
      <h1 className="home_title">React Community Repositories</h1>
      <SearchBar />
      <RepoCard />
      {isLoading && <Loading />}
    </div>
  );
};

export default Home;
