import React, { useContext } from "react";
import "../styles/Search.css";
import Context from "../utils/Context";

const Search = () =>{
const data = useContext(Context);
    return (
    <div className = "searchbox">
     <div className = "imput-group">
         <div className = "input-group-prepend"> <span className = "input-group-text"id = " ">Search</span>
     </div>
       
    <input className = "form-control mr-sm-2" type = "search" placeholder = "name" aria-label = "Search"
    onChange={e => data.handleSearchChange(e)}
    />
     </div>
     </div>
    );
}
export default Search;