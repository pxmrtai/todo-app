import React from "react";
import "./TodoApp.css";

import classNames from "classnames";

function TodoApp({item, handleClick}) {
  

  return (
    <div className="todo-list">
      <div onClick={handleClick}
        className={classNames("thing", {
          finished: item.finished
        })}
      >
        {item.title}
      </div>
    </div>
  );
}

export default TodoApp;
