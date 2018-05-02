import {LINKS_LOADED} from '../actions/links.actions';
// import {CHANGE_PAGE} from '../actions/links.actions';

const linksa = (state = [], action) => {
    // switch (action.type) {
    //     case LINKS_LOADED:
    //         return [...action.payload];
    //
    //     case CHANGE_PAGE:
    //         return [...action.payload];
    //
    //     default:
    //         return state;
    // }

    if (action.type === LINKS_LOADED) {
        return [...action.payload];
    }
    // console.log(state);
    return state;
};

export default linksa;
