import { Modal, Typography, Box } from "@mui/material"
import { bgcolor } from "@mui/system";

import { CustomModalData } from "../../types/modal.custom"

import './modal.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    height: '40vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: '#D9D9D9',
    boxShadow: 24,
    borderRadius: '20px',
    p: '1vw 1vh',
    backgroundFilter: 'blur(3px)'
};

export const CustomModal = ({open, onClose, data}: CustomModalData) => {
    const handleClickClose = () => {
        onClose()
    }

    return (
        <div className="HAHA">
            <Modal
                open={open}
                onClose={handleClickClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" align="center" sx={{wordWrap: "break-word", marginBottom: "5vh"}}>
                        {data.skincareType}
                    </Typography>
                    <Typography variant="h5" align="center" sx={{wordWrap: "break-word"}}>
                        {data.skincareName}
                    </Typography>
                    <Typography variant="h5" fontWeight={700} align="center" sx={{wordWrap: "break-word"}}>
                        by {data.skincareBrand}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}