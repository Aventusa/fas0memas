import React from 'react'
import Header from './components/header/Header';
import Generator from './components/pages/generator/Generator';
import Footer from './components/footer/Footer';

function App() {

    return (
        <div className="App">
            <Header/>
            <Generator />
            <Footer />
        </div>
    )
}

export default App;
