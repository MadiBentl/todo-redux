import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component {

  render(){
    let handleSubmit = (e) =>{
      e.preventDefault();
      this.props.addTodo({
        task:this.refs.todoField.value,
        status: "Incomplete"
      })
    }

    return(
      <div className="ui action input">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Search..." id="todoField" ref="todoField"/>
        <div className="ui button">Search</div>
        </form>
      </div>
    );
  }
};
const mapStateToProps = (state) =>{
  return {list: state.list}
};

//sending the state to props
export default connect(mapStateToProps, {addTodo})(AddTodo);
