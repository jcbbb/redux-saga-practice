import React from 'react';
import Nav from './components/nav/Nav';
import Container from './containers/Container';
import './App.css';

function App() {
    return (
        <div className="app">
            <Nav />
            <div className="app__wrapper">
                <Container />
            </div>
        </div>
    );
}

export default App;
