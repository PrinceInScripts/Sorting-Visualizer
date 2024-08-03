import React, { useEffect } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Body from '../Body/Body';
import { useSelector } from 'react-redux';
import AlgorthitmInfo from '../AlgorthitmInfo/AlgorthitmInfo';


function Home() {
    const algorithm=useSelector((state)=>state.toolbar.algorithm);

   
  return (
   <>
     <div className="flex bg-gray-700 h-screen">
        <div className="w-1/4 bg-gray-800 p-4 flex flex-col gap-4">
          <Toolbar />
        </div>
        <div className="w-3/4 p-4">
          <Body />
        </div>
      </div>
      {algorithm && (
        <div className=" bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 w-3/4 max-h-3/4 overflow-y-auto">
            <AlgorthitmInfo algorithm={algorithm} />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;