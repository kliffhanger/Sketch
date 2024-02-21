import { createContext, useReducer, useContext, useState } from "react";
import {useFabricJSEditor} from 'fabricjs-react';
export const CanvasContext = createContext();

export const CanvasProvider = ({children}) =>{
    const { editor, onReady } = useFabricJSEditor();
    const [isDrawing, setIsDrawing] = useState(false);
    return (
        <CanvasContext.Provider value={{editor,onReady,isDrawing,setIsDrawing}}>
            {children}
        </CanvasContext.Provider>
    )
}

