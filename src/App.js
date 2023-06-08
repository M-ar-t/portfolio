import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Nav from './components/Nav/Nav';
import Preloader from './components/Preloader/Preloader';

function App() {
  
  const Home = React.lazy(() => import('./components/Home/Home'));
  return (
    <div className="App">
      <Nav/>
      <Suspense fallback ={<Preloader/>}>
      <Routes>
       
            <Route exact path='/' element={<Home/>} />
           
      </Routes>
      </Suspense>

    </div>
  );
}

export default App;
