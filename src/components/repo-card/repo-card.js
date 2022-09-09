import React from "react";
import './repo-card.sass'

export default function RepoCard({name, link, codeLink}) {
  return (
    <div className="repo-card">
      <h2>{name}</h2>
    </div>
  )
}