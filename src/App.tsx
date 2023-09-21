import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Start from './components/Start';
import styles from './styles/app.module.css';
import { Creator } from './components/Creator';
import { Character } from './components/Character';
import { Importer } from './components/Importer';

function App() {
  return (
    <main className={styles.wrapper}>
      <Routes>
        <Route path='/' element = {<Start/>}/>
        <Route path='/creator' element = {<Creator button_name='Создать'/>}/>
        <Route path='/importer' element = {<Importer/>}/>
        <Route path='/editor' element = {<Creator button_name='Изменить' isCreator = {false}/>}/>
        <Route path='/character' element = {<Character/>}/> 
      </Routes>
    </main>
  );
}

export default App;
