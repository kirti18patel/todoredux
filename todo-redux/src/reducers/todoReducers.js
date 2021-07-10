const data = {
    todolist : JSON.parse(localStorage.getItem("todos"))??[]
}

const todoReducers = (state = data, action)=>{
    switch (action.type){
        case "ADDTODO": 
            const { userInput: addUserInput }= action.payload;
            const updatedState = {todolist:[...state.todolist, addUserInput]}
            localStorage.setItem("todos", JSON.stringify(updatedState.todolist));
            return updatedState
        case "REMOVETODO": 
            const { i:idx }=action.payload; 
            const newTodolist = state.todolist.filter((_, index) => index !== idx);
            localStorage.setItem("todos", JSON.stringify(newTodolist));
            return {
                ...state, 
                todolist : newTodolist
            }
        case "MODIFYTODO": 
            const {userInput: modifyUserInput, i }=action.payload;
            const newTodos = state.todolist.map((todo, index) => i === index ? modifyUserInput : todo);
            console.log(newTodos, modifyUserInput, i );
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return {
                todolist : newTodos
            }   

        default: 
            return state;
        }  
    }

export default todoReducers;