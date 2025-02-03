import './App.css'
import { router } from './pages/routes';
import {RouterProvider} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {themeDark} from "./components/theme/index.jsx";

function App() {
  return (
      <>
          <ThemeProvider theme={themeDark}>
              <CssBaseline />
              <RouterProvider router={router} />
          </ThemeProvider>
      </>
  )
}

export default App
