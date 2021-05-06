import React , {Component} from 'react';
import DataTable from "./DataTable";
import Navigate from "./Navigate";
import Api from "../utils/Api";
export default class DataArea extends Component{
    state = {
        users: [{}],
        order: "ascend",
        filteredUsers: [{}]
    }
    headings = [
        {name: "image", width: "12%"},
        {name: "name", width: "12%"},
        {name: "dob", width: "12%"},
        {name: "email", width: "32%"},
        {name:"phone", width: "20%"}
    ]
    handleSort = heading =>{
        if(this.state.order === "ascend")
        {
            this.setState({
                order: "descend"
            })
        } else{
            this.setState({
                order: "ascend"
            })
        }
        const compareFnc = (a, b) => 
        {
            if(this.state.order === "descend")
            {
                if (a[heading] === undefined)
                {
                    return 1;
                } else if (b[heading] === undefined)
                {
                    return -1;
                }
                else if (heading === "name")
                {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            }       
        }
        const sortedUsers = this.state.filteredUsers.sort(compareFnc);
        this.setState({filteredUsers: sortedUsers});
    }
    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({filteredUsers: filteredList});
    }
    componentDidMount(){
        Api.getUsers().then(results =>{
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }
    render () {
        return (
            <>
            <Navigate handleSearchChange={this.handleSearchChange} />
            <div className="data-area">
                <DataTable headings = {this.headings}
                users ={this.state.filteredUsers}
                handleSort={this.handleSort}
                />
            </div>
            </>
        );
    }
}