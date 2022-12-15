import { Box, IconButton, Typography } from '@mui/material'
import ArchiveIcon from '@mui/icons-material/Archive';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

const rawStyles = {
    borderRadius: 3,
    p: 3,
    background: '#c1c1c126'
}
export default function Todo({ todo, handleArchive, handleChecked, handleEdit }) {

    return (

        <Box display={'flex'}
            justifyContent='space-between'
            sx={rawStyles}
        >
            <Box>
                <Typography>
                    {todo.title}
                </Typography>
                <Typography variant='caption'
                    color={'GrayText'}
                >
                    {todo.createdAt}
                </Typography>
            </Box>
            <Box>
                <IconButton color='warning' onClick={(e) => handleArchive('archivedAt', todo)}>
                    <ArchiveIcon />
                </IconButton>
                <IconButton color='success' onClick={(e) => handleChecked('finishedAt', todo)}>
                    <CheckIcon />
                </IconButton>
                <IconButton color='primary' onClick={(e) => handleEdit(e, todo)}>
                    <EditIcon />
                </IconButton>
            </Box>
        </Box>
    )
}
