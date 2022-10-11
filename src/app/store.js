import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/slices/authSlice';
import dataReducer from '../features/data/slices/dataSlice';
import leftHeaderReducer from '../features/web/header/leftHeader/leftHeaderSlice';
import middleHeaderReducer from '../features/web/header/middleHeader/middleHeaderSlice';
import rightHeaderReducer from '../features/web/header/rightHeader/rightHeaderSlice';
import userReducer from '../features/web/header/user/userSlice';
import sidebarReducer from '../features/web/sidebar/sidebarSlice';
import webBodyReducer from '../features/web/webBody/webBodySlice';

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
      data: dataReducer,
      leftHeader: leftHeaderReducer,
      middleHeader: middleHeaderReducer,
      rightHeader: rightHeaderReducer,
      user: userReducer,
      sidebar: sidebarReducer,
      webBody: webBodyReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(apiSlice.middleware),
  });
};
