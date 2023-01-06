import React from "react";
// import { GoRepoForked } from "react-icons/go";
import Styles from "./Card.module.css";

function Card({
  owner: { avatar_url },
  name,
  stargazers_count,
  forks_count,
  language,
  html_url,
}) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className={Styles.wrapper} onClick={() => openInNewTab(html_url)}>
      <div className={Styles.image}>
        <img src={avatar_url} alt={name} />
      </div>
      <div className={Styles.textDiv}>
        <h1>{name}</h1>
        <h1>{language}</h1>
        <div>
          <div>⭐{stargazers_count}stars</div>
          <div>{forks_count}forks</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
