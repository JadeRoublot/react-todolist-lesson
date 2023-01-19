import Item from 'antd/es/list/Item';
import React, { useState } from 'react';

const TodoListBasic = () => {

    const [item, setItem ] = useState();
    const [state, setState ] = useState();

    const [toDo, setToDo ] = useState();
    const [inProgress, setInProgress ] = useState();
    const [done, setDone ] = useState();

    const handleAdd = () =>
    console.log(item , state);

    const handleChangeItem = (event:any) =>
    setItem(event.target.value);

    const handleChangeState = (event:any) =>
    setState(event.target.value);


    return (<div>
        
            <input type="text" name="item" value={item} onChange={handleChangeItem}/>

            <label>
                <select value={state} onChange={handleChangeState}>
                    <option value="toDo">To do</option>
                    <option value="inProgress">In progress</option>
                    <option value="done">Done</option>
                </select>
            </label>

            <button type="button" onClick={handleAdd}>
                Add to list
            </button>
        
        </div>
    
    );
};

export default TodoListBasic;
