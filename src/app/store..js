import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {categoryReducer} from '~/redux/category/categorySlice';
import {authReducer} from '~/redux/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import {userReducer} from '~/redux/user/userSlice';
import {courseReducer} from "~/redux/course/courseSlice";
import {lecturerReducer} from "~/redux/lecturer/lecturerSlice";
import {chapterReducer} from "~/redux/chapter/chapterSlice";
import {lessonReducer} from "~/redux/lesson/lessonSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer']
}

const rootReducer = combineReducers({
    categoryReducer: categoryReducer,
    authReducer: authReducer,
    userReducer: userReducer,
    courseReducer: courseReducer,
    lecturerReducer: lecturerReducer,
    chapterReducer: chapterReducer,
    lessonReducer: lessonReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);


