import {CHANGE_PAGE} from '../actions/links.actions';
import {CHANGE_MAXPAGE} from '../actions/links.actions';

const curr = (state = {currentP: 0, maxPage:1}, action) => {

    if (action.type === CHANGE_PAGE) {
        return {...state,currentP: action.payload}
    }
    if (action.type === CHANGE_MAXPAGE) {
        return {...state,maxPage: action.payload}
    }
    console.log(state);
    return state;
};

export default curr;
