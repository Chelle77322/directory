import React from 'react';
import Search from "./Search.js";
import "../styles/Navigate.css";

function Navigate (){
    return (
     <nav className = "navbar navbar-expand-lg navbar-light bg-light">
        <button className = "navbar-toggler" type = "button" data-toggle = "collapse"
        data-target = "#navbarNav"
        aria-controls = "navbarNav"
        aria-expanded = "false"
        aria-label = "Toggle navigation">
            <span className = "navbar-toggler-icon"/>
        </button>
        <div className = "collapse navbar-collapse row" id = "navbarNav">
        < div className = "search-area col-4">
            <Search />
        </div>
        </div>
     </nav>
    );
}
export default Navigate;