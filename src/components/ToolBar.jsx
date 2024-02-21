import { ButtonGroup, Button } from '@mui/material';
import { useEditor } from '../hooks/editor';
import { useRef } from 'react';

const ToolBar = () =>{
    const inputRef = useRef(null);
    const { editor, onReady, isDrawing, setIsDrawing } = useEditor();

    const onAddCircle = () => {
        editor?.addCircle()
      }
      const onAddRectangle = () => {
        editor?.addRectangle()
      }
      const onAddLine = () =>{
        editor?.addLine()
      }
      const onAddText = () =>{
        const text= new fabric.Textbox('Enter your text',{
          left:100,
          top: 100,
          width: 200,
          fontSize: 20,
          fill: 'black',
        })
        editor.canvas.add(text);
        editor.canvas.renderAll();
      }
      const toggleDrawingMode = () => {
        setIsDrawing(!isDrawing);
        if (!isDrawing) {
          editor.canvas.isDrawingMode = true;
        } else {
          editor.canvas.isDrawingMode = false;
        }
      };
      const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageUrl = event.target.result;
          fabric.Image.fromURL(imageUrl, (img) => {
            // Resize the image
            img.scaleToWidth(editor.canvas.width / 4);
            img.scaleToHeight(editor.canvas.height / 4);
            editor.canvas.add(img);
            editor.canvas.renderAll();
          });
        };
        reader.readAsDataURL(file);
      };

      
    return (
        <>
            <ButtonGroup size="large" orientation='vertical' aria-label="Large button group">
                <Button onClick={onAddLine} variant="outlined">
                  Line
                </Button>
                <Button onClick={onAddCircle} variant="outlined">
                  Circle
                </Button>
                <Button onClick={onAddRectangle} variant="outlined">
                  Rectangle
                </Button>
                <Button onClick={onAddText} variant="outlined">
                  Text
                </Button>
                <input
                  type='file'
                  accept='image/*'
                  ref={inputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
                <Button onClick={() => inputRef.current.click()}>Upload Image</Button>
                <Button onClick={toggleDrawingMode}>{isDrawing ? 'Exit Drawing Mode' : 'Enter Drawing Mode'}</Button>
            </ButtonGroup>
        </>
    )
}

export default ToolBar;