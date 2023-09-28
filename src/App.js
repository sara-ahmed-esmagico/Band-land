import "./App.css";
import Home from "./pages/home";
import Register from "./pages/register";
import { Route, Routes, useLocation } from "react-router-dom";
import "../src/styles/Home.css";
import { useEffect, useState } from "react";
import About from "./pages/about";
import artists from "./pages/the-artists";
import Tickets from "./pages/tickets";
import FAQ from "./pages/faq";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const { pathname: currentLocation } = useLocation();

  useEffect(() => {
    if (currentLocation === "/") {
      setBackgroundColor("#44c0a8");
    } else if (currentLocation === "/register") {
      setBackgroundColor("coral");
    }else if(currentLocation === "/about")
    {
      setBackgroundColor('#7B1AA7')
    }else if(currentLocation === "/tickets")
    {
      setBackgroundColor('#7B1AA7')
    }
    else if(currentLocation === "/faq")
    {
      setBackgroundColor('#7B1AA7')
    }
  }, [currentLocation,setBackgroundColor]);
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="full-screen-background flex-center flex-col align-center pos-relative "
    >
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/about" Component={About} />
        <Route path="/the-artists" Component={Register} />
        <Route path="/tickets" Component={Tickets} />
        <Route path="/faq" Component={FAQ} />
      </Routes>
    </div>
  );
}

export default App;
