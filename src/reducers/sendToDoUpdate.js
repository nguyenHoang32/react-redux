import * as Actions from '../constants/ActionTypes';
const initialState = {
    content: '',
    status: 'Chưa hoàn thành',
    id: undefined
};
const toDoUpdateReducer = (state = initialState, action) => {
    switch(action.type){
        case Actions.SEND_TODO_UPDATE: {
            return action.todo;
        }
        default: return state;
    }
}
export default toDoUpdateReducer;