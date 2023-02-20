import { Provider, useDispatch, useSelector } from 'react-redux';
import { Button, Input, Select } from 'antd';
import {} from './ExampleSlice';
import { Column, Item } from '../TodoListRedux/TodoListRedux';
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
    const itemModal = useSelector((state: any) => state.example.itemModal);
    const items = useSelector((state: any) => state.example.items);
    const columnModal = useSelector((state: any) => state.example.columnModal);
    const columns = useSelector((state: any) => state.example.columns);

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnClickNewColumn = (newColumnName: string) => {
       
    };

    const handleOnClickNewItem = (
        newItemName: string,
        newItemColumn: string
    ) => {
       
    };

    const getColumnItems = (columnIdSelected: string) => {
       
    };

    const handleOnDeleteItem = (idToRemove: string) => {
       
    };

    const handleOnDeleteColumn = (idToRemove: string) => {
      
    };

    const handleOnEditItem = (idItem: string) => {
       
    };

    const handleOnEditColumn = (idColumn: string) => {
        
    };

    const handleOnCloseItem = () => {
       
    };

    const handleOnCloseColumn = () => {
        
    };

    const handleOnSaveItem = (newItem: Item) => {
       
        handleOnCloseItem();
    };

    const handleOnSaveColumn = (newColumn: Column) => {
      
        handleOnCloseColumn();
    };

  

    return   <div className="todo-list-edit">
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


