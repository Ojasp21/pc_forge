// import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { PartsProvider } from "./context/PartsContext";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home.jsx";
// import { Tileset } from "./components/Tileset/tileset.jsx";
// import TilePage from "./components/Tileset/TilePage.jsx";
// import PrebuildPCPage from "./components/PreBuildPCPage";
// import GamingPC from "./components/GamingPC";
// import ProfessionalPC from "./components/ProfessionalPC";
// import EditingPC from "./components/EditingPC";
// import GamingContainer1 from "./components/containers/GamingContainer1";
// import GamingContainer2 from "./components/containers/GamingContainer2";
// import ProfContainer1 from "./components/containers/ProfContainer1";
// import ProfContainer2 from "./components/containers/ProfContainer2";
// import EditingContainer1 from "./components/containers/EditingComtainer1";
// import EditingContainer2 from "./components/containers/EditingContainer2";
// import SignUpPage from "./pages/SignUpPage.jsx";
// import { Toaster } from "react-hot-toast";
// import LoginPage from "./pages/LoginPage.jsx";
// import { useAuthStore } from "./store/useAuthStore.js";
// import { useEffect } from "react";
// import LangFlowAPIComponent from "./components/Langflow.jsx";
// import useBuildStore from "./store/useBuildStore.js";
// import AllCards from "./accessories/Allcards.jsx";
// import ProductsPage from "./accessories/Productpage.jsx";
// import Footer from "./components/footer/Footer.jsx";

// function App() {
//   const { authUser, checkAuth } = useAuthStore();
//   const { fetchBuild } = useBuildStore();

//   useEffect(() => {
//     checkAuth();
//   }, [checkAuth]);

//   useEffect(() => {
//     if (authUser) {
//       fetchBuild();
//     }
//   }, [authUser, fetchBuild]);

//   return (
//     <PartsProvider>
//       <BrowserRouter>
//         <Toaster />
//         <Navbar />
//         <AppRoutes />
//       </BrowserRouter>
//     </PartsProvider>
//   );
// }

// function AppRoutes() {
//   const location = useLocation(); 
//   const { authUser } = useAuthStore(); 

//   return (
//     <div className="mt-[4.5rem]">
//       <Routes>
//         <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
//         <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/prebuildpc" element={<PrebuildPCPage />} />
//         <Route path="/build" element={<Tileset />} />
//         <Route path="/build/:category" element={<TilePage />} />
//         <Route path="/gaming" element={<GamingPC />} />
//         <Route path="/professional" element={<ProfessionalPC />} />
//         <Route path="/editing" element={<EditingPC />} />
//         <Route path="/gaming-container1" element={<GamingContainer1 />} />
//         <Route path="/gaming-container2" element={<GamingContainer2 />} />
//         <Route path="/prof-container2" element={<ProfContainer2 />} />
//         <Route path="/prof-container1" element={<ProfContainer1 />} />
//         <Route path="/editing-container1" element={<EditingContainer1 />} />
//         <Route path="/editing-container2" element={<EditingContainer2 />} />
//         <Route path="/langflow" element={<LangFlowAPIComponent />} />
//         <Route path="/accessories" element={<AllCards />} />
//         <Route path="/category/:categoryName" element={<ProductsPage />} />
//       </Routes>
//       <Footer/>
//       {/* ✅ Show Footer only on Home Page */}
//       {/* {location.pathname === "/" && <Footer />} */}
//     </div>
//   );
// }

// export default App;









// import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { PartsProvider } from "./context/PartsContext";

// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home.jsx";
// import { Tileset } from "./components/Tileset/tileset.jsx";
// import TilePage from "./components/Tileset/TilePage.jsx";
// import PrebuildPCPage from "./components/PreBuildPCPage";
// import GamingPC from "./components/GamingPC";
// import ProfessionalPC from "./components/ProfessionalPC";
// import EditingPC from "./components/EditingPC";
// import GamingContainer1 from "./components/containers/GamingContainer1";
// import GamingContainer2 from "./components/containers/GamingContainer2";
// import ProfContainer1 from "./components/containers/ProfContainer1";
// import ProfContainer2 from "./components/containers/ProfContainer2";
// import EditingContainer1 from "./components/containers/EditingComtainer1";
// import EditingContainer2 from "./components/containers/EditingContainer2";
// import SignUpPage from "./pages/SignUpPage.jsx";
// import { Toaster } from "react-hot-toast";
// import LoginPage from "./pages/LoginPage.jsx";
// import { useAuthStore } from "./store/useAuthStore.js";
// import { useEffect } from "react";
// import LangFlowAPIComponent from "./components/Langflow.jsx";
// import useBuildStore from "./store/useBuildStore.js";
// import AllCards from "./accessories/Allcards.jsx"
// import ProductsPage from "./accessories/Productpage.jsx";
// import Footer from "./components/footer/Footer.jsx";
// function App() {
//   const { authUser, checkAuth } = useAuthStore();
//   const { fetchBuild } = useBuildStore();
//   // const location = useLocation(); 
//   useEffect(() => {
//     checkAuth();

