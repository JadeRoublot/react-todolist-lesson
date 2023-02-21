import { createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import AddColumn from '../TodoListRedux/AddColumn/AddColumn';
import AddItem from '../TodoListRedux/AddItem/AddItem';
import ColumnComp from '../TodoListRedux/Column';
import ColumnModal from '../TodoListRedux/ColumnModal';
import ItemModal from '../TodoListRedux/ItemModal';

export interface Column {
    value: string;
    label: string;
}

export interface Item {
    id: string;
    columnId: string;
    label: string;
}

export const Add = createSlice({
    name: 'example',
    initialState: {
        columns : <Column[]>[],
        items : <Item[]>[],
        itemModal : <Item><unknown>(undefined),
        columnModal : <Column><unknown>(undefined),
       
        
    },

    reducers: {

        setColumns : ( state:{ columns : Column[]}, action : {payload : Column[]}) => {
            state.columns = action.payload;
           },

        setItems : ( state:{ items : Item[]}, action : {payload : Item[]}) => {
            state.items = action.payload;
            },

        setItemModal : ( state:{ itemModal : Item | undefined }, action : {payload : Item | undefined}) => {
                state.itemModal = action.payload;
            },

        setColumnModal : ( state:{ columnModal : Column | undefined }, action : {payload : Column | undefined}) => {
                state.columnModal = action.payload;
            },
       }

    },
);

export const {setColumns, setItems , setItemModal, setColumnModal} = Add.actions;

export default Add.reducer;
