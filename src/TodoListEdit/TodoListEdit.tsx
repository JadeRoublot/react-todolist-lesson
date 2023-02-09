import React, { useState } from 'react';
import { Button, Input, List, Select } from 'antd';
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

    const handleOnModifItem = (idToRemove: string) => {
       // setItems(items.filter(({ id }) => id !== idToRemove));
    };

    const handleOnModifColumn = (LabelToRemove: string) => {
        //setItems(items.filter(({ id }) => id !== idToRemove));
    };

    const handleOnDeleteColumn = (LabelToRemove: string) => {
       // setItems(items.filter(({ id }) => id !== idToRemove));
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
                                        onClick={() => handleOnModifColumn(label)}
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
                            renderItem={({ label, id }) => (
                                <List.Item className="todo-list-with-design-item">
                                    {label}

                                    <div>
                                        <Button
                                            type="primary"
                                            
                                            size="small"
                                            icon={<EditOutlined />}
                                            onClick={() => handleOnModifItem(id)}
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
        </div>
    );
};

export default TodoListEdit;