//   }, [checkAuth]);
  
//   useEffect(() => {
//     if (authUser) {
//       fetchBuild();
//     }
//   }, [authUser]);
//   return (
//     <PartsProvider>
//       <BrowserRouter>
//           <Toaster />
//           <Navbar />
//           <div className='mt-[4.5rem]'>

//           <Routes>
//             <Route path="/signup" element={!authUser ? <SignUpPage />: <Navigate to='/' />}></Route>
//             <Route path='/login' element={ !authUser ? <LoginPage />: <Navigate to='/' />} />
//             <Route path="/" element={<Home />} />
//             <Route path="/prebuildpc" element={<PrebuildPCPage />} />
//             <Route path="/build" element={<Tileset />} />
//             <Route path="/build/:category" element={<TilePage />} />
//             <Route path="/" element={<PrebuildPCPage />} />
//             <Route path="/gaming" element={<GamingPC />} />
//             <Route path="/professional" element={<ProfessionalPC />} />
//             <Route path="/editing" element={<EditingPC />} />
//             <Route path="/gaming-container1" element={<GamingContainer1 />} />
//             <Route path="/gaming-container2" element={<GamingContainer2 />} />
//             <Route path="/prof-container2" element={<ProfContainer2 />} />
//             <Route path="/prof-container1" element={<ProfContainer1 />} />
//             <Route path="/editing-container1" element={<EditingContainer1 />} />
//             <Route path="/editing-container2" element={<EditingContainer2 />} />
//             <Route path="/langflow" element={<LangFlowAPIComponent/>} />
//             <Route path="/accessories" element={<AllCards />} />
//             <Route path="/category/:categoryName" element={<ProductsPage />} />
//           </Routes>
//           {/* <Footer/> */}
//           {location.pathname === "/" && <Footer/>}
//         </div>
//       </BrowserRouter>
//     </PartsProvider>
//   );
// }

// export default App;







import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import LangFlowAPIComponent from "./components/Langflow.jsx";
import useBuildStore from "./store/useBuildStore.js";
import AllCards from "./accessories/Allcards.jsx";
import ProductsPage from "./accessories/Productpage.jsx";
import HomePageFooter from "./components/footer/HomePageFooter.jsx";
import FAQPage from "./components/FAQPage.jsx";

function App() {
  const { authUser, checkAuth } = useAuthStore();
  const { fetchBuild } = useBuildStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (authUser) {
      fetchBuild();
    }
  }, [authUser]);

  return (
    <PartsProvider>
      <div className="flex flex-col min-h-screen"> {/* Full screen layout */}
        <BrowserRouter>
          <Toaster />
          <Navbar />        
          <div className="flex-grow mb-0 mt-[4.5rem] py-0"> {/* Push footer to bottom */}
            <Routes>
              <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
              <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/prebuildpc" element={<PrebuildPCPage />} />
              <Route path="/build" element={<Tileset />} />
              <Route path="/build/:category" element={<TilePage />} />
              <Route path="/gaming" element={<GamingPC />} />
              <Route path="/professional" element={<ProfessionalPC />} />
              <Route path="/editing" element={<EditingPC />} />
              <Route path="/gaming-container1" element={<GamingContainer1 />} />
              <Route path="/gaming-container2" element={<GamingContainer2 />} />
              <Route path="/prof-container2" element={<ProfContainer2 />} />
              <Route path="/prof-container1" element={<ProfContainer1 />} />
              <Route path="/editing-container1" element={<EditingContainer1 />} />
              <Route path="/editing-container2" element={<EditingContainer2 />} />
              <Route path="/langflow" element={<LangFlowAPIComponent />} />
              <Route path="/accessories" element={<AllCards />} />
              <Route path="/category/:categoryName" element={<ProductsPage />} />
              <Route path="/faqs" element={<FAQPage />} />
            </Routes>
          <HomePageFooter />
          </div>
        </BrowserRouter>
      </div>
    </PartsProvider>
  );
}

export default App;
