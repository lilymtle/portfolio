// import styling
import "./Modal.scss";

// import library
import classNames from "classnames";

// import components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

// import type
import { ReactNode } from "react";

interface ModalProps {
    open: boolean;
    handleClose: () => void;
    modalClassName?: string;
    title: string;
    children: ReactNode;
}

const BasicModal = ({ open, handleClose, modalClassName, title, children }: ModalProps): JSX.Element => {

    return (
        <div className="modal">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classNames("modal__box", modalClassName)}>
                    <div className="modal__wrapper">
                        <Typography id="modal-modal-title" variant="h6" component="h2" className="modal__title">
                            {title}
                        </Typography>
                        <Button onClick={handleClose} className="modal__close-btn"><CloseIcon /></Button>
                    </div>
                    {children}
                </Box>
            </Modal>
        </div>
    );
};

export default BasicModal;