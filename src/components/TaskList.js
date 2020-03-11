import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends React.Component{
    render(){
        const 
        {
            todos,
            
        } = this.props;
        
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo,index) => (
                            <TaskItem
                            key={todo.id}
                            todo={todo}
                            index={index}
                           
                            />
                        ))}
                    </tbody>
                        
                </table>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(TaskList);