import { ButtonGroup, Button, Box } from '@mui/material';
import { useEditor } from '../hooks/editor';
import CanvasPreviewModal from './CanvasPreviewModal';
import { useState } from 'react';

const FinalActionBar = () =>{
    const {editor} = useEditor();
    const [openModal, setOpenModal] = useState(false);

    const onClearCanvas = () => {
        editor?.canvas.clear(); 
    };

    const onSavePreview = () => {
        setOpenModal(true);
    };
    
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return(
        <Box sx={{marginTop: '20px'}}>
             {editor && 
                (<>
                    <Button variant="outlined" onClick={onClearCanvas}>Clear Canvas</Button>
                    <Button variant="outlined" onClick={onSavePreview}>Save/Preview</Button>
                    <CanvasPreviewModal open={openModal} onClose={handleCloseModal} />
                </>)}
        </Box>
    )
}

export default FinalActionBar;