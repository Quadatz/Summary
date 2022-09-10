import React from "react";
import './repo-card.sass'

export default function RepoCard({name, link, codeLink}) {
  return (
    <div className="repo-card">
      <a target="_blank" href={`https://quadatz.github.io/Summary/${name}`}><h2>{name}</h2></a>
      <img src={`https://quadatz.github.io/Summary/${name}/prev.png`} alt="preview"/>
    </div>
  )
}