import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../actions';
import Item from './Item';

class List extends Component {
  render() {
    const items = [];
    const itemsNotDone = [];

    this.props.list.forEach(item =>{
      items.push(
        <div className="field" key={item.task}>
          <div className="ui checkbox">
            <input
              type="checkbox"
              name={item.task}
              id = {item.id}
              onClick={()=>this.props.completeTodo(item)}/>
            <label>{item.task}</label>
          </div>
        </div>
      );
      if (item.status == "Incomplete"){
        itemsNotDone.push(item);
      }
    });
    return (
      <div className="column">
        <div className="">
          <h3>List</h3>
          {items}
        </div>
        <p>Items To Do: {itemsNotDone.length}/{items.length}</p>
        <p>Items Finished: {items.length - itemsNotDone.length}/{items.length}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {list: state.list}
};

//sending the state to props
export default connect(mapStateToProps, {completeTodo})(List);
