// import styling
import "./Modal.scss";

// import components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export default function BasicModal({ open, handleClose, title, videoPath }) {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal__box">
                    <Typography id="modal-modal-title" variant="h6" component="h2" className="modal__title">
                        {title}
                    </Typography>
                    <video controls width="100%">
                        <source src={videoPath} type="video/mp4" />
                    </video>
                    <Button onClick={handleClose} className="modal__close-btn">Close</Button>
                </Box>
            </Modal>
        </div>
    );
};