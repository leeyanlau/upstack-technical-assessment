import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRepos } from "./../redux/ducks/repos";

const RepoCard = ({ repo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  const repos = useSelector((state) => state.repos.repos);

  console.log({ repos });
  // const { name, description, stargazers_count, forks_count, watchers, language } = repos[0];
  return (
    <div className="card">
      CARD
      {/* <div className="card_title">Title: {name}</div>
      <div className="card_desc">Description: {description}</div>
      <div className="card_details">
        <div className="card_details_stars">Stars: {stargazers_count}</div>
        <div className="card_details_forks">Forks: {forks_count}</div>
        <div className="card_details_watchers">Watchers: {watchers}</div>
        <div className="card_details_language">Language: {language}</div>
      </div> */}
    </div>
  );
};

export default RepoCard;
