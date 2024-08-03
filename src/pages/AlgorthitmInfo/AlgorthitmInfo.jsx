import React, { useEffect, useState } from 'react'
import AlgorithmsDetails from './AlgorthitmDetails';

function AlgorthitmInfo({algorithm}) {

   const [details,setDetails]=useState(null)
   
   useEffect(()=>{
    const foundDetails=Object.values(AlgorithmsDetails).find(
      (alg)=>alg.name==algorithm
    );


    setDetails(foundDetails);
   },[algorithm])

   if(!details) return null;

   const sortingName=(name)=>{
      if(name=="bubbleSort") return "Bubble Sort";
      else if(name=="selectionSort") return "Selection Sort";
      else if(name=="quickSort") return "Quick Sort";
      else if(name=="heapSort") return "Heap Sort";
      else if(name=="mergeSort") return "Merge Sort";
      else if(name=="insertionSort") return "Insertion Sort";
   }

  
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h2 className="text-4xl  text-center font-serif  font-bold mb-2">{sortingName(details.name)}</h2>
      <div className='flex justify-center gap-10'>
      <p className='text-lg font-semibold font-serif'>Time Complexity:{details.timeComplexity}</p>
      <p className='text-lg font-semibold font-serif'>Space Complexity: {details.spaceComplexity}</p>
      </div>
     
      <div className="mt-4">
        <h3 className="text-xl font-bold font-serif mb-2">Code (C++)</h3>
        <pre className="bg-gray-800 text-white p-2 rounded">{details.code.cpp}</pre>
      </div>
      <div className="mt-4 ">
        <h3 className="text-xl font-bold font-serif mb-2">Code (JavaScript)</h3>
        <pre className="bg-gray-800 text-white p-2 rounded">{details.code.javaScript}</pre>
      </div>
    </div>
  )
}

export default AlgorthitmInfo
