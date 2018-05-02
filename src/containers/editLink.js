import React from 'react';

import {CFG_HTTP} from '../cfg/cfg_http';
import {UtilsApi} from '../utils/utils_api';
import { Redirect } from 'react-router-dom';
import WaitForIt from 'react-wait-for-it';
class EditLinksContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            value: '',
            redirect: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    componentDidMount()
    {
        let sendData2 = {id: this.props.id};
        UtilsApi
            .get(CFG_HTTP.URL_GETONELINK, sendData2)
            .then((links) => {
                this.setState({
                    value: links.longLink
                });
            });
    }
    setRedirect=()=>{
        this.setState({
            redirect:true
        })
    };

    renderRedirect=()=>{
        if(this.state.redirect){
            return <Redirect to='/'></Redirect>
        }
    };
    handleSubmit(event) {
        event.preventDefault();
        let sendData = {id: this.props.id,longLink:this.state.value};
        UtilsApi
            .get(CFG_HTTP.URL_EDITLINK, sendData).then(()=>{
            this.setState({
                redirect:true
            })
        });
        console.log(sendData);

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
                {this.state.redirect && (
                    <Redirect to={'/redir'}/>
                )}
            </form>
        );
    }
}

export default EditLinksContainer;
