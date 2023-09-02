import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";

export default function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    // Add a resize event listener to check the screen size and update state
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      {isLargeScreen && <Slidebar />}
      <Display isLargeScreen={isLargeScreen}/>
    </Layout>
  );
}
