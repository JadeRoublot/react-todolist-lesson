import { Provider, useDispatch, useSelector } from 'react-redux';
import { setLabel } from './ExampleSlice';
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

    const handleOnChange = (e: any) => {
        dispatch(setLabel(e.target.value));
    };

    return <input value={label} onChange={handleOnChange} />;
};
