import Item from 'antd/es/list/Item';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import { List, Typography, Select, Space,  Mentions , Button } from 'antd';
import './TodoListWithDesignCss.css';

interface Item {
    id: string;
    label: string;
}

interface Column {
    id: string;
    label: string;
    items: Item[];
}

const columns : Column[]= [{id:'1', label:'test', items: [{id:'1', label:'testItem'}]}]

const TodoListWithDesign = () => {
    const [item, setItem ] = useState('');
    const [collum, setCollum ] = useState('');
    const [state, setState ] = useState('toDo');

    
    const [toDo, setToDo ] = useState<string[]>(['Manger']);
    const [inProgress, setInProgress ] = useState<string[]>(['Dormir', 'Faire du sport']);
    const [done, setDone ] = useState<string[]>(['Sortir le chien']);
    
    const [select, setSelect] =  [
    {id:'1', label:'ToDo', items: [{id:'1', label:'Manger'}]}, 
    {id:'2', label:'inProgress', item: [{id:'1', label:'Dormir'}, {id:'2', label:'Fair du sport'}]} ,
    {id:'3', label:'done', item: [{id:'1', label:'Sortir le chien'}]}
    ];

    const [mainList, setMainList]= useState<string[][]>([toDo, inProgress, done]);

    const handleAdd = () => {
        
        
        switch(state) {
            case '1' :
                setToDo(toDo.concat(item)); break;
            case '2' :
                setInProgress(inProgress.concat(item)); break;
            case '3':
                setDone(done.concat(item)); break;
          }
          
    }
   

    const handleAddCollum = () => {
        
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
                key = {select.id}
                options={[
                    { value: select.id, label: select.label }
                ]}
            />
        
           
            <Button onClick={handleAdd} className='listBtn'>Add to list</Button>
            </Space>

            <br></br>

            <Space align='start'>

             
            </Space>   
        
        </div>
    
    );
};
export default TodoListWithDesign;
