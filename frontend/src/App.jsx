import { useState } from "react";


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
import ProductsPage from "./accessories/ProductPage.jsx";
import HomePageFooter from "./components/footer/HomePageFooter.jsx";
import FAQPage from "./components/FAQPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import AboutUs from "./components/AboutUsPage.jsx";

function App() {
  const { authUser, checkAuth } = useAuthStore();
  const { fetchBuild } = useBuildStore();
  const [cartData, setCartData] = useState({ addedParts: [], removePart: () => {}, totalPrice: 0 });
  

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
          <div className="flex-grow mb-0 mt-[2.5rem] py-0"> {/* Push footer to bottom */}
            <Routes>
              <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
              <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/prebuildpc" element={<PrebuildPCPage />} />
              <Route path="/build" element={<Tileset setCartData={setCartData} />} />
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
              <Route path="/accessories/:category" element={<ProductsPage />} />
              <Route path="/faqs" element={<FAQPage />} />
              <Route path="/checkout" element={<Checkout {...cartData} />} />
              <Route path="about-us" element={<AboutUs/>}/>
            </Routes>
          </div>
          <HomePageFooter />
        </BrowserRouter>
      </div>
    </PartsProvider>
  );
}

export default App;
