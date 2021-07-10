import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addTodo, removeTodo, modifyTodo } from '../actions';

const Todo = () => {

    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();
    const todolist = useSelector((state)=> state.todoReducers.todolist);
    const [editable, setEditable] = useState(-1);

    const [editingTodo, setEditingTodo] = useState('');
    return (  
    <>
      <div className="container">
      <div className="jumbotron">
        <h1>Tasks to do</h1>
      </div>
      <div className="row">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add a task" value={userInput} 
            onChange = {(event) => setUserInput(event.target.value)}></input>
            <button type="button" className="btn btn-dark m-2" onClick={()=> dispatch(addTodo(userInput), setUserInput(""))}><i className="fa fa-plus add-btn"></i></button>
        </div>
    </div>
    <ul className="list-group m-2">
        {
            todolist.map((todo, i)=>{
                return (<li className="list-group-item">
                    <button type="button" className="btn btn-dark m-2" onClick={()=> dispatch(removeTodo(i))}>
                      <i className="fa fa-trash add-btn"></i>
                    </button>
                    
                    <button type="button" className="btn btn-dark m-2" onClick={()=> {
                        setEditable(editable === i ? -1 : i);
                        setEditingTodo(todo);
                        dispatch(modifyTodo(editingTodo, i))}}> 
                        {editable === i ? (
                          <i className="fa fa-check add-btn" ></i>
                        ) : (
                          <i className="fa fa-edit add-btn"></i>
                        )}
                    </button> 
                    <input defaultValue={todo} disabled={ editable !== i } onChange={e => setEditingTodo(e.target.value)}></input>
                    </li>
                    )
                    
            })
        }
    </ul>
    </div>
    </>
  )
}

export default Todo