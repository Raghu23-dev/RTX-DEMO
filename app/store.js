
const configureStore = require('@reduxjs/toolkit').configureStore
const { coreModule } = require('@reduxjs/toolkit/query')
const cakeReducer = require('./features/cake/cakeSlice')
const iceCreamReducer = require('./features/icecream/icecreamSlice')
const reduxlogger=require('redux-logger')

const logger = reduxlogger.createLogger();
  store = configureStore({
    reducer: {
        cake:cakeReducer,
        icecream:iceCreamReducer
        
    },
    middleware: (getdefaultMiddleware)=>getdefaultMiddleware().concat(logger),
})

module.exports = store
