import rootReducer from "./reducers";
const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
    reducer:rootReducer,
})
export default store;