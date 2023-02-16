import { createSlice } from '@reduxjs/toolkit';

interface Item {
    id: string;
    columnId: string;
    label: string;
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        label: 'MOrgan',
    },
    reducers: {
       setLabel : ( state:{label:string}, action : {payload : string}) => {
        state.label = action.payload;
       }
    },
});

export const { setLabel } = exampleSlice.actions;

export default exampleSlice.reducer;
