import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});
export default store;

/**
 * import {createSlice}
 *
 * const appslice=createSlice({
 * name:"app"
 * initialStata:{
 * ismenuOpen:true
 * },
 * reducers:{
 * togglemenu:(state,action)=>{
 * state.ismenuopen=!state.ismenuopen;},
 * }}
 * );
 * export const {togglemenu}=appslice.actions;
 * export default appslice.reducer;
 */
