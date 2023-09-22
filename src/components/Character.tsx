import React, { useState } from "react"
import styles from '../styles/character.module.css'
import { useSelector } from 'react-redux'
import { ICharacter } from "../models/Character"
import { characterSelector } from "../characterSelectors";
import { useNavigate } from "react-router-dom";

const grade_skills = ['Нетренированный', 'Новичок', 'Ученик', 'Адепт', 'Эксперт', 'Мастер', 'Достигнут максимальный уровень!'];

export interface ICharacterProps {
}

export function Character(props: ICharacterProps) {
  const state = useSelector(characterSelector);
  const [character, setCharacter] = useState(state);
  const [handleClickTrainIsWorking, setHandleClickTrainIsWorking] = useState(false);
  const [scaleAvatar, setScaleAvatar] = useState(1);

  const navigate = useNavigate();

  const handleClickTrain = (event: any) => {
    if (!handleClickTrainIsWorking) {
      const new_skills = { ...character.skills };
      if (new_skills[event.target.id] < 5) {
        new_skills[event.target.id]++;
      } else {
        new_skills[event.target.id] = 6;
        setCharacter((prev: ICharacter) => ({ ...prev, skills: new_skills }));
        setHandleClickTrainIsWorking(true);
        setTimeout(() => {
          new_skills[event.target.id] = 5;
          setCharacter((prev: ICharacter) => ({ ...prev, skills: new_skills }));
          setHandleClickTrainIsWorking(false);
        }, 1000);
      }
      setCharacter((prev: ICharacter) => ({ ...prev, skills: new_skills }));
    }
  }

  const handleClickKick = () => {
    if (character.parametrs.vitality > 0) {
      setCharacter((prev: ICharacter) => ({ ...prev, parametrs: { ...prev.parametrs, vitality: prev.parametrs.vitality ? prev.parametrs.vitality - 1 : 0 } }));
      setScaleAvatar(0.9);
      setTimeout(() => {
        setScaleAvatar(1);
      }, 100)
    }
  }

  return (
    <div className={styles.wrapper}>

      <section className={styles.head}>
        <div className={styles.half_head}>
          <img style={{ transform: `scale(${scaleAvatar})` }} className={styles.image} src='https://papik.pro/grafic/uploads/posts/2023-04/1682551474_papik-pro-p-smail-ritsar-png-4.png' alt='avatar' />
        </div>
        <div className={styles.half_head}>
          <h2 className={styles.name}>{character.name}</h2>
          <div className={styles.parametrs}>
            <p className={styles.parametr}>Сила: {character.parametrs.strength}</p>
            <p className={styles.parametr}>Ловкость: {character.parametrs.agility}</p>
            <p className={styles.parametr}>Интелект: {character.parametrs.intelligence}</p>
            <p className={styles.parametr}>Харизма: {character.parametrs.charisma}</p>
            <p className={styles.parametr}>Жизненная сила: {character.parametrs.vitality > 0 ? character.parametrs.vitality : 'Погиб.'}</p>
            <p className={styles.parametr}>Энергичность: {character.parametrs.vigor}</p>
            <p className={styles.parametr}>Уклонение: {character.parametrs.evasion}</p>
          </div>
        </div>
      </section>

      <section className={styles.skills} onClick={handleClickTrain}>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Атака: {grade_skills[character.skills.attack]}</p>
          <button id="attack" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Стелс: {grade_skills[character.skills.stealth]}</p>
          <button id="stealth" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Стрельба из лука: {grade_skills[character.skills.archery]}</p>
          <button id="archery" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Обучаемость: {grade_skills[character.skills.learning]}</p>
          <button id="learning" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Выживание: {grade_skills[character.skills.survival]}</p>
          <button id="survival" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Медицина: {grade_skills[character.skills.medicine]}</p>
          <button id="medicine" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Запугивание: {grade_skills[character.skills.intimidation]}</p>
          <button id="intimidation" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Проницательность: {grade_skills[character.skills.insight]}</p>
          <button id="insight" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Внешний вид: {grade_skills[character.skills.appearance]}</p>
          <button id="appearance" className={styles.train_button}>Тренировать</button>
        </div>
        <div className={styles.skill_wrapper}>
          <p className={styles.skill}>Манипулирование: {grade_skills[character.skills.manipulation]}</p>
          <button id="manipulation" className={styles.train_button}>Тренировать</button>
        </div>
      </section>

      <section className={styles.buttons}>
        <button className={styles.change_button} onClick={() => { navigate('/editor') }}>Изменить персонажа</button>
        {/* <button className={styles.change_button} onClick={testFunction}>Экспортировать персонажа</button> */}
        <a
          className={styles.export_button}
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(state)
          )}`}
          download={`${character.name}.json`}
        >
          Экспортировать персонажа
        </a>
        <button className={styles.kick_button} onClick={handleClickKick}>Ударить персонажа</button>
      </section>

    </div>
  );
}
