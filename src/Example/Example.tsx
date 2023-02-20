import { Provider, useDispatch, useSelector } from 'react-redux';
import { Button, Input, Select } from 'antd';
import {} from './ExampleSlice';
import { Column, Item } from '../TodoListRedux/TodoListRedux';
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


  

    return   <div className="todo-list-edit-add-item">
            
        </div>
   ;
};


