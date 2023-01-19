import Item from 'antd/es/list/Item';
import React, { useState } from 'react';

const TodoListBasic = () => {

    const [item, setItem ] = useState();
    const [state, setState ] = useState();

    const handleAdd = () =>
    console.log("hello");

    const handleChange = (event:any) =>
    setState(event.target.value);


    return (<div>
        
            <input type="text" name="item" />

            <label>
                <select value={state} onChange={handleChange}>
                    <option value="To do">To do</option>
                    <option value="In progress">In progress</option>
                    <option value="Done">Done</option>
                </select>
            </label>

            <button type="button" onClick={handleAdd}>
                Add to list
            </button>
        
        </div>
    
    );
};

export default TodoListBasic;
