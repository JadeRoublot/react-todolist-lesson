import Item from 'antd/es/list/Item';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import { Divider, List, Typography, Select, Space } from 'antd';

const TodoListWithDesign = () => {
    const [item, setItem ] = useState('');
    const [state, setState ] = useState('toDo');

    const [toDo, setToDo ] = useState<string[]>(['Faire a manger' , 'Sortir le chien']);
    const [inProgress, setInProgress ] = useState<string[]>(['Donner cours']);
    const [done, setDone ] = useState<string[]>(['Dormir']);

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
    

    const handleChangeState = (value: string) => {
        setState(value);
    }
    


    return (<div>
        
            <input type="text" name="item" value={item} onChange={handleChangeItem}/>

           
            <Select
                defaultValue={state}
                style={{ width: 120 }}
                onChange={handleChangeState}
                allowClear
                options={[
                    { value: 'toDo', label: 'To do' },
                    { value: 'inProgress', label: 'In progress' },
                    { value: 'done', label: 'Done' },
                ]}
                />

            <button type="button" onClick={handleAdd}>
                Add to list
            </button>  
                <h5>To Do</h5>
                    <List
                        dataSource={toDo}
                        renderItem={(item) => (
                            <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                    <h5>In Progress</h5>
                    <List
                       
                        dataSource={inProgress}
                        renderItem={(item) => (
                            <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            </List.Item>
                        )}
                    />

                    <h5>Done</h5>
                    <List
                        
                        dataSource={done}
                        renderItem={(item) => (
                            <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                      
        
        </div>
    
    );
};
export default TodoListWithDesign;
