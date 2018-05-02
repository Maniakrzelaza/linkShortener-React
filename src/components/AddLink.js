import Loadable from 'react-loadable';
import React from 'react';

import '../../node_modules/material-icons/iconfont/material-icons.css';
import '../App.css';

const Loading = () => <div>Loading...</div>;
const AddLinksPage = Loadable({
    loader: () => import('../containers/addLink'),
    loading: Loading
});

class AddLinks extends React.Component {
    render() {
        return <AddLinksPage />;
    }
}

export default AddLinks;