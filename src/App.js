import React from 'react';
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import "./styles/Style.css";

function App(){
    return(
        <div className="app">
            <Wrapper>
                <Header />
                <Main />
            </Wrapper>
        </div>
    );
}
export default App;
