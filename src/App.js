import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Generator from './components/pages/generator/Generator';
import Footer from './components/footer/Footer';
import About from './components/pages/about/About';

function App() {

    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/'>
                        <Generator/>
                    </Route>
                    <Route exact path='/about'>
                        <About/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

export default App;
