import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
  render() {
    const items = [];
    this.props.list.forEach(item =>{
      items.push(
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" key={item.task} name={item.task} />
            <label>{item.task}</label>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h3>List</h3>
        {items}
        <p>Total Items: {items.length}</p>
        <p>Items To Do: 0 </p>
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
