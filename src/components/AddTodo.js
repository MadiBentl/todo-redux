import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component {
  render(){
    return(
      <div class="ui action input">
        <input type="text" placeholder="Search..." />
        <div class="ui button" onClick={() => this.props.addTodo({task:"Bake Carrot Muffins", status: "Incomplete" })}>Search</div>
      </div>
    );
  }
};
const mapStateToProps = (state) =>{
  return {list: state.list}
};

//sending the state to props
export default connect(mapStateToProps, {addTodo})(AddTodo);
