import { configureStore } from "@reduxjs/toolkit";
import busReducer from './slices/busSlice.js';


export default configureStore({
    reducer:{
        bus: busReducer,
    }
})