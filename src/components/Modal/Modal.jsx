import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        sm: '100%',
        xs: '100%',
        md: 700
    },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Modal({
    children,
    open = false,
    handleClose
}) {

    return (
        <>
            <MuiModal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {children}
                    </Box>
                </Fade>
            </MuiModal>
        </>
    )
}
