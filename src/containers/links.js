import React from 'react';

import Pagination from '../components/Pagination';
import LinksTable from '../components/LinksTable';
import {CFG_HTTP} from '../cfg/cfg_http';
import {UtilsApi} from '../utils/utils_api';
import {connect} from 'react-redux';
import {LINKS_LOADED} from '../actions/links.actions';
import {CHANGE_PAGE} from '../actions/links.actions';
import {CHANGE_MAXPAGE} from '../actions/links.actions';

class LinksContainerStub extends React.Component {
    handlePageChange = (pageNumber) => {
        // this.fetchLinks(this.state.searchPhrase, pageNumber);
        const changePageAction = {
            type: CHANGE_PAGE,
            payload: pageNumber
        };

        this.props.dispatch(changePageAction);

    };

    fetchLinks = (searchPhrase = '', currentPage = 0) => {
        let sendData = {page: currentPage};

        if (searchPhrase) {
            sendData.search = searchPhrase;
        }

        UtilsApi
            .get(CFG_HTTP.URL_LINKS, sendData)
            .then((links) => {
                const action = {
                    type: LINKS_LOADED,
                    payload: links.items
                };
                const changeMaxPageAction = {
                    type: CHANGE_MAXPAGE,
                    payload: links.maxPage
                };
                this.props.dispatch(action);
                this.props.dispatch(changeMaxPageAction);
            });
    };
    deleteButton = (id) => {
        let sendData = {id: id, page: this.props.state.curr.currentP};
        UtilsApi
            .get(CFG_HTTP.URL_DEL, sendData)
            .then((links) => {
                const action = {
                    type: LINKS_LOADED,
                    payload: links.items
                };
                this.props.dispatch(action);
            });

    };



    componentWillReceiveProps(nextProps) {

        if (nextProps.state.curr.currentP !== this.props.state.curr.currentP) {
            this.fetchLinks('',nextProps.state.curr.currentP);
        }

    }

    componentWillMount() {
        this.fetchLinks();
    }


    render() {
        return (
            <React.Fragment>

                <Pagination currentPage={this.props.state.curr.currentP}
                            pagesLimit={this.props.state.curr.maxPage}
                            onPageChange={this.handlePageChange}/>
                <div className="wrapper"><a href="/addLink">
                    <button>Add Link</button>
                </a></div>
                <LinksTable links={this.props.state.linksa} callback={this.deleteButton}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

const LinksContainer = connect(mapStateToProps)(LinksContainerStub);

export default LinksContainer;
