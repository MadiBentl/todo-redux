import React from 'react';

export const addTodo = (task) => {
  return {
    type: "ADD_TODO",
    payload: task
  }
}

export const completeTodo = (task) => {
  return {
    type: "COMPLETE_TODO",
    payload: task
  }
}