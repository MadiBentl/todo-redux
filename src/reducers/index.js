import {combineReducers} from 'redux';

const defaultState = [
  {task: "Clean Kitchen", id: 0, status: "Incomplete"},
  {task: "Water Plants", id: 1, status: "Incomplete"}
];

const listReducer = (list = null, action) => {
  if (action.type == "ADD_TODO"){
    return [...list, action.payload];
  }
  else if (action.type == "COMPLETE_TODO"){
    const newList = [...list]
    const taskIndex = newList.findIndex(obj => obj.task == action.payload.task);
    newList[taskIndex].status = "Complete";
    return newList;
  }
  else{
    return defaultState;
  }
}
export default combineReducers({list:listReducer});
