import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😉": "Winking Face",
  "😗": "Kissing Face",
  "🤩": "Excited",
  "🏁": " Racing Flag",
  "🏴‍☠️": "Pirate Flag",
  "🍕": "Pizza",
  "🥭": "Mango",
  "🍧": "Snow Cone",
  "🏝️": "Desert Island",
  "⛲": "Fountain",
  "💢": " Anger Symbol",
  "🤼": "People Wrestling",
  "🦄": "Unicorn",
  "🦙": "Llama",
  "🐫": "Two-Bump Camel/ Asian Camel"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [userInput, setUserInput] = useState("");
  function getInput(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This emoji is not yet in my database";
    }
    setUserInput(meaning);
  }

  function getClick(emoji) {
    var meaning = emojiDictionary[emoji];

    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">
        Get the meaning of<span style={{ color: "blue" }}> emoji's</span> by
        searching here.{" "}
      </h1>

      <input
        onChange={getInput}
        placeholder="Put emoji's here"
        className="Input"
      ></input>
      <h3 style={{ color: "red" }}>{userInput}</h3>
      <h2>The emoji's we know </h2>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => getClick(emoji)}
            style={{ fontSize: "2rem", margin: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
