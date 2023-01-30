import Item from 'antd/es/list/Item';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import { List, Typography, Select, Space,  Mentions , Button } from 'antd';
import './TodoListWithDesignCss.css';
import { isTemplateSpan } from 'typescript';
import { iteratorSymbol } from 'immer/dist/internal';

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
    const [state, setState ] = useState('. . .');

    
    const [toDo, setToDo ] = useState<string[]>(['Manger']);
    const [inProgress, setInProgress ] = useState<string[]>(['Dormir', 'Faire du sport']);
    const [done, setDone ] = useState<string[]>(['Sortir le chien']);
    
    const select =  [
    {id:'1', label:'ToDo', items: [{id:'1', label:'Manger'}]}, 
    {id:'2', label:'inProgress', item: [{id:'1', label:'Dormir'}, {id:'2', label:'Fair du sport'}]} ,
    {id:'3', label:'done', item: [{id:'1', label:'Sortir le chien'}]}
    ];

    const [mainList, setMainList]= useState<string[][]>([toDo, inProgress, done]);

    const handleAdd = () => {
        console.log (item);
        console.log (state);
        
        switch(state) {
            case '1' :
                console.log('case 1'); break;
            case '2' :
                console.log('case 2'); break;
            case '3':
                console.log('case 3'); break;
            case '. . .':
                console.log('case 4'); break;
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
                options={select.map((select) => ({ label: select.label, value: select.id }))}
                   
                
            />
        
           
            <Button onClick={handleAdd} className='listBtn'>Add to list</Button>
            </Space>

            <br></br>

            <Space align='start'>
            <List
                dataSource={select}
                renderItem={(select) => (
                    <List
                        header={select.label}
                        dataSource={select.items}
                        
                        renderItem={(items) => ( select.items?.map((item) => (
                            
                            <List.Item>
                            <Typography.Text mark></Typography.Text> { item.label}
                            </List.Item>
                            ))
                            
                        )}
                    />
                )}
                 />
             
            </Space>   
        
        </div>
    
    );
};
export default TodoListWithDesign;
