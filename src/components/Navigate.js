import React from 'react';
import Search from "./Search.js";
import "../styles/Navigation.css";

function Navigate ({ handleSearchChange}){
    return (
        <Navigate className = "navbar navbar-expand navbar-light bg-light">
            <div className = "navbar-collapse row" id = "navbarNav">
            <Search handleSearchChange = {handleSearchChange}/>
            </div>
        </Navigate>
    );
}
export default Navigate;