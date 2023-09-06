import React from "react";
import "bulma/css/bulma.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client"; // Update the import

const rootElement = document.getElementById("root");

const root = createRoot(rootElement); // Use createRoot from "react-dom/client"
root.render( <
    React.StrictMode >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /React.StrictMode>
);