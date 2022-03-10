import React from 'react'
import styles from "../styles/Card.module.css";

export const Skill = ({title, votes}) => {
  return (
    <li>
      {title}
      <span className={styles.votes}>{votes}</span>
    </li>
  );
}
