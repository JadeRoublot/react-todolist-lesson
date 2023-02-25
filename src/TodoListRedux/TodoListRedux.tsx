import { Provider, useDispatch, useSelector } from 'react-redux';
import {setColumns, setItems , setItemModal, setColumnModal } from './TodoListReduxSlice';
import { Column, Item } from './TodoListReduxSlice';
import AddColumn from './AddColumn/AddColumn';
import AddItem from  './AddItem';
import ColumnComp from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';
import store from './store';
import './TodoListRedux.css';
export default () => {
    return (
        <Provider store={store}>
            <Level0 />
        </Provider>
    );
};

const Level0 = () => {
    const dispatch = useDispatch();
    const itemModal = useSelector((state: any) => state.todolist.itemModal);
    const items = useSelector((state: any) => state.todolist.items);
    const columnModal = useSelector((state: any) => state.todolist.columnModal);
   const columns = useSelector((state: any) => state.todolist.columns);

    //const itemModal = useSelector((state: Item|undefined) => state);
   // const items = useSelector((state: Item[]) => state);
   // const columnModal = useSelector((state: Column|undefined) => state);
  //  const columns = useSelector((state: Column[]) => state);

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
       dispatch( setItemModal(undefined));
    };

    const handleOnCloseColumn = () => {
        dispatch(setColumnModal(undefined));
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

