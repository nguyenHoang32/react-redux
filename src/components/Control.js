import React from 'react';
import * as Actions from '../actions/index';
import { connect } from 'react-redux';
class Control extends React.Component{
    state = { 
        searchValue : ''
    }
    onClick = () => {
        this.props.onShowForm()
        // this.props.deleteToDoUpdateInState()
    }
    onChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }
    render(){
        return(
            <div>
                <button
                onClick={this.onClick}
                >Thêm</button>
            <input
            type='text'
            placeholder='Tìm kiếm.....'
            />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
      isDisplayForm: () => {
        dispatch(Actions.isDisplayForm())
      },
      onShowForm: () => {
          dispatch(Actions.onShowForm())
      },
    }
  }
export default connect(null, mapDispatchToProps)(Control);