import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlgorithm, setSpeed, setSize } from '../redux/reducers/Toolbar';
import { algorithms } from '../algorithms';
import { generateArray } from '../redux/action';

const Toolbar = () => {
  const dispatch = useDispatch();
  const { algorithm, speed, size } = useSelector((state) => state.toolbar);

  useEffect(() => {
    dispatch(setSize(50)); // Default size
    dispatch(setSpeed(50)); // Default speed
    dispatch(generateArray(50)); // Default array size
  }, [dispatch]);

  const handleSliderChange = (e) => {
    const sliderValue = Number(e.target.value);

    // Calculate size and speed based on slider value
    const newSize = sliderValue;
    const newSpeed = Math.max(10, 100 - newSize * 0.2); // Adjust the speed calculation as needed

    dispatch(setSize(newSize));
    dispatch(setSpeed(newSpeed));
    dispatch(generateArray(newSize)); // Update the array size
  };

  const handleAlgorithmChange = (e) => {
    dispatch(setAlgorithm(e.target.value));
  };

  return (
    <div className="flex flex-col p-4 bg-gray-800 text-white">
      <label className="mb-4">
        Algorithm:
        <select
          value={algorithm}
          onChange={handleAlgorithmChange}
          className="ml-2 p-1 bg-gray-600 border border-gray-500 rounded"
        >
          {algorithms.map((algo) => (
            <option key={algo.value} value={algo.value}>
              {algo.label}
            </option>
          ))}
        </select>
      </label>
      <label className="mb-4">
        Size & Speed:
        <input
          type="range"
          min="10"
          max="100"
          value={size}
          onChange={handleSliderChange}
          className="ml-2"
        />
      </label>
    </div>
  );
};

export default Toolbar;