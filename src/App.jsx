import React from 'react';
import Toolbar from './pages/Toolbar/Toolbar';
import Body from './pages/Body/Body';
// import Toolbar from './pages/Toolbar';
// import Body from './pages/Body';

function App() {
  return (
    <div className="flex h-screen bg-gray-700">
      <div className="w-1/4 bg-gray-800 p-4">
        <Toolbar />
      </div>
      <div className="w-3/4 p-4">
        <Body />
      </div>
    </div>
    // <div className="flex h-screen bg-gray-700">
    //   <div className="w-1/4 bg-gray-800 p-4">
    //     <Toolbar />
    //   </div>
    //   <div className="w-3/4 p-4">
    //     <Body />
    //   </div>
    // </div>
  );
}

export default App;