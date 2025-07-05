import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// AppLayout component that combines Header and Body components
// It serves as the main layout of the application, rendering the header at the top and the body below it.
const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
        <Body />    
    </div>
  );
};

// Rendering the AppLayout component into the root element of the HTML
// This is the entry point of the React application, where the AppLayout is mounted to the DOM.
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
