import { Tab, Tabs, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import TabPanel from '../Tabs/TabPanel'
import Todo from './Todo/Todo'
import TodoForm from './TodoForm'

function ListAllTodos({ todos, setTodos }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [isEditing, setIsEditing] = useState(false)
    const [selected, setSelected] = useState({})
    const handleActions = (name, todo) => {
        const updatedTodos = todos.map(item => {
            if (item.id == todo.id) {
                item[name] = new Date().toISOString()
            }
            return item
        })
        setTodos(updatedTodos)
    }

    const handleEdit = (e, todo) => {
        setIsEditing(true)
        setSelected(todo)
    }
    const handleSubmit = (e) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id == e.id) {
                todo = e
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <>
            <Container sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="All" id={0} />
                        <Tab label="Archived" id={1} />
                        <Tab label="Finished" id={2} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {todos.length > 0 ? todos.map((todo) =>
                        todo.finishedAt === null && todo.archivedAt === null &&
                        <Todo
                            todo={todo}
                            key={todo.id}
                            handleArchive={handleActions}
                            handleChecked={handleActions}
                            handleEdit={handleEdit}
                        />) : null}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {todos.length > 0 ? todos.map((todo) =>
                        todo.archivedAt != null && <Todo
                            todo={todo}
                            key={todo.id}
                            handleArchive={handleActions}
                            handleChecked={handleActions}
                            handleEdit={handleEdit}
                        />) : null}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {todos.length > 0 ? todos.map((todo) =>
                        todo.finishedAt != null && <Todo
                            todo={todo}
                            key={todo.id}
                            handleArchive={handleActions}
                            handleChecked={handleActions}
                            handleEdit={handleEdit}
                        />) : null}
                </TabPanel>
            </Container>
            <Modal handleClose={() => setIsEditing(false)} open={isEditing}

            >
                <Typography variant='h3'>
                    Edit Your Todo
                </Typography>
                <TodoForm
                    handleSubmit={handleSubmit}
                    data={selected}
                />
            </Modal>
        </>

    )
}

export default ListAllTodos