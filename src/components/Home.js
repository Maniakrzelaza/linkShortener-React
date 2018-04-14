import Loadable from 'react-loadable';
import React from 'react';

import '../../node_modules/material-icons/iconfont/material-icons.css';
import '../App.css';

const Loading = () => <div>Loading...</div>;
const LinksPage = Loadable({
    loader: () => import('../containers/links'),
    loading: Loading
});

class Home extends React.Component {
    render() {
        return <LinksPage />;
    }
}

export default Home;