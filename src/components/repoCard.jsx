import React from "react";

const RepoCard = ({ repo }) => {
  return (
    <div className="card">
      <div className="card_title">Title: {repo.name}</div>
      <div className="card_desc">Description: {repo.description}</div>
      <div className="card_details">
        <div className="card_details_stars">Stars: {repo.stargazers_count}</div>
        <div className="card_details_forks">Forks: {repo.forks_count}</div>
        <div className="card_details_watchers">Watchers: {repo.watchers}</div>
        <div className="card_details_language">Language: {repo.language}</div>
      </div>
    </div>
  );
};

export default RepoCard;
