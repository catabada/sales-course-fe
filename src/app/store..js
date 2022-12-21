import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from '~/redux/category/categorySlice';
import { authReducer } from '~/redux/auth/authSlice';
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
import { userReducer } from '~/redux/user/userSlice';
import { courseReducer } from "~/redux/course/courseSlice";
import { lecturerReducer } from "~/redux/lecturer/lecturerSlice";
import { chapterReducer } from "~/redux/chapter/chapterSlice";
import { lessonReducer } from "~/redux/lesson/lessonSlice";
import { wishlistReducer } from "~/redux/wishlist/wishlistSlice";
import { cartReducer } from "~/redux/cart/cartSlice";
import { feedbackReducer } from "~/redux/feedback/feedbackSlice";
import { discussReducer } from "~/redux/discuss/discussSlice";
import { myCourseReducer } from '~/redux/my-course/myCourseSlice';
import { orderReducer } from '~/redux/order/orderSlice';
import { AUTH_LOGOUT } from '~/redux/auth/authType';
import { statisticReducer } from '~/redux/statistics/statisticSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer', 'myCourseReducer', 'cartReducer']
}

const rootReducer = combineReducers({
    categoryReducer: categoryReducer,
    authReducer: authReducer,
    userReducer: userReducer,
    courseReducer: courseReducer,
    lecturerReducer: lecturerReducer,
    chapterReducer: chapterReducer,
    lessonReducer: lessonReducer,
    wishlistReducer: wishlistReducer,
    cartReducer: cartReducer,
    feedbackReducer: feedbackReducer,
    discussReducer: discussReducer,
    myCourseReducer: myCourseReducer,
    orderReducer: orderReducer,
    statisticReducer: statisticReducer
})

const appReducer = (state, action) => {
    if (action.type === AUTH_LOGOUT + '/fulfilled') {
        return rootReducer(undefined, action)
    }

    return rootReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});


export const persistor = persistStore(store);


