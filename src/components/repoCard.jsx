import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReposFetch } from "../redux/state/reposState";

import "../styles/RepoCard/RepoCard.css";

const RepoCard = () => {
  const { repos, searchTerm } = useSelector((state) => state.reposReducer);
  const dispatch = useDispatch();

  //get initial repo data
  useEffect(() => {
    dispatch(getReposFetch());
  }, [dispatch]);

  //check on state change if scroll is used and remove after check
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //if at bottom, get more repo data
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      dispatch(getReposFetch());
    }
  };

  const reposData = repos.filter((repo) => repo.name.toLowerCase().includes(searchTerm)); //filter search data

  return (
    <div className="card_container">
      {reposData.map((val, key) => {
        return (
          <div className="card" key={key}>
            <div className="card_overview">
              <div className="card_title">Title: {val.name}</div>
              <div className="card_desc">Description: {val.description}</div>
            </div>
            <div className="card_details">
              <div className="card_details_stars">Stars: {val.stargazers_count}</div>
              <div className="card_details_forks">Forks: {val.forks_count}</div>
              <div className="card_details_watchers">Watchers: {val.watchers}</div>
              <div className="card_details_language">Language: {val.language}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RepoCard;
