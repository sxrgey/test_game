import React from 'react';
import styles from '../styles/start.module.css';
import { useNavigate } from "react-router-dom";

export interface IStartProps {
}

export default function Start(props: IStartProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.caption}>Character Editor</h1>
      <button
        className={styles.button}
        onClick={() => navigate('/creator')}
      >
        Создать персонажа
      </button>
      <button
        className={styles.button}
        onClick={() => navigate('/importer')}
      >
        Импортировать персонажа
      </button>
    </div>
  )
}
