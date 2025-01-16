// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar/Navbar'
// import Home from './pages/Home.jsx'
// import  {Tileset}  from './components/Tileset/tileset.jsx'
// import TilePage from './components/Tileset/TilePage.jsx'
// function App() {

//   return (
//     <>
//       <BrowserRouter>
//       <div className='flex flex-col'>
//         <Navbar />

//           <Routes>
//             <Route path='/' element={<Home />}></Route>
//             <Route path='/build' element={<Tileset />}></Route>
//             <Route path='/build/:category' element={<TilePage />}></Route>
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PartsProvider } from './context/PartsContext';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home.jsx';
import { Tileset } from './components/Tileset/tileset.jsx';
import TilePage from './components/Tileset/TilePage.jsx';

function App() {
  return (
    <PartsProvider>
      <BrowserRouter>
        <div className="flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build" element={<Tileset />} />
            <Route path="/build/:category" element={<TilePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PartsProvider>
  );
}

export default App;
