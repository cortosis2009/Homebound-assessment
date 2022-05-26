import React from "react";
import "./App.css";
import AppHeader from "./HomePage/AppHeader";
import ContentHeader from "./HomePage/ContentHeader";
import AppContent from "./HomePage/AppContent";

function App() {
  return (
    <div className="home-page">
      <AppHeader />
      <ContentHeader />
      <AppContent />
    </div>
  );
}

export default App;
