import React from 'react';
import {CFG_HTTP} from '../cfg/cfg_http';
import {UtilsApi} from '../utils/utils_api';

class Unshort extends React.Component {
    constructor() {
        super();

        this.state = {
            link: '',
            flag:0
        };
    }


    componentWillMount() {
        let sendData = {shortLink: this.props.match.params.shortlink};
        UtilsApi
            .get(CFG_HTTP.URL_GETLINK, sendData)
            .then((links) => {
                this.setState({
                    link: links.longLink,
                    flag:1
                });
            });


    }
    componentDidUpdate()
    {
        let l={ssh:this.state.link.toString()};
        console.log('nibylink',l);
        window.location.href = this.state.link;
    }
    render()
    {

        return <div>{this.state.link}</div>
    }



}

export default Unshort;