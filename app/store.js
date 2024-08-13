
const configureStore = require('@reduxjs/toolkit').configureStore
const { coreModule } = require('@reduxjs/toolkit/query')
const cakeReducer = require('./features/cake/cakeSlice')
const iceCreamReducer = require('./features/icecream/icecreamSlice')

  store = configureStore({
    reducer: {
        cake:cakeReducer,
        icecream:iceCreamReducer
        
    }
})

module.exports = store
