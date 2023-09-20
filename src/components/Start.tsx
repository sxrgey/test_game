import React from 'react';
import styles from '../styles/start.module.css';
import { Character } from '../classes/Character';
import { Parametrs } from '../classes/Character';

export interface IStartProps {
}

const handleClick = () => {
  // window.location.assign('/character');
}

export default function Start(props: IStartProps) {
  return (
      <div className={styles.wrapper}>
        <h1 className={styles.caption}>Character Editor</h1>
        <button
        className={styles.button}
        onClick={() => window.location.assign('/creator')}
        >
          Создать персонажа
        </button>
        <button
          className={styles.button}
          onClick={handleClick}
        >
          Импортировать персонажа
        </button>
      </div>
  )
}
