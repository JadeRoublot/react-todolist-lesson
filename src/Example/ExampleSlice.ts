import { createSlice } from '@reduxjs/toolkit';
import { Column } from '../TodoListRedux/TodoListRedux';



interface AddItemInterface {
    onClickNewItem(newItemName: string, newItemColumn: string): void;
    columns: Column[];
}

export const AddItem = createSlice({
    name: 'example',
    initialState: {
        columns : [],
        newItemName : '',
        newItemColumn : ''
        
    },

    reducers: {

       setNewItemName : ( state:{newItemName:string}, action : {payload : string}) => {
        state.newItemName = action.payload;
       },

       setNewItemColumn : ( state:{newItemColumn:string}, action : {payload : string}) => {
        state. newItemColumn = action.payload;
       },

       onClickNewItem : ( ) => {
        
       }

    },
});

export const { setNewItemName , setNewItemColumn, onClickNewItem} = AddItem.actions;

export default AddItem.reducer;
