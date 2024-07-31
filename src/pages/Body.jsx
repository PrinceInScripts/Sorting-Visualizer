import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { algorithms } from '../algorithms';
import { runAlgorithm } from '../redux/action';
import { getArrayData } from '../redux/selctors';

const Body = () => {
  const dispatch = useDispatch();
  const { array, running, algorithm, speed } = useSelector(getArrayData);

  const handleRun = () => {
    if (!running) {
      const algo = algorithms.find((algo) => algo.value === algorithm);
      if (algo) {
        dispatch(runAlgorithm(algo.method, array, speed));
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleRun}
        disabled={running}
        className={`mb-4 p-2 rounded ${running ? 'bg-gray-500' : 'bg-blue-500'} text-white`}
      >
        Run
      </button>
      <div className="flex flex-wrap justify-center">
        {Array.isArray(array) &&
          array.map((value, index) => (
            <div
              key={index}
              className="w-2 bg-blue-500 mx-1"
              style={{ height: `${value}px`, minWidth: '2px', maxWidth: '2px' }}
            />
          ))}
      </div>
    </div>
  );
};

export default Body;