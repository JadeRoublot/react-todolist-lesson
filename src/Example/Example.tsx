import { Provider, useDispatch, useSelector } from 'react-redux';
import { Button, Input, Select } from 'antd';
import { setLabel , setColumnId, setNewItemName , newItemColumn} from './ExampleSlice';
import store from './store';

export default () => {
    return (
        <Provider store={store}>
            <Level0 />
            <Display />
        </Provider>
    );
};

const Display = () => {
    const label = useSelector((state: any) => state.example.label);

    return <div>{label}</div>;
};

const Level0 = () => {
    return <Level1 />;
};

const Level1 = () => {
    return <Level2 />;
};

const Level2 = () => {
    return <Level3 />;
};

const Level3 = () => {
    const dispatch = useDispatch();
    const label = useSelector((state: any) => state.example.label);

    const handleOnItemNameChange = (e: any) => {
        dispatch(setLabel(e.target.value));
    };

    const handleOnCategoryChange = (newValue: string) => {
        dispatch(setColumnId(newValue));
    };

    return   <div className="todo-list-edit-add-item">
            <Input
                placeholder="Item name"
                onChange={handleOnItemNameChange}
                value={label}
            />

        </div>
   ;
};
