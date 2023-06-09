import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Nav from './components/Nav/Nav';
import Preloader from './components/Preloader/Preloader';
import AOS from 'aos';
import AboutMe from './components/About/AboutMe';
import Scills from './components/Scills/Scills';
import Works from './components/Works/Works';

AOS.init({
  // once: true,
 });

function App() {

  const Home = React.lazy(() => import('./components/Home/Home'));
  return (
    <div className="App">
      <Nav/>
      <Suspense fallback ={<Preloader/>}>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<AboutMe/>} />      
          <Route exact path='/scills' element={<Scills/>} />      
          <Route exact path='/works' element={<Works/>} />      
          <Route exact path='/contacts' element={<Works/>} />      
      </Routes>
      </Suspense>

    </div>
  );
}

export default App;
