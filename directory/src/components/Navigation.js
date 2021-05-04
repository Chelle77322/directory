import React from 'react';
import SearchBox from "./SearchBox.js";
import "../styles/Navigation.css";

function Navigation ({ handleSearchChange}){
    return (
        <Navigation className = "navbar navbar-expand navbar-light bg-light">
            <div className = "navbar-collapse row" id = "navbarNav">
            <SearchBox handleSearchChange = {handleSearchChange}/>
            </div>
        </Navigation>
    );
}
export default Navigation;