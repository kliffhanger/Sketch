import { Modal, Paper, Typography } from '@mui/material';
import { useEditor } from '../hooks/editor';
import { useEffect, useRef } from 'react';


function CanvasPreviewModal({ open, onClose }) {
    const { editor } = useEditor();
  
    return (
      <Modal open={open} onClose={onClose}>
        <Paper style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '1rem' }}>
          <Typography variant="h6">Canvas Preview- Functionality is currently being worked on</Typography>
          <div>
            {editor && (
              <canvas width={400} height={400} style={{ border: '1px solid black' }} />
            )}
          </div>
        </Paper>
      </Modal>
    );
  }
  
  
export default CanvasPreviewModal;