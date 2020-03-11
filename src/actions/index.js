import * as Types from '../constants/ActionTypes';
export const addToDo = (todo) => {
    return{
        type: Types.ADD_TODO,
        todo // todo: todo
    }
}
export const deleteToDo = (id) => {
    return{
        type: Types.DELETE_TODO,
        id
    }
}
export const isDisplayForm = () => {
    return {
        type: Types.DISPLAY_FORM
    }
}
export const onShowForm = () => {
    return {
        type: Types.SHOW_FORM
    }
}
export const onCloseForm = () => {
    return{
        type: Types.CLOSE_FORM
    }
}
export const sendToDoUpdate = (todo) => {
    return{
        type: Types.SEND_TODO_UPDATE,
        todo
    }
}