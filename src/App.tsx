import React from 'react';
import  './App.css'
import { Header } from './Components/header/Header';
import { Nav } from './Components/nav/Nav';
import { Profile } from './Components/profile/Profile';

function App() {
  return (
    <div className={'app__wrapper'}>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;




