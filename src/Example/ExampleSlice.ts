import { createSlice } from '@reduxjs/toolkit';
import { Column, Item } from '../TodoListRedux/TodoListRedux';



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
       

       onClickNewItem : ( state:{newItemName:string , newItemColumn:string}, action : {payload : {newItemName:string , newItemColumn:string}}) => {
        const randomId  = (Math.random() + 1).toString(36).substring(7);

        const newItem = {
            id: randomId,
            label: state.newItemName,
            columnId: state.newItemColumn,
        };

        setItems([...items, newItem]);
       }

    },
});

export const { setNewItemName , setNewItemColumn, onClickNewItem} = AddItem.actions;

export default AddItem.reducer;
