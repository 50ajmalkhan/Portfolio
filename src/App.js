import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";

export default function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

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
