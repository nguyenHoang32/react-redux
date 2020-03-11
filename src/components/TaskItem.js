import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/index';
class TaskItem extends React.Component{
    deleteToDoInChild = () => {
        this.props.onCloseForm();
        this.props.deleteToDo(this.props.todo.id);
    }
    updateToDoInChild = () => {
        this.props.onShowForm();
        this.props.sendToDoUpdate(this.props.todo);
        // this.props.updateToDo(this.props.todo)
    }
    render(){
        const
        {
            todo,
            index,
        } = this.props;
        return(
                <tr>
                                <td>{index + 1}</td>
                                <td>{todo.content}</td>
                                <td>{todo.status}</td>
                                <td>
                                <button
                                onClick={this.updateToDoInChild}
                                >Chỉnh sửa</button>
                                <button 
                                onClick={this.deleteToDoInChild}>Xóa</button>
                                </td>
                </tr>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        deleteToDo: (id) => {
            dispatch(Actions.deleteToDo(id))
        },
        onShowForm: () => {
            dispatch(Actions.onShowForm())
        },
        onCloseForm: () => {
            dispatch(Actions.onCloseForm())
        },
        sendToDoUpdate : (todoUpdate) => {
            dispatch(Actions.sendToDoUpdate(todoUpdate))
        }
    }
}
export default connect(null, mapDispatchToProps)(TaskItem);