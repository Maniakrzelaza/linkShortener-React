import Loadable from 'react-loadable';
import React from 'react';

import '../../node_modules/material-icons/iconfont/material-icons.css';
import '../App.css';

const Loading = () => <div>Loading...</div>;
const EditLinksPage = Loadable({
    loader: () => import('../containers/editLink'),
    loading: Loading
});

class EditLinks extends React.Component {
    render() {

        return <EditLinksPage id={this.props.match.params.id}/>;
    }
}

export default EditLinks;