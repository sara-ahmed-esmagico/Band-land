import "./App.css";
import Home from "./pages/home";
import Register from "./pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/Home.css";
import { useEffect, useState } from "react";
import Header from "./common/Header";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const currentLocation = window.location.pathname;

  console.log(currentLocation, " crr");

  useEffect(() => {
    if (currentLocation === "/") {
      setBackgroundColor("#44c0a8");
    } else if (currentLocation === "/register") {
      setBackgroundColor("coral");
    }
  }, [backgroundColor]);
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="full-screen-background flex-center flex-col align-center pos-relative "
    >
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
