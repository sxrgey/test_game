import * as React from 'react';
import styles from '../styles/creator.module.css'

export interface ICreatorProps {
}

const handleClick = () => {
  window.location.assign('/character');
}

export function Creator (props: ICreatorProps) {
  return (
  <div className={styles.wrapper}>
    <h1 className={styles.caption}>Character Creator</h1>
    <form className={styles.form}>
      <label className={styles.label}>Введите имя персонажа:</label>
      <input type='text' className={styles.input} placeholder='Имя'/>

      <label className={styles.label}>Задайте базовые параметры своего персонажа<br/>(введите числа от 0 до 5):</label>
      <input type='number' min='0' max='5' className={styles.input_num} placeholder='Сила'/>
      <input type='number' min='0' max='5' className={styles.input_num} placeholder='Ловкость'/>
      <input type='number' min='0' max='5' className={styles.input_num} placeholder='Интелект'/>
      <input type='number' min='0' max='5' className={styles.input_num} placeholder='Харизма'/>
    </form>
    <button
      className={styles.button}
      onClick={handleClick}
    >
      Создать
    </button>
  </div>
  );
}
