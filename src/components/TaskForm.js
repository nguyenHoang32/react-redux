import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
class TaskForm extends React.Component{
    state = {
        input: '',
        status: 'Hoàn thành',
        id: undefined
    }
    setDefaultState = () => {
        this.setState({
            input: '',
            status: 'Chưa hoàn thành',
            id: undefined
        })
    }
    componentDidMount = () => {
        const toDoUpdate = this.props.toDoUpdate;
        if(toDoUpdate){
            this.setState({
                input: toDoUpdate.content,
                status: toDoUpdate.status,
                id: toDoUpdate.id
            })
        }  
    }
    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if(nextProps.toDoUpdate){
            this.setState({
                input: nextProps.toDoUpdate.content,
                status: nextProps.toDoUpdate.status,
                id: nextProps.toDoUpdate.id
            })
        }else{
            this.setState({
                    input: '',
                    status: 'Chưa hoàn thành',
                    id: undefined
            })
        }
        
    }
    
    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        const newToDo = {
            content: this.state.input,
            status: this.state.status,
            id: this.state.id
        }
        // this.props.onSubmit(newToDo);

        this.props.addToDo(newToDo);
        this.setDefaultState();
        this.props.onCloseForm();
    }
    render(){
        const 
        {
            input,
            status
        } = this.state;
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <span>{this.props.toDoUpdate ? 'Cập nhật' : 'Thêm'}</span>
                    <input 
                    type='text' 
                    placeholder='Thêm công việc mới.....' 
                    value={input}
                    onChange={this.onChange}
                    name='input'
                    />      
                    <select 
                    onChange={this.onChange}
                    value={status}
                    name='status'>
                        <option value="Hoàn thành">Hoàn thành</option>
                        <option value="Chưa hoàn thành">Chưa hoàn thành</option>
                    </select>
                    <button type='submit'>
                        Thêm công việc
                    </button>
                    <button 
                    type='button'
                    onClick={this.props.onCloseForm}
                    >X</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        toDoUpdate : state.sendToDoUpdate
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        addToDo: (todo) => {
            dispatch(Actions.addToDo(todo));
        },
        onCloseForm: () => {
            dispatch(Actions.onCloseForm())
        }
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(TaskForm);