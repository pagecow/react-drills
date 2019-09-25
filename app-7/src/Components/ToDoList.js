import React from "react";

const ToDoList = (props) => {
        console.log(props.myList)
        return(
            <div>
               <h2>{props.myList}</h2>
            </div>
        )
}

export default ToDoList;