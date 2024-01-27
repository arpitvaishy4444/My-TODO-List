import './App.css';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';

import UpcomingTask from "./components/UpcomingTask.js";




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home} />
         
      <Route path='/upcoming' Component={UpcomingTask}/>    
          
  


    </Routes>
    </BrowserRouter>
    
 
    
    
  );
}

export default App;
