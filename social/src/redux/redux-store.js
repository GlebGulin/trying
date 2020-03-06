import {createStore, combineReducers} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogReducer from './dialog-reducer';
// import SidebarReducer from './sidebar-reducer';
//combine all reducers to one
let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagePage: DialogReducer
    // sidebarReducer: SidebarReducer
}); 
let store = createStore(reducers);
export default store;