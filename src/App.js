import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
class App extends React.Component {
  render(){
    return(
      <div className="App">
        <div className="left">
            {this.props.isDisplayForm && <TaskForm 
            />}
        </div>
        <div className={this.props.isDisplayForm ? "right" : "center"}>
            <Control 
            deleteToDoUpdateInState={this.deleteToDoUpdateInState}
            />
            <TaskList 
            deleteToDo={this.deleteToDo}
            updateToDo={this.updateToDo}
            />
        </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    isDisplayForm : state.isDisplayForm
  }
}
export default connect(mapStateToProps, null)(App);

