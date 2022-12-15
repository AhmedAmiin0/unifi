import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useContext, useState } from 'react'
import Modal from '../Modal/Modal'
import TodoForm from './TodoForm'
import uniqueId from 'lodash.uniqueid'
import ListAllTodos from './ListAllTodos'
import { ModeContext } from '../Layout/Layout'

export default function Todos() {
  const [showCreateTodo, setShowCreateTodo] = useState(false)
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.createdAt = new Date().toISOString()
    e.id = uniqueId()
    setTodos([
      ...todos,
      e
    ])
    setShowCreateTodo(false)
  }
  return (
    <Box width={'100%'}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} my={5}>
      <Typography variant='h2'>
        My Todos 🤷‍♂️🤷‍♂️
      </Typography>

        <Button variant='contained' onClick={() => setShowCreateTodo(true)}>
          Create New Todo
        </Button>

        <Modal handleClose={() => setShowCreateTodo(false)} open={showCreateTodo}>
          <Typography variant='h3'>
            Create Your New Todo
          </Typography>
          <TodoForm
            handleSubmit={handleSubmit}
          />
        </Modal>
      </Box>

      <ListAllTodos todos={todos} setTodos={setTodos} />


    </Box>
  )
}







