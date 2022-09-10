import React from "react";
import './repo-card.sass'

export default function RepoCard({name, link, codeLink}) {
  return (
    <div className="repo-card">
      <img className="repo-card__img" src={`https://raw.githubusercontent.com/Quadatz/Summary/master/${name}/prev.png`} alt="preview"/>
      <a target="_blank" href={`https://quadatz.github.io/Summary/${name}`}><h2>{name}</h2></a>
    </div>
  )
}