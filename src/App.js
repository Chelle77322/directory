import React from 'react';
import Content from "./components/Content";
import Container from "./components/Container";
import Banner from "./components/Banner";
import "./App.css";
import "./styles/Style.css";

function App(){
    return(
        <div className="app">
            <Container>
                <Banner/>
                <Content />
            </Container>
        </div>
    );
}
export default App;
