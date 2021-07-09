import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addTodo, removeTodo, modifyTodo } from '../actions/index';

const Todo = () => {

    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();
    const todolist = useSelector((state)=> state.todoReducers.todolist);
    return (  
    <>
<html lang="en-us">
  <head>
    <meta charset="UTF-8" />
    <title>ToDo Redux</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </head>

  <body>
    <div class="container">
      <div class="jumbotron">
        <h1>Tasks to do</h1>
      </div>
      <div class="row">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Add a task" value={userInput} 
            onChange = {(event) => setUserInput(event.target.value)}></input>
            <button type="button" class="btn btn-dark m-2" onClick={()=> dispatch(addTodo(userInput), setUserInput(""))}><i className="fa fa-plus add-btn"></i></button>
        </div>
    </div>
    <ul class="list-group m-2">
          {
            todolist.map((todo)=>{
                return (<li class="list-group-item">
                    <button type="button" class="btn btn-dark m-2" onClick={()=> dispatch(removeTodo(todo.userInput))}>
                    <i className="fa fa-trash add-btn"></i>
                    </button> 
                    <button type="button" class="btn btn-dark m-2" onClick={()=> dispatch(modifyTodo(todo.userInput))}>
                    <i className="fa fa-edit add-btn"></i>
                    </button> 
                    {todo.userInput.userInput}</li>)
              })
          }
        </ul>
  </div>
  </body>
</html>

    </>
  )
}

export default Todo