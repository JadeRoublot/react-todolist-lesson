import Item from 'antd/es/list/Item';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import { List, Typography, Select, Space,  Mentions , Button } from 'antd';
import './TodoListWithDesignCss.css';

const TodoListWithDesign = () => {
    const [item, setItem ] = useState('');
    const [collum, setCollum ] = useState('');
    const [state, setState ] = useState('toDo');

    const [toDo, setToDo ] = useState<string[]>(['Manger']);
    const [inProgress, setInProgress ] = useState<string[]>(['Dormir', 'Faire du sport']);
    const [done, setDone ] = useState<string[]>(['Sortir le chien']);

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

    const handleAddCollum = () => {
        
        return <div><List
            header={<div>{collum}</div>}
           
        />
        </div>
    }
    
    const handleChangeCollum = (value: string) => {
        setCollum(value);
    }

    const handleChangeItem = (value: string) => {
        setItem(value);
    }
    

    const handleChangeState = (value: string) => {
        setState(value);
    }
    


    return (<div>

        <Space wrap className='try'>
            <Mentions
                autoSize
                className='column'
                onChange={handleChangeCollum}
            />

                
            <Button onClick={handleAddCollum} className='columnBtn' >Add column</Button>
        </Space>

        <br></br>

         <Space wrap>
            <Mentions
                autoSize
                className='item'
                onChange={handleChangeItem}
            />

            <Select
                defaultValue={state}
                className='selectState'
                onChange={handleChangeState}
                options={[
                    { value: 'toDo', label: 'To do' },
                    { value: 'inProgress', label: 'In progress' },
                    { value: 'done', label: 'Done' },
                ]}
            />
        
           
            <Button onClick={handleAdd} className='listBtn'>Add to list</Button>
            </Space>

            <br></br>

            <Space align='start'>

                    <List
                        header={<div>To Do</div>}
                        dataSource={toDo}
                        renderItem={(item) => (
                            <List.Item className="list">
                            <Typography.Text mark></Typography.Text> 
                            {item}
                            <Button type="primary" danger className='danger'>X</Button> </List.Item> 
                        )}
                    />
                    
                    <List
                        header={<div>In Progress</div>}
                        dataSource={inProgress}
                        renderItem={(item) => (
                            <List.Item className="list">
                            <Typography.Text mark></Typography.Text> 
                            {item}
                            <Button type="primary" danger className='danger'>X</Button> </List.Item> 
                        )}
                    />

                    <List
                         header={<div>Done</div>}
                        
                        dataSource={done}
                        renderItem={(item) => (
                            <List.Item className="list">
                                
                            <Typography.Text mark ></Typography.Text> 
                            
                            {item}
                            <Button type="primary" danger className='danger'>X</Button> </List.Item> 
                        )}
                    />
                    </Space>   
        
        </div>
    
    );
};
export default TodoListWithDesign;
