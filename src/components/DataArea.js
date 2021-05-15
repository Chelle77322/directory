import React, {useState, useEffect } from 'react';
import DataTable from "./DataTable";
import Navigate from "./Navigate";
import Api from "../utils/Api";
import "../styles/DataArea.css";

const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "descend",
        filteredUsers: [],
        headings : [
            {name: "Image", width:"10%", order: "descend"},
            {name: "name", width:"10%", order: "descend"},
            {name: "phone", width:"20%", order: "descend"},
            {name: "email", width:"20%", order: "descend"},
            {name: "dob", width:"10%", order: "descend"},
        ]
    });
    const handleSort = heading => {
        let currentOrder = developerState.headings.filter(elem => elem.name === heading)
        .map (elem => elem.order).toString();

        if (currentOrder === "descend"){
            currentOrder = "ascend"
        } else {
            currentOrder = "descend";
        }
        const compareFnc = (a,b) => {
            if (currentOrder === "ascend"){
                if(a[heading]=== undefined){
                    return 1;
                } else if (b[heading]=== undefined){
                    return -1;
                } else if (heading === "name"){
                    return a[heading].first.localeCompare(b[heading].first);
                } else if (heading === "dob"){
                    return a[heading].age - b[heading].age;
                } else {
                    return b[heading].localeCompare(a[heading]);
                }
                }
            };
        const sortedUsers = developerState.filteredUsers.sort(compareFnc);
        const updateHeadings = developerState.headings.map(elem => {
            elem.order = elem.name === heading ?
            currentOrder: elem.order;
            return elem
        });
        setDeveloperState({ ...developerState, filteredUsers: sortedUsers, headings: updateHeadings
        });
        };
    const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.name.first.toLowerCase() + "" + item.name.last.toLowerCase();
            console.log(filter, values)
            if (values.indexOf(filter.toLowerCase())!== -1){
                return item
            };
        });
        setDeveloperState({...developerState, filteredUsers: filteredList});
    };
    //For more information on useeffect go to https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
    useEffect(() =>{
        Api.getUsers().then(results => {
            console.log(results.data.results);
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    },[]);
    return (
        <DataArea.Provider value = {{ developerState, handleSearchChange, handleSort }}>
            <Navigate />
            <div className = "data-area">
            {developerState.filteredUsers.length > 0 ?
            <DataTable /> :<div></div>}
            </div>
        </DataArea.Provider>
    );
        
    };
export default DataArea;