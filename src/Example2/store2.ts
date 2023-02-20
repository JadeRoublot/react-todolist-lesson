import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './ExampleSlice2';

export default configureStore({
    reducer: {
        example: exampleReducer,
    },
});
