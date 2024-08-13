const createSlice =  require('@reduxjs/toolkit').createSlice

const initialState = {
    numIcecreams: 20
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered :(state)=>{ state.numIcecreams--},
        restocked:(state,action)=>{ state.numIcecreams += action.payload}
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions