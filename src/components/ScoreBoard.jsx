import React, { useState, useEffect } from "react";
import ScoreBoardStyles from "./css/ScoreBoard.module.css";

// scores component
export default function ScoreBoard() {
  const [number, setNumber] = useState(0);

  // component did mounted
  useEffect(() => {
    alert("ScoreBoard component mounted");
  }, []);

  // component updated
  useEffect(() => {
    console.log("score is updated");
    console.log(`present score is : ${number}`);
  }, [number]);

  // component did unmounted
  useEffect(() => {
    return () => {
      // alert message when component unmounted
      alert("ScoreBoard component unmounted!");
    };
  }, []);

  return (
    <div style={{paddingTop: '35px'}}>
      <p className={ScoreBoardStyles.para}> {number} </p>
      <button
        onClick={function () {
          if (number < 10) {
            setNumber(number + 1);
          }
        }}
      >
        Increment
      </button>
      <button
        onClick={function () {
          if (number > 0) {
            setNumber(number - 1);
          }
        }}
      >
        Decrement
      </button>
      <button
        onClick={function () {
          setNumber(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

// useState and useEffect are used.
