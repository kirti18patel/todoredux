const data = {
    todolist : []
}

const todoReducers = (state = data, action)=>{
    switch (action.type){
        case "ADDTODO": const userInput= action.payload;
            return {
                ...state, 
                todolist:[
                    ...state.todolist,
                    {
                        userInput:userInput
                    }
                ]
            }
        default: return state;
        }

    }

export default todoReducers;