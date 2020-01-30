import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import ToDoList from './ToDoList';
import DoneList from './select';

var destination =document.querySelector(".cover");
var rBin =document.querySelector(".selected");

ReactDOM.render(
    
    <ToDoList />
,destination
);