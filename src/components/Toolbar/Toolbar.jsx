import React, { useEffect } from "react";
import "./Toolbar.css";

const Toolbar = ({
  array,
  algorithm,
  generateArray,
  updateAlgorithm,
  sort,
  isRunning,
}) => {

  useEffect(() => {
    generateArray(87);
    document.getElementById("changeSize").value = 50;
  }, [generateArray]);

  const handleClick = (algorithm) => {
    updateAlgorithm(algorithm);
  };

  const handleChange = (evt) => {
    generateArray(Math.floor((parseInt(evt.target.value) + 3) * 1.65));
  };

  const speed = 570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;

  const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
  const cursor = isRunning ? "auto" : "pointer";

  return (
    <div className="flex flex-col p-4 bg-gray-800 h-full">
      <div
        id={!isRunning ? "generateArray" : "generateArrayX"}
        className="mb-4 text-white cursor-pointer"
        style={{color: color, cursor: cursor}}
        onClick={!isRunning ? () => generateArray(array.length) : null}>
        Generate New Array
      </div>
      <div className="separator my-2"></div>
      <div id="arraySize" className="mb-4 text-white">
        Change Array Size & Sorting Speed
      </div>
      <input
        id="changeSize"
        type="range"
        min="0"
        max="100"
        className="mb-4"
        style={{background: color, cursor: cursor}}
        disabled={isRunning ? "disabled" : null}
        onChange={handleChange}
      />
      <div className="separator my-2"></div>
      <div
        className={algorithm === "mergeSort" ? "currentAlgorithmButton mb-4" : "algorithmButton mb-4"}
        onClick={() => handleClick("mergeSort")}>
        Merge Sort
      </div>
      <div
        className={algorithm === "quickSort" ? "currentAlgorithmButton mb-4" : "algorithmButton mb-4"}
        onClick={() => handleClick("quickSort")}>
        Quick Sort
      </div>
      <div
        className={algorithm === "heapSort" ? "currentAlgorithmButton mb-4" : "algorithmButton mb-4"}
        onClick={() => handleClick("heapSort")}>
        Heap Sort
      </div>
      <div
        className={algorithm === "bubbleSort" ? "currentAlgorithmButton mb-4" : "algorithmButton mb-4"}
        onClick={() => handleClick("bubbleSort")}>
        Bubble Sort
      </div>
      <div className="separator my-2"></div>
      {algorithm && (
        <div
          id="sort"
          className="text-white cursor-pointer"
          style={{color: color, cursor: cursor}}
          onClick={!isRunning ? () => sort(algorithm, array, speed) : null}>
          Sort!
        </div>
      )}
    </div>
  );
};

export default Toolbar;