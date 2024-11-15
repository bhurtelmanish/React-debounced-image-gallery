import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Gallery from "./Components/Gallery.jsx";
import { Route, Routes } from "react-router";
import Loader from "./Components/Loader.jsx";
import './index.css';
import { INITIAL_LOADING_TIME } from './assets/Data'
import ImageDetails from "./Components/ImageDetails.jsx";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [showLoader , setShowLoader] = useState(true);
  const [loaderTimeOut , setLoaderTimeOut] = useState(null);

  useEffect(() => {
    setLoaderTimeOut(setTimeout(() => {
      setShowLoader(false);
    } , INITIAL_LOADING_TIME))

    return () => {
      clearTimeout(loaderTimeOut);
    }
  } , [])

  return showLoader ? <>
   {
          showLoader &&
            <Loader
              position="fixed" 
              top="50%" 
              left="50%" 
              translate="-50%, -50%" 
              backgroundColor="var(--blueColor)" 
              height="1.2rem"
              width="1.2rem"
            />
        }
  </> : 
    <>
      <div className={`${isDarkMode ? "dark" : ""} h-auto w-auto dark:bg-[var(--darkBackground)]`}>
        <div className="relative h-auto w-auto dark:bg-[var(--darkBackground)]">
          <div className="max-w-[var(--maxWidth)] m-auto">
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/imagedetails" element={<ImageDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </> 
};

export default App;
