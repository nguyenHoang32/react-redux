import * as Types from '../constants/ActionTypes';
const initialState = false;
const formReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.DISPLAY_FORM:{
            return !state;
        }
        case Types.SHOW_FORM:{
            return true;
        }
        case Types.CLOSE_FORM:{
            return false;
        }
        default: return state;
    }
}
export default formReducer;