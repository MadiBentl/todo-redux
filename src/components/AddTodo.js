import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component {

  render(){
    let handleSubmit = () =>{
      this.props.addTodo({
        task:this.refs.todoField.value,
        status: "Incomplete"
      })
    }

    return(
      <div className="ui action input">
        <input type="text" placeholder="Search..." ref="todoField"/>
        <div className="ui button" onClick={() => handleSubmit()}>Search</div>
      </div>
    );
  }
};
const mapStateToProps = (state) =>{
  return {list: state.list}
};

//sending the state to props
export default connect(mapStateToProps, {addTodo})(AddTodo);
