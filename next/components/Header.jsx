import React from 'react'
import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <h1>Wilders Book</h1>
      </div>
    </header>
  );
}
