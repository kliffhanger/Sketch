import {Typography, CssBaseline, Grid, Container} from '@mui/material'
import './App.css';
import { FabricJSCanvas } from 'fabricjs-react'
import { useEditor } from './hooks/editor';
import ToolBar from './components/ToolBar';
import Header from './components/Header';

function App() {

 const {onReady} = useEditor();

  return (
    <>
     <CssBaseline/>
     <Header />
     <main>
      <div>
        <Container maxWidth="lg" sx={{my: 4, height: '90vh'}}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={4}>
              <ToolBar/>
            </Grid>
            <Grid item sm={12} md={8} sx={{my: 4, height: '80vh'}}>
              <FabricJSCanvas className="sample-canvas" onReady={onReady} />
            </Grid>
          </Grid>
        </Container>
      </div>
     </main>
    </>
  )
}

export default App
