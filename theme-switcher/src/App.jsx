import {ThemeProvider} from './components/Theme.jsx';
import ThemeUI from './components/ThemeUI';

function App() {

  return (
    <>
    <ThemeProvider>
    <ThemeUI />
    </ThemeProvider>
    </>
  )
}

export default App;
