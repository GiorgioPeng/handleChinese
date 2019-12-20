import React from "react";
import "./index.css";
export default function index() {
  const classNameSet = [
    "child1",
    "child2",
    "child3",
    "child4",
    "child5",
    "child6",
    "child7",
    "child8",
    "child9"
  ];
  return (
    <div className="mainContent">
      <div className="parent">
        {classNameSet.map(cn => {
          return <div className={cn} key={cn}></div>;
        })}
      </div>
    </div>
  );
}
