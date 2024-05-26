import React, { useState } from "react";

function WordCounter() {
  const [char, setChar] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  let handleText = (e) => {
    setChar(e.target.value);
    setCharCount(countCharacters(e.target.value));
    setWordCount(countWords(e.target.value));
  };

  let countWords = (str) => {
    return str
      .trim()
      .split(/\s+/)
      .filter((word) => word).length;
  };

  let countCharacters = (str) => {
    return str.replace(/\s/g, "").length;
  };

  let handleClear = (e) => {
    setCharCount(0);
    setChar("");
    setWordCount(0);
  };

  return (
    <div className="container flex flex-col flex-wrap m-2 items-center">
      <div className="text-center">
        <h1 className="font-bold text-lg">Word Counter</h1>
        <p>Free online character and word count tool</p>
      </div>
      <div className="m-2 p-2">
        <textarea
          className="border-solid border-2"
          name="text"
          rows="10"
          cols="100"
          onChange={(e) => handleText(e)}
          value={char}
        />
      </div>
      <div className="flex flex-row gap-2">
        <p className="bg-sky-500  hover:bg-sky-700 p-2 rounded-md">
          Character {charCount}
        </p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleClear}
        >
          Clear
        </button>
        <p className="bg-sky-500  hover:bg-sky-700 p-2 rounded-md">
          Words {wordCount}
        </p>
      </div>
    </div>
  );
}

export default WordCounter;
