import { combineReducers } from 'redux';
import todosReducer from './todos';
import formReducer from './form';
import toDoUpdateReducer from './sendToDoUpdate';
const myReducers = combineReducers({
    todos: todosReducer,
    isDisplayForm: formReducer,
    sendToDoUpdate: toDoUpdateReducer
})
export default myReducers;