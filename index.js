//npm install @reduxjs/toolkit

const icecreamActions = require('./app/features/icecream/icecreamSlice').icecreamActions
const store = require('./app/store')
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions


console.log(store.getState())
const unSubscribe = store.subscribe(()=>{
    console.log('updated state ',store.getState())
})




store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered(3))
unSubscribe()