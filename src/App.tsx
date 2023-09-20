import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Start from './components/Start';
import styles from './styles/app.module.css';
import { Creator } from './components/Creator';
import { Character } from './components/Character';

function App() {
  return (
    <main className={styles.wrapper}>
      <Routes>
        <Route path='/' element = {<Start/>}/>
        <Route path='/creator' element = {<Creator/>}/>
        <Route path='/character' element = {<Character/>}/>
        
      </Routes>
      
    </main>
  );
}

export default App;
