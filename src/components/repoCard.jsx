import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReposFetch } from "../redux/state/reposState";

import { TbStar, TbGitFork, TbEye, TbCode, TbEyeFilled, TbStarFilled } from "react-icons/tb";

import "../styles/RepoCard/RepoCard.css";

const RepoCard = () => {
  const { repos, hasMore } = useSelector((state) => state.reposReducer);
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

  //if at bottom and has more data, get more repo data
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && hasMore) {
      dispatch(getReposFetch());
    }
  };

  return (
    <div className="card_container">
      {repos.map((val, key) => {
        return (
          <div className="card" key={key} onClick={() => window.open(val.html_url, "_blank", "noreferrer")}>
            <div className="card_overview">
              <div className="card_title">{val.name}</div>
              <div className="card_desc">{val.description ? val.description : "No description available"}</div>
            </div>
            <div className="card_details">
              <div className="card_details_stars">
                <TbStar className="star_outline" />
                <TbStarFilled className="star_filled" />
                {val.stargazers_count}
              </div>
              <div className="card_details_forks">
                <TbGitFork />
                {val.forks_count}
              </div>
              <div className="card_details_watchers">
                <TbEye className="eye_outline" />
                <TbEyeFilled className="eye_filled" />
                {val.watchers}
              </div>
              <div className="card_details_language">
                <TbCode />
                {val.language}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RepoCard;
