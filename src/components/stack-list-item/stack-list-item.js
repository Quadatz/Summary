import React from "react";
import './stack-list-item.sass'

export default function StackListItem({ url, text }) {
    return (
        <div className="stack-list-item">
            <img src={url} alt={text}></img>
            <span>{text}</span>
        </div>
    )
}