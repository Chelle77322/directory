import React from 'react';
import Container from './components/Container';
import Wrapped from './components/Wrapped';
import Banner from './components/Banner';

import './App.css';

function App() {
    return (
        <div className ="App">
        <Wrapped>
            <Banner />
            <Container />
        </Wrapped>
        </div>
    );
}
export default App;
