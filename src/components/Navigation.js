import React from 'react';
import SearchBox from "./SearchBox.js";
import "../styles/Navigation.css";

function Navigate ({ handleSearchChange}){
    return (
        <Navigate className = "navbar navbar-expand navbar-light bg-light">
            <div className = "navbar-collapse row" id = "navbarNav">
            <SearchBox handleSearchChange = {handleSearchChange}/>
            </div>
        </Navigate>
    );
}
export default Navigate;