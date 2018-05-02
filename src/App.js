import React from 'react';
import '../node_modules/material-icons/iconfont/material-icons.css';
import './App.css';
import Home from './components/Home';
import Unshort from './components/Unshort';
import AddLink from './components/AddLink';
import EditLink from './components/EditLink';
import './styles/styles.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducers from './reducers';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        {/*<Route exact path="/redir" component={Home}/>*/}
                        <Route exact path="/:shortlink" component={Unshort}/>
                        <Route exact path="/addLink" component={AddLink}/>
                        <Route exact path="/editLink/:id" component={EditLink}/>
                    </div>
                </Router>
            </Provider>
        )
            ;
    }
}

export default App;

