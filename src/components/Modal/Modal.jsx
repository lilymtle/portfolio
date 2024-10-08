// import styling
import "./Modal.scss";

// import components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function BasicModal({ open, handleClose, title, imagePath, imageAlt, videoPath }) {

    return (
        <div className="modal">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal__box">
                    <div className="modal__wrapper">
                        <Typography id="modal-modal-title" variant="h6" component="h2" className="modal__title">
                            {title}
                        </Typography>
                        <Button onClick={handleClose} className="modal__close-btn"><CloseIcon /></Button>
                    </div>

                    {videoPath ? (
                        <video controls width="100%">
                            <source src={videoPath} type="video/mp4" />
                        </video>
                    ) : (
                        <img
                            className="modal__img"
                            src={imagePath}
                            alt={imageAlt} />
                    )}
                </Box>
            </Modal>
        </div>
    );
};