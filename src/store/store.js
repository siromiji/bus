import { configureStore } from "@reduxjs/toolkit";
import busReducer from './slices/busReducer.js';


export default configureStore({
    reducer:{
        bus: busReducer,
    }
})