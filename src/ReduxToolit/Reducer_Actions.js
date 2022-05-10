import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: { name: "savindu pasintha", age: "", email: "" },
        enableNavigationNames: { signin: "", signup: "", home: "", about: "", search: "", more: "" }
    },
    reducers: {
        valueAction: (state, action) => { state.value = action.payload },
        enableNavigationNamesAction: (state, action) => { state.enableNavigationNames = action.payload },
    }
})


export const { valueAction, enableNavigationNamesAction } = userSlice.actions;
export default userSlice.reducer;