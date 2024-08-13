
const configureStore = require('@reduxjs/toolkit').configureStore
const { coreModule } = require('@reduxjs/toolkit/query')
const cakeReducer = require('./features/cake/cakeSlice')

  store = configureStore({
    reducer: {
        cake:cakeReducer
    }
})

module.exports = store
