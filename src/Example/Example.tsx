import { Provider, useDispatch, useSelector } from 'react-redux';
import { Button, Input, Select } from 'antd';
import {setColumns, setItems , setItemModal, setColumnModal } from './ExampleSlice';
import { Column, Item } from './ExampleSlice';
import AddColumn from '../TodoListRedux/AddColumn/AddColumn';
import AddItem from '../TodoListRedux/AddItem/AddItem';
import ColumnComp from '../TodoListRedux/Column';
import ColumnModal from '../TodoListRedux/ColumnModal';
import ItemModal from '../TodoListRedux/ItemModal';
import store from './store';

export default () => {
    return (
        <Provider store={store}>
            <Level0 />
        </Provider>
    );
};

const Level0 = () => {
    const dispatch = useDispatch();
   // const itemModal = useSelector((state: any) => state.example.itemModal);
   // const items = useSelector((state: any) => state.example.items);
   // const columnModal = useSelector((state: any) => state.example.columnModal);
   // const columns = useSelector((state: any) => state.example.columns);

    const itemModal = useSelector((state: Item|undefined) => state);
    const items = useSelector((state: Item[]) => state);
    const columnModal = useSelector((state: Column|undefined) => state);
    const columns = useSelector((state: Column[]) => state);

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnClickNewColumn = (newColumnName: string) => {
        const newColumn = {
            value: randomId(),
            label: newColumnName,
        };

        dispatch( setColumns([...columns, newColumn]));
    };

    const handleOnClickNewItem = (
        newItemName: string,
        newItemColumn: string
    ) => {
        const newItem = {
            id: randomId(),
            label: newItemName,
            columnId: newItemColumn,
        };

        dispatch( setItems([...items, newItem]));
    };

    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId }) => columnId === columnIdSelected);
    };

    const handleOnDeleteItem = (idToRemove: string) => {
        dispatch(setItems(items.filter(({ id }) => id !== idToRemove)));
    };

    const handleOnDeleteColumn = (idToRemove: string) => {
       dispatch( setColumns(columns.filter(({ value }) => value !== idToRemove)));
       dispatch( setItems(items.filter(({ columnId }) => columnId !== idToRemove)));
    };

    const handleOnEditItem = (idItem: string) => {
        const item = items.find(({ id }) => id === idItem);

        if (item) {
            dispatch(setItemModal(item));
        }
    };

    const handleOnEditColumn = (idColumn: string) => {
        const column = columns.find(({ value }) => value === idColumn);

        if (column) {
            dispatch(setColumnModal(column));
        }
    };

    const handleOnCloseItem = () => {
        setItemModal(undefined);
    };

    const handleOnCloseColumn = () => {
        setColumnModal(undefined);
    };

    const handleOnSaveItem = (newItem: Item) => {
        dispatch(  setItems(
            items.map((item) => (item.id === newItem.id ? newItem : item))
        ));
        handleOnCloseItem();
    };

    const handleOnSaveColumn = (newColumn: Column) => {
       dispatch( setColumns(
            columns.map((column) =>
                column.value === newColumn.value ? newColumn : column
            )
        ));
        handleOnCloseColumn();
    };

  

    return    <div className="todo-list-edit">
                <AddColumn onClickNewColumn={handleOnClickNewColumn} />
                <AddItem onClickNewItem={handleOnClickNewItem} columns={columns} />

                <div className="todo-list-edit-columns">
                    {columns.map(({ value, label }) => {
                        const columnItems = getColumnItems(value);

                        return (
                            <ColumnComp
                                value={value}
                                label={label}
                                columnItems={columnItems}
                                onDeleteItem={handleOnDeleteItem}
                                onEditItem={handleOnEditItem}
                                onEditColumn={handleOnEditColumn}
                                onDeleteColumn={handleOnDeleteColumn}
                            />
                        );
                    })}
                </div>

                <ItemModal
                    item={itemModal}
                    onCloseItem={handleOnCloseItem}
                    onSaveItem={handleOnSaveItem}
                    columns={columns}
                />

                <ColumnModal
                    column={columnModal}
                    onCloseColumn={handleOnCloseColumn}
                    onSaveColumn={handleOnSaveColumn}
                />
            </div>
   ;
};


