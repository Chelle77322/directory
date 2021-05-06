import React from 'react';
import Content from "./components/Content";
import Container from "./components/Container";
import Banner from "./components/Banner";
import Search from "./components/Search"

function App(){
    return(
        <div className="App">
            <Container>
                <Banner/>
                <Search/>
                <Content />
            </Container>
        </div>
    );
}
export default App;
