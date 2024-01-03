
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Nav from './Navigation/Nav'

import Login from './login/Login';

import FaqAbout from './faqfile/FaqAbout';





function App() {
  return (
    <div > 
   
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/faq' element={<FaqAbout/>}/>
      </Routes>

    </BrowserRouter> 
   
   
     
    
    </div>
  );
}

export default App;
