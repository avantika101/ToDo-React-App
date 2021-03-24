import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({items}) {
    return items.map((item) => (
      <ToDoItem key={item.id} {...item} />
    ))
  }