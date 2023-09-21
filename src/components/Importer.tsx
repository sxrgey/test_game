import React, { useRef } from "react"
import styles from '../styles/importer.module.css';
import { useNavigate } from "react-router-dom";
import { characterSelector } from "../characterSelectors";
import { useDispatch, useSelector } from 'react-redux';
import { ICharacter } from "../models/Character";


export interface IImporterProps {
}

export function Importer (props: IImporterProps) {
  const state = useSelector(characterSelector);
  let character = useRef<ICharacter>(state);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadCharacter = (event: any) => {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = () => {
      if (reader.result) {
        const res = JSON.parse(String(reader.result));
        character.current = {...res};
        dispatch({type:"character/set/name", payload: character.current.name});
        dispatch({type:"character/set/parametrs", payload: character.current.parametrs});
        dispatch({type:"character/set/skills", payload: character.current.skills});
        navigate('/character');
      }
    };
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.caption}>Character Importer</h1>

      <label className={styles.label_input}>
        <input type="file" accept=".json,application/json" className={styles.input} id="fileInput" onChange={loadCharacter}/>
        Выберите файл
      </label>
    </div>
  );
}
