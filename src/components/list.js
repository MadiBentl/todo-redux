import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
  render() {
    return (
      <div>
        <h3>List</h3>
        <p>List Length: 0</p>
        <p>Items Finished: 0</p>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {list: state.list}
};

//sending the state to props
export default connect(mapStateToProps)(List);
