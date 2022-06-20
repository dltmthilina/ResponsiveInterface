import { createTheme, ThemeProvider } from "@mui/material"
import Layout from "./components/Layout";

const theme = createTheme({
  palette:{
    primary:{
      main:'#ccc'
    },
    secondary:{
        main:'#f5bf42'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Layout/>
    </div>
    </ThemeProvider>
  );
}

export default App;
