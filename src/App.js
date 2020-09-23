import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import TopWrapper from "./components/layout/TopWrapper";
import ShorteningUrl from "./components/layout/ShorteningUrl";
import MainContent from "./components/layout/MainContent";
import Boost from "./components/layout/Boost";
import Footer from "./components/layout/Footer";
import { ShortenProvider } from "./ShortenContext";

function App() {
  return (
    <ShortenProvider>
      <div className="container">
        <Header />
        <TopWrapper />
        <ShorteningUrl />
        <MainContent />
        <Boost />
        <Footer />
      </div>
    </ShortenProvider>
  );
}

export default App;
