import React from 'react';

import {CFG_HTTP} from '../cfg/cfg_http';
import {UtilsApi} from '../utils/utils_api';

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
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input style={{width: 500}} type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>

                <div><a href="/">
                    <button>Return</button>
                </a></div>
            </div>
        );
    }
}

export default AddLinksContainer;
