import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import { UserReducer } from './users/user.reducer';
import { ProfileReducer } from './profile/profile.reducer';
import { LeavesReducer } from './leaves/leaves.reducer';
import { BackgroundImageReducer } from './backgrouund/background.reducer';
import { AttendanceReducer } from './attendance/attendance.reducer';
import { locationReducer } from './location/location.reducer';

const allReducers = combineReducers({
    signin: UserReducer,
    employeeProfile: ProfileReducer,
    leaveStatus: LeavesReducer,
    backgroundImage: BackgroundImageReducer,
    attendance: AttendanceReducer,
    location: locationReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['signin', 'employeeProfile', 'leaveStatus', 'backgroundImage', 'attendance'],
    blacklist: ['location'],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export default store = createStore(
    persistedReducer,
    applyMiddleware(thunk));

export const persistedStore = persistStore(store);

