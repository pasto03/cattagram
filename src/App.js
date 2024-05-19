import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Details from "./pages/details";
import { useEffect } from 'react';

function App() {
  async function trafficTracker() {
    const body = {
      page: process.env.REACT_APP_PAGE,
      deltaTraffic: 1,
      deltaVisitor: 0,
    };
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/traffic`,
      {
        method: "POST",
        body: JSON.stringify(body),
        credentials: "include",
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_ACCESS_CODE}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (process.env.REACT_APP_TRAFFIC_MODE === "prod") {
      trafficTracker();
    }
  }, []);

  return (
    <div>
      <div className="min-h-screen p-6 bg-cat-theme text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
