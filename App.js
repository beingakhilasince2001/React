import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Header";
import BodyComponent from "./Body";


const AppComponent = () => {
    return (
        
        <div className="app">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);