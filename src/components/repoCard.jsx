import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReposFetch } from "../redux/state/reposState";

import "../styles/RepoCard/RepoCard.css";

const RepoCard = () => {
  const repos = useSelector((state) => state.reposReducer.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReposFetch());
  }, [dispatch]);

  console.log(repos);

  return (
    <div className="card_container">
      {repos.map((val, key) => {
        return (
          <div className="card" key={key}>
            <div className="card_title">Title: {val.name}</div>
            <div className="card_desc">Description: {val.description}</div>
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
