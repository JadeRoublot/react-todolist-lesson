import Item from 'antd/es/list/Item';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import './TodoListBasicCss.css';

const TodoListBasic = () => {
   
    const [item, setItem ] = useState('');
    const [state, setState ] = useState('toDo');

    const [toDo, setToDo ] = useState<string[]>(['a' , 'b']);
    const [inProgress, setInProgress ] = useState<string[]>(['c' , 'd']);
    const [done, setDone ] = useState<string[]>(['e' , 'f']);

    const handleAdd = () => {
        switch(state) {
            case 'toDo' :
                setToDo(toDo.concat(item)); break;
            case 'inProgress' :
                setInProgress(inProgress.concat(item)); break;
            case 'done':
                setDone(done.concat(item)); break;
          }
    }
    
    

    const handleChangeItem = (event:any) => {
        setItem(event.target.value);
    }
    

    const handleChangeState = (event:any) => {
        setState(event.target.value);
    }
    


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

            <table>
                <thead>
                    <tr>
                        <th> To do </th>
                        <th> In progress </th>
                        <th> Done </th>
                    </tr>
                
                </thead>
                <tbody>
                    <tr>
                        <td> 
                            <ul>
                            {toDo.map((item) => (
                                <li>{item}</li>
                            ))}
                            </ul>
                        </td>

                        <td> 
                            <ul>
                            {inProgress.map((item) => (
                                <li>{item}</li>
                            ))}
                            </ul>
                        </td>

                        <td> 
                            <ul>
                            {done.map((item) => (
                                <li>{item}</li>
                            ))}
                            </ul>
                        </td>

                    </tr>
                </tbody>
            </table>
        
        </div>
    
    );
};

export default TodoListBasic;
