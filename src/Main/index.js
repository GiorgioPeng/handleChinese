import React from "react";
import "./index.css";
export default function index() {
  return (
    <div
      style={{
        height: "400px",
        width: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px auto",
        backgroundColor: "black"
      }}
    >
      <div className="parent">
        <div
          className="child1"
          style={{
            backgroundColor: "black",
            left: "-90px",
            animationDelay: "1s"
          }}
        ></div>
        <div
          className="child2"
          style={{
            backgroundColor: "black",
            left: "-70px",
            animationDelay: "2s"
          }}
        ></div>
        <div
          className="child3"
          style={{
            backgroundColor: "black",
            left: "-50px",
            animationDelay: "1.5s"
          }}
        ></div>
        <div
          className="child4"
          style={{
            backgroundColor: "black",
            left: "-30px",
            animationDelay: "1s"
          }}
        ></div>
        <div
          className="child4"
          style={{
            backgroundColor: "black",
            left: "0px",
            animationDelay: "3s"
          }}
        ></div>
        <div
          className="child4"
          style={{
            backgroundColor: "black",
            left: "30px",
            animationDelay: "3s"
          }}
        ></div>
        <div
          className="child4"
          style={{
            backgroundColor: "black",

            left: "50px",
            animationDelay: "4s"
          }}
        ></div>
        <div
          className="child5"
          style={{
            backgroundColor: "black",
            left: "70px",
            animationDelay: "0s"
          }}
        ></div>
        <div
          className="child6"
          style={{
            backgroundColor: "black",
            left: "90px",
            animationDelay: "3s"
          }}
        ></div>
      </div>
    </div>
  );
}
