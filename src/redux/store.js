import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlices";
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

