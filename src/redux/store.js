import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';

// import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,

    // contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
