import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

// const sagaMiddleWare = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// sagaMiddleWare.run(rootSaga)

