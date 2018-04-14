
import React from 'react';
import '../node_modules/material-icons/iconfont/material-icons.css';
import './App.css';
import Home from './components/Home';
import Unshort from './components/Unshort';
import './styles/styles.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:shortlink" component={Unshort} />
                </div>
            </Router>
        );
    }
}

export default App;

