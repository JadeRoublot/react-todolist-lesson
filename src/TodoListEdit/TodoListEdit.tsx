import React, { useState } from 'react';
import { Button, Input, List, Select, Modal } from 'antd';
import './TodoListEdit.css';
import { CloseOutlined , EditOutlined} from '@ant-design/icons';

import  AddColumn from './AddColumn';
import  AddItem from './AddItem';
import  ColumnTsx from './Column';
import  ColumnModal from './ColumnModal';
import  ItemModal from './ItemModal';

interface Column {
    value: string;
    label: string;
}

interface Item {
    id: string;
    columnId: string;
    label: string;
}

const TodoListEdit = () => {
    const [columns, setColumns] = useState<Column[]>([]);
    const [items, setItems] = useState<Item[]>([]);
    const [itemModal, setItemModal] = useState<Item[]>();
    const [columnModal, setColumnModal] = useState<Column[]>();

    const [newItemName, setNewItemName] = useState<string>('');
    const [newColumnName, setColumnName] = useState<string>();
    const [newItemColumn, setNewItemColumn] = useState<string>();

    const [isModalItemOpen, setIsModalItemOpen] = useState(false);
    const [isModalColumnOpen, setIsModalColumnOpen] = useState(false);
    const [previousText, setPreviousText] = useState('');
    const [modalText, setModalText] = useState('Content of the modal');
    const [modalSelect, setModalSelect] = useState('Content of the modal');


    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnColumnNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setColumnName(e.target.value);
    };

    const handleOnCategoryChange = (newValue: string) => {
        setNewItemColumn(newValue);
    };

    const handleOnClickNewColumn = () => {
        if (newColumnName) {
            const newColumn = {
                value: randomId(),
                label: newColumnName,
            };

            setColumns([...columns, newColumn]);
            setColumnName(undefined);
        }
    };

    const handleOnClickNewItem = () => {
        if (newItemColumn) {
            const newItem = {
                id: randomId(),
                label: newItemName,
                columnId: newItemColumn,
            };

            setItems([...items, newItem]);

            setNewItemName('');
            setNewItemColumn(undefined);
        }
    };

    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId }) => columnId === columnIdSelected);
    };

    const handleOnDeleteItem = (idToRemove: string) => {
        setItems(items.filter(({ id }) => id !== idToRemove));
    };

    const handleOnDeleteColumn = (LabelToRemove: string) => {

       // const valueId = columns.filter(({label}) => LabelToRemove)[0].value;

        //setItems(items.filter(({ columnId }) => columnId !== valueId));
        setColumns(columns.filter(({label}) => label !== LabelToRemove));
       
    };


    const handleModalItem = (idToChange: string , LabelSelect: string, columnIdSelected: string) => {
       
       const columnItems = columns.filter(({ value}) =>  value === columnIdSelected)[0].label;
       setPreviousText(idToChange);
       setModalText(LabelSelect);
       setModalSelect(columnItems);
       setIsModalItemOpen(true);
    };

    const handleModalColumn = (LabelSelect: string) => {
        setPreviousText(LabelSelect);
        setModalText(LabelSelect);
        setIsModalColumnOpen(true);
    };


    const  handleChangModalText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModalText(e.target.value);
    };

    const handleChangModalSelect = ( newValue: string) => {
        setModalSelect(newValue);
    };


     const handleOkColumn = () => {
        const colSel = columns.filter(({label}) => label === previousText)[0].label = modalText;
        setColumns(columns.filter(({label}) => label = colSel));
       
        setIsModalColumnOpen(false);
      };

      const handleOkItem = () => {

       
        var colSel : string;

        if (columns.filter(({label}) => label === modalSelect).length === 0) {

           colSel = columns.filter(({value}) =>  value === modalSelect)[0].value;
          
             
        }else {
            colSel = columns.filter(({label}) => label === modalSelect)[0].value;
          
        }
        
        const itemTextChange = items.filter(({ id }) => id === previousText)[0].label = modalText;
        setItems(items.filter(({ id }) => id = itemTextChange));

        const itemColChange = items.filter(({ id }) => id === previousText)[0].columnId = colSel;
        setItems(items.filter(({ id }) => id = itemColChange));
     
        setIsModalItemOpen(false);
      
      };
    
    
      const handleCancel = () => {
        setIsModalItemOpen(false);
        setIsModalColumnOpen(false);
      };

   

    return (
        <div className="todo-list-with-design">
            <div className="todo-list-with-design-add-column">
                <Input
                    placeholder="Column name"
                    onChange={handleOnColumnNameChange}
                    value={newColumnName}
                />

                <Button
                    disabled={!newColumnName?.length}
                    onClick={handleOnClickNewColumn}
                >
                    Add column
                </Button>
            </div>

            <div className="todo-list-with-design-add-item">
                <Input
                    placeholder="Item name"
                    onChange={handleOnItemNameChange}
                    value={newItemName}
                />

                <Select
                    placeholder="Select column"
                    onChange={handleOnCategoryChange}
                    value={newItemColumn}
                    options={columns}
                />

                <Button
                    disabled={!newItemName?.length || !newItemColumn}
                    onClick={handleOnClickNewItem}
                >
                    Add Item
                </Button>
            </div>

            <div className="todo-list-with-design-columns">
                {columns.map(({ value, label }) => {
                    const columnItems = getColumnItems(value);

                    return (
                        <List
                            className="todo-list-with-design-column"
                            key={value}
                            header={<div>
                                {label}

                                <Button
                                        type="primary"
                                        
                                        size="small"
                                        icon={<EditOutlined />}
                                        onClick={() => handleModalColumn(label)}
                                    />

                                <Button
                                    type="primary"
                                    danger
                                    size="small"
                                    icon={<CloseOutlined />}
                                    onClick={() => handleOnDeleteColumn(label)}
                                />

                                </div>}
                            dataSource={columnItems}
                            renderItem={({ columnId, label, id }) => (
                                <List.Item className="todo-list-with-design-item">
                                    {label}

                                    <div>
                                        <Button
                                            type="primary"
                                            
                                            size="small"
                                            icon={<EditOutlined />}
                                            onClick={() => handleModalItem(id, label, columnId)}
                                        />

                                        <Button
                                            type="primary"
                                            danger
                                            size="small"
                                            icon={<CloseOutlined />}
                                            onClick={() => handleOnDeleteItem(id)}
                                        />
                                    </div>

                                </List.Item>
                            )}
                        />
                    );
                })}
            </div>

            <Modal title="Column edition" open={isModalColumnOpen} onOk={handleOkColumn} onCancel={handleCancel}>
                <Input
                        placeholder= {modalText}
                        onChange={handleChangModalText}
                        value={modalText}
                    />
            </Modal>

            <Modal title="Item edition" open={isModalItemOpen} onOk={handleOkItem} onCancel={handleCancel}>
                <Input
                        placeholder={modalText}
                        onChange={handleChangModalText}
                        value={modalText}
                    />

                <Select
                    placeholder="Select column"
                    onChange={handleChangModalSelect}
                    value={modalSelect}
                    options={columns}
                />

            </Modal>
            
        </div>
    );
};

export default TodoListEdit;
