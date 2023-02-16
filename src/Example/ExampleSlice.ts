import { createSlice } from '@reduxjs/toolkit';
import { Column } from '../TodoListRedux/TodoListRedux';


interface Item {
    id: string;
    columnId: string;
    label: string;
}

interface AddItemInterface {
    onClickNewItem(newItemName: string, newItemColumn: string): void;
    columns: Column[];
}

export const AddItem = createSlice({
    name: 'example',
    initialState: {
        label: 'MOrgan',
        columnId : '',
        newItemName : '',
        newItemColumn : ''
        
    },

    reducers: {
       setLabel : ( state:{label:string}, action : {payload : string}) => {
        state.label = action.payload;
       },
       
       setColumnId : ( state:{columnId:string}, action : {payload : string}) => {
        state.columnId = action.payload;
       },

       setNewItemName : ( state:{newItemName:string}, action : {payload : string}) => {
        state.newItemName = action.payload;
       },

       newItemColumn : ( state:{newItemColumn:string}, action : {payload : string}) => {
        state. newItemColumn = action.payload;
       },

    },
});

export const { setLabel , setColumnId, setNewItemName , newItemColumn} = AddItem.actions;

export default AddItem.reducer;
