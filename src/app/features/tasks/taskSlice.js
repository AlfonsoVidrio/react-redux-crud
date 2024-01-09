import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            return [...state, action.payload]
        },
        editTask: (state, action) => {
            const {id, title, description } = action.payload
            
            const foundTask = state.find(task => task.id === id)
            if(foundTask){
                foundTask.title = title
                foundTask.description = description
            }
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        }
        
    }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer