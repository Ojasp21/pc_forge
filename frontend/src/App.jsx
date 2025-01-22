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

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PartsProvider } from "./context/PartsContext";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home.jsx";
import { Tileset } from "./components/Tileset/tileset.jsx";
import TilePage from "./components/Tileset/TilePage.jsx";
import PrebuildPCPage from "./components/PreBuildPCPage";
import GamingPC from "./components/GamingPC";
import ProfessionalPC from "./components/ProfessionalPC";
import EditingPC from "./components/EditingPC";
import GamingContainer1 from "./components/containers/GamingContainer1";
import GamingContainer2 from "./components/containers/GamingContainer2";
import ProfContainer1 from "./components/containers/ProfContainer1";
import ProfContainer2 from "./components/containers/ProfContainer2";
import EditingContainer1 from "./components/containers/EditingComtainer1";
import EditingContainer2 from "./components/containers/EditingContainer2";
import SignUpPage from "./pages/SignUpPage.jsx";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";

function App() {
  const { authUser, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <PartsProvider>
      <BrowserRouter>
          <Toaster />
          <Navbar />
          <div className='mt-[4.5rem]'>

          <Routes>
            <Route path="/signup" element={!authUser ? <SignUpPage />: <Navigate to='/' />}></Route>
            <Route path='/login' element={ !authUser ? <LoginPage />: <Navigate to='/' />} />
            <Route path="/" element={<Home />} />
            <Route path="/prebuildpc" element={<PrebuildPCPage />} />
            <Route path="/build" element={<Tileset />} />
            <Route path="/build/:category" element={<TilePage />} />
            <Route path="/" element={<PrebuildPCPage />} />
            <Route path="/gaming" element={<GamingPC />} />
            <Route path="/professional" element={<ProfessionalPC />} />
            <Route path="/editing" element={<EditingPC />} />
            <Route path="/gaming-container1" element={<GamingContainer1 />} />
            <Route path="/gaming-container2" element={<GamingContainer2 />} />
            <Route path="/prof-container2" element={<ProfContainer2 />} />
            <Route path="/prof-container1" element={<ProfContainer1 />} />
            <Route path="/editing-container1" element={<EditingContainer1 />} />
            <Route path="/editing-container2" element={<EditingContainer2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PartsProvider>
  );
}

export default App;
