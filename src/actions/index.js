import React from 'react';

let nextId = 3;
export const addTodo = (task) => {
  return {
    type: "ADD_TODO",
    payload: {...task, id:nextId++}
  }
}

export const completeTodo = (task) => {
  return {
    type: "COMPLETE_TODO",
    payload: task
  }
}
