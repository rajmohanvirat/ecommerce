import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reducer/card"

export default configureStore({
  reducer:{
    cart: cartReducer
  }
})