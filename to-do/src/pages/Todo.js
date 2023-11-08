import React from "react";
import EditableText from "../functions/EditableText";
import List from "./List";
import '../css/to-do.css';

const Todo = () =>{

    const header = 'Insert Name of List Here';

    return(
        <div>
            <div id="header">
            <EditableText initialText={header}/>
            <p className="note"> note: you can double-click to edit your title and to-do list items</p>
            </div>
            <List/>
        </div>

            
    );
};

export default Todo;