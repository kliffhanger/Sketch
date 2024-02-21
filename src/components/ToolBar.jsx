import { ButtonGroup, Button, Box } from '@mui/material';
import { useEditor } from '../hooks/editor';
import { useRef } from 'react';


const ToolBar = () =>{
    const inputRef = useRef(null);
    const { editor, onReady, isDrawing, setIsDrawing } = useEditor();
    
    //delete selected Items
    const onDeleteSelected = () => {
        const activeObjects = editor?.canvas.getActiveObjects();
        if (activeObjects && activeObjects.length > 0) {
            activeObjects.forEach(obj => editor?.canvas.remove(obj)); // Remove each active object
            editor?.canvas.discardActiveObject().renderAll(); // Deselect all objects and re-render canvas
          }
      };
    //function to add Circle
    const onAddCircle = () => {
        editor?.addCircle()
    }
    //function to add Rectangle
    const onAddRectangle = () => {
        editor?.addRectangle()
    }
    //function to add Line
    const onAddLine = () =>{
        editor?.addLine()
    }
    //function to add Text
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
    //function to add Polygon
    const onAddPolygon = () =>{
        const polygon = new fabric.Polygon([
            { x: 200, y: 10 },
            { x: 250, y: 50 },
            { x: 250, y: 100 },
            { x: 150, y: 100 },
            { x: 150, y: 50 },
            
          ], {
            left: 150,
            top: 200,
            stroke: 'black',
            strokeWidth: 2,
          });
            editor.canvas.add(polygon);
           
    }
    //Toggle between Drawing on Canvas
    const toggleDrawingMode = () => {
        setIsDrawing(!isDrawing);
        if (!isDrawing) {
          editor.canvas.isDrawingMode = true;
        } else {
          editor.canvas.isDrawingMode = false;
        }
    };
    //Image Upload Function
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageUrl = event.target.result;
          fabric.Image.fromURL(imageUrl, (img) => {
            img.scaleToWidth(editor.canvas.width / 4);
            img.scaleToHeight(editor.canvas.height / 4);
            editor.canvas.add(img);
            editor.canvas.renderAll();
          });
        };
        reader.readAsDataURL(file);
    };

      
    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
                <Button onClick={onAddPolygon}>Ploygon</Button>
                {editor?.canvas.getActiveObject() && (<Button onClick={onDeleteSelected}>Delete Item</Button>)}
            </ButtonGroup>
        </Box>
    )
}

export default ToolBar;