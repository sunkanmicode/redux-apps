import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: '', age:0, email:''}

const userSlice = createSlice({
    name:"users",
    initialState:{ value: initialState},
    reducers:{
        login: (state, action)=>{
            state.value = action.payload
        },
        logout:(state) =>{
            state.value = initialState
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer