import './App.css';
import Nav from './Nav';
import Foot from './Foot';
import Home from './Home';
import Content from './Content';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div >
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/content' element={<Content/>}></Route>
      </Routes>
      <Foot/>
      </div>
  );  
}

export default App;
