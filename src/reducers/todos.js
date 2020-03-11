import * as Types from '../constants/ActionTypes';
const generateId = () => {
    return Math.floor(10000 * Math.random());
}
const initialState = []; //todos
const toDosReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.ADD_TODO: {
            const newToDo = {...action.todo};
            
            if(newToDo.id){
                const index = state.findIndex(todo => todo.id === newToDo.id);
                state.splice(index, 1, newToDo);
                return [...state];
            }
            else{
                newToDo.id = generateId();
                return [...state, newToDo];
            }
            
        }
        case Types.DELETE_TODO: {
            const id = action.id;
            const index = state.findIndex(todo => todo.id === id);
            const todos = [...state];
            todos.splice(index, 1);
            return [...todos];
        }
        default: return state;
    }
}
export default toDosReducer;
