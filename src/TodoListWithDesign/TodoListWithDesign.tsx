import Item from 'antd/es/list/Item';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import { List, Typography, Select, Space,  Mentions  } from 'antd';

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
    
    

    const handleChangeItem = (value: string) => {
        setItem(value);
    }
    

    const handleChangeState = (value: string) => {
        setState(value);
    }
    


    return (<div>
         <Space wrap>
            <Mentions
                autoSize
                style={{ width: '100%' }}
             
                onChange={handleChangeItem}
            />

            <Select
                defaultValue={state}
                style={{ width: 120 }}
                onChange={handleChangeState}
                options={[
                    { value: 'toDo', label: 'To do' },
                    { value: 'inProgress', label: 'In progress' },
                    { value: 'done', label: 'Done' },
                ]}
            />
        </Space>
            <button type="button" onClick={handleAdd}>
                Add to list
            </button> 


            <Space wrap>

                    <List
                        header={<div>To Do</div>}
                        dataSource={toDo}
                        renderItem={(item) => (
                            <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                    
                    <List
                        header={<div>In Progress</div>}
                        dataSource={inProgress}
                        renderItem={(item) => (
                            <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            </List.Item>
                        )}
                    />

                    <List
                         header={<div>Done</div>}
                        dataSource={done}
                        renderItem={(item) => (
                            <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                    </Space>   
        
        </div>
    
    );
};
export default TodoListWithDesign;
