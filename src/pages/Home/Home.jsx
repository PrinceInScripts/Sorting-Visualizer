import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Body from '../Body/Body';


function Home() {
  return (

    <div className="flex h-screen bg-gray-700">
      <div className="w-1/4 bg-gray-800 p-4">
        <Toolbar />
        
      </div>
      <div className="w-3/4 p-4">
        <Body />
      </div>
    </div>

    
  );
}

export default Home;