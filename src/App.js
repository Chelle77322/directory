import React, {useState} from 'react';
import {Row, Col} from 'reactstrap';
import Search from "./components/Search";
import Banner from "./components/Banner";
import DataTable from "./components/DataTable";
import {Container} from "./styles/Container.css";
import Api from './utils/Api';


const App = () => {
    const [data, setData] = useState({
        employees: Api
    })
    const {employees} = data

    const handleChange = (e) => {
        e.preventDefault();
        const searchInput = e.target.value.toLowerCase();
        let newemployees = [];
        if (searchInput !== " "){
            newemployees = Api.filter(employee => {
                return (
                    searchInput === employee.name.first.toLowerCase().slice(0, searchInput.length)
                )
            })
        } else {
            newemployees = Api;
        }
        setData ({employees:newemployees})

        }
        const handleOnClick = () =>{
            setData({ employees: employees.sort(sortByName)})
        }
        function sortByName( a , b){
        const nameA = a.name.first.toLowerCase();
        const nameB = b.name.first.toLowerCase();

        let comparison = 0;
        if (nameA > nameB){
            comparison = 1;
        } else if (nameA < nameB){
            comparison = -1;
        }
        return comparison
        }
        return (
            <Container>
                <Row>
                    <Col>
                    <Banner></Banner>
                    </Col>
                </Row>
            <Row>
                <Col sm = "12" md= {{size: 6, offset: 3}}>
                <Search handleChange = {handleChange}>

                </Search>
                </Col>
            </Row>
            <Row>
                <Col>
                <DataTable employees = {employees} onClick = {handleOnClick}></DataTable>
                </Col>
            </Row>
            </Container>
        );
    }
export default App;
