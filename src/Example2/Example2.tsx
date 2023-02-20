import { Provider, useDispatch, useSelector } from 'react-redux';
import { Button, Input, Select } from 'antd';
import { setNewItemName , setNewItemColumn, onClickNewItem} from './ExampleSlice2';
import { Column, Item } from '../TodoListRedux/TodoListRedux';
import store from './store2';

export default () => {
    return (
        <Provider store={store}>
            <Level0 />
        </Provider>
    );
};

const Level0 = () => {
    const dispatch = useDispatch();
    const newItemName = useSelector((state: any) => state.example.newItemName);
    const newItemColumn = useSelector((state: any) => state.example.newItemColumn);
    const columns = useSelector((state: any) => state.example.columns);


    const handleOnItemNameChange = (e: any) => {
        dispatch(setNewItemName(e.target.value));
    };

    const handleOnCategoryChange = (newValue: string) => {
        dispatch(setNewItemColumn(newValue));
    };

    const handleOnClickNewItem = () => {
        dispatch(onClickNewItem({newItemName, newItemColumn}));

        dispatch( setNewItemName(''));
        dispatch( setNewItemColumn(''));
    };

    return   <div className="todo-list-edit-add-item">
            <Input
                placeholder="Item name"
                onChange={handleOnItemNameChange}
                value={newItemName}
            />

             <Select
                placeholder="Select column"
                onChange={handleOnCategoryChange}
                value={newItemColumn}
                options={columns}
            />

            <Button
                disabled={!newItemName?.length || !newItemColumn}
                onClick={handleOnClickNewItem}
            >
                Add Item
            </Button>

        </div>
   ;
};


