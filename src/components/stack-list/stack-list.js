import React from "react";
import StackListItem from '../stack-list-item/stack-list-item'
import './stack-list.sass'

export default function StackList() {
    return (
        <div className="stack-list">
            <h1>Мой стек</h1>
            <StackListItem url="https://cdn-icons-png.flaticon.com/128/174/174854.png" text="HTML5" />
            <StackListItem url="https://cdn-icons-png.flaticon.com/128/732/732190.png" text="CSS3" />
            <StackListItem url="https://cdn-icons-png.flaticon.com/128/5968/5968358.png" text="SASS" />
            <StackListItem url="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" text="Bootstrap" />
            <StackListItem url="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" text="JavaScript" />
            <StackListItem url="https://cdn-icons-png.flaticon.com/128/2111/2111288.png" text="Git" />
            <StackListItem url="https://www.svgrepo.com/show/303440/gulp-logo.svg" text="Gulp" />
            <StackListItem url="https://cdn.iconscout.com/icon/free/png-64/webpack-3-1174982.png" text="Webpack" />
            <StackListItem url="https://cdn.iconscout.com/icon/free/png-64/react-3-1175109.png" text="React" />
        </div>
        )
}