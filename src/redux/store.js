import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import { UserReducer } from './users/user.reducer';
import { ProfileReducer } from './profile/profile.reducer';
import { LeavesReducer } from './leaves/leaves.reducer';

const allReducers = combineReducers({
    signin: UserReducer,
    employeeProfile: ProfileReducer,
    leaveStatus: LeavesReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['signin', 'employeeProfile', 'leaveStatus'],
    blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export default store = createStore(
    persistedReducer,
    applyMiddleware(thunk));

export const persistedStore = persistStore(store);

