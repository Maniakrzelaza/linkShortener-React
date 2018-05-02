import React from 'react';

import Pagination from '../components/Pagination';
import LinksTable from '../components/LinksTable';
import {CFG_HTTP} from '../cfg/cfg_http';
import {UtilsApi} from '../utils/utils_api';
import Short from "../components/Short";

class AddLinksContainer extends React.Component {

    constructor() {
        super();

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let sendData = {longLink: this.state.value};
        UtilsApi
            .get(CFG_HTTP.URL_ADDLINK, sendData)
            .then(() => {
            });
        this.setState({
            value: ''
        });
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input style={{width: 500  }} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddLinksContainer;
