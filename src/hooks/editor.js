import { useContext } from "react";
import { CanvasContext } from "../store/store";

export const useEditor = () => {
    const context = useContext(CanvasContext);
    if (!context) {
      throw new Error('useEditor must be used within an EditorProvider');
    }
    return context;
  };