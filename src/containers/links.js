import React from 'react';

import Pagination from '../components/Pagination';
import LinksTable from '../components/LinksTable';
import {CFG_HTTP} from '../cfg/cfg_http';
import {UtilsApi} from '../utils/utils_api';
import Short from "../components/Short";

class LinksContainer extends React.Component {
    handlePageChange = (pageNumber) => {
        this.fetchLinks(this.state.searchPhrase, pageNumber);
    };

    fetchLinks = (searchPhrase = '', currentPage = 0) => {
        let sendData = {page: currentPage};

        if (searchPhrase) {
            sendData.search = searchPhrase;
        }

        UtilsApi
            .get(CFG_HTTP.URL_LINKS, sendData)
            .then((links) => {
                this.setState({
                    links: links.items,
                    searchPhrase,
                    pagesLimit: links.maxPage,
                    currentPage: links.currentPage
                });
            });
    };
    deleteButton = (id) => {
        let sendData = {id: id, page: this.state.currentPage};


        UtilsApi
            .get(CFG_HTTP.URL_DEL, sendData)
            .then((links) => {
                this.setState({
                    links: links.items,
                    pagesLimit: links.maxPage,
                    currentPage: links.currentPage
                });
            });

    };

    componentDidMount() {
        this.fetchLinks();
    }
    handleInput=(longLink)=>
    {
        let sendData = {longLink: longLink, page: this.state.currentPage};


        UtilsApi
            .get(CFG_HTTP.URL_ADDLINK, sendData)
            .then((links) => {
                this.setState({
                    links: links.items,
                    pagesLimit: links.maxPage,
                    currentPage: links.currentPage
                });
            });

    };
    constructor() {
        super();

        this.state = {
            links: [],
            searchPhrase: '',
            pagesLimit: 0,
            currentPage: 1
        };
    }

    render() {
        return (
            <React.Fragment>

                <Pagination currentPage={this.state.currentPage}
                            pagesLimit={this.state.pagesLimit}
                            onPageChange={this.handlePageChange}/>
                <Short onUse={this.handleInput}/>
                <LinksTable links={this.state.links} callback={this.deleteButton}/>
            </React.Fragment>
        );
    }
}

export default LinksContainer;
