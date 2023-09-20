import './App.css';
import Home from './Home';
import SingleMovie from './SingleMovie'
import Error from './Error';
import { Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div >
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<Error />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
