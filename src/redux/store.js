import { createStore,applyMiddleware } from "redux";
import authMiddleWare from "./middleware/auth";
import rootReducer from "./reducer";

export default createStore(rootReducer);
