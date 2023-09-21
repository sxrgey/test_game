import React, { useState } from "react"
import styles from '../styles/creator.module.css'
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { Character} from '../models/Character';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { characterSelector } from "../characterSelectors";



export interface ICreatorProps {
  button_name: string;
  isCreator?: boolean;
}

export function Creator ({button_name, isCreator=true}: ICreatorProps) {
  const state = useSelector(characterSelector);
  const [character, setCharacter] = useState(state);

  const handleChange = (event: any) => {
    if (event.target.id === 'name') {
      setCharacter((prev:any) => ({...prev, name: event.target.value}));
    } else if (event.target.value >= 0 && event.target.value < 6) {
      setCharacter((prev:any) => ({...prev, parametrs: {...prev.parametrs, [event.target.id]: Number(event.target.value)}}));
    } else {
      event.target.value = null;
    }
    
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    //Заново вычисляем параметры персонажа с помощью класса
    const characterClass = new Character(character.name, character.parametrs);
    setCharacter(characterClass.getICharacter());

    dispatch({type:"character/set/name", payload: character.name});
    dispatch({type:"character/set/parametrs", payload: character.parametrs});
    dispatch({type:"character/set/skills", payload: character.skills});

    navigate('/character');
  }


  return (
  <div className={styles.wrapper}>
    <h1 className={styles.caption}>Character {isCreator ? 'Creator' : 'Editor'}</h1>
    <form className={styles.form} onChange={handleChange}>
      <label className={styles.label}>Введите имя персонажа:</label>
      <input id = "name" type='text' className={styles.input} placeholder='Имя' value={isCreator ? null : character.name}/>

      <label className={styles.label}>Задайте базовые параметры своего персонажа<br/>(введите числа от 0 до 5):</label>
      <input id = "strength" type='number' min='0' max='5' className={styles.input_num} placeholder='Сила' value={(isCreator || character.parametrs.strength === 0) ? null : character.parametrs.strength}/>
      <input id = "agility" type='number' min='0' max='5' className={styles.input_num} placeholder='Ловкость' value={(isCreator || character.parametrs.agility === 0) ? null : character.parametrs.agility}/>
      <input id = "intelligence" type='number' min='0' max='5' className={styles.input_num} placeholder='Интелект' value={(isCreator || character.parametrs.intelligence === 0) ? null : character.parametrs.intelligence}/>
      <input id = "charisma" type='number' min='0' max='5' className={styles.input_num} placeholder='Харизма' value={(isCreator || character.parametrs.charisma === 0) ? null : character.parametrs.charisma}/>
    </form>
    <button
      className={styles.button}
      onClick={handleClick}
    >
      {button_name}
    </button>
  </div>
  );
}
