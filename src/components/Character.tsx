import * as React from 'react';
import styles from '../styles/character.module.css'

export interface ICharacterProps {
}

export function Character (props: ICharacterProps) {
  return (
    <div  className={styles.wrapper}>
      <section className={styles.head}>
        <div className={styles.half_head}>
          <img className={styles.image} src='https://papik.pro/grafic/uploads/posts/2023-04/1682551474_papik-pro-p-smail-ritsar-png-4.png' alt ='avater'/>
        </div>
        <div className={styles.half_head}>
          <h2 className={styles.name}>Name</h2>
          <div className={styles.parametrs}>
            <p className={styles.parametr}>Сила:</p>
            <p className={styles.parametr}>Ловкость:</p>
            <p className={styles.parametr}>Интелект:</p>
            <p className={styles.parametr}>Харизма:</p>
            <p className={styles.parametr}>Жизненная сила:</p>
            <p className={styles.parametr}>Энергичность:</p>
            <p className={styles.parametr}>Уклонение:</p>
          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Атака: Мастер</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Стелс: Мастер</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Стрельба из лука: Нетренированный</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Обучаемость: Нетренированный</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Выживание: Нетренированный</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Медицина: Нетренированный</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Запугивание: Нетренированный</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Проницательность: Нетренированный</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Внешний вид: Нетренированный</p>
          <button className={styles.train}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Манипулирование: Нетренированный</p>
          <button className={styles.train}>Тренировать</button>
        </div>
      </section>
    </div>
  );
}
