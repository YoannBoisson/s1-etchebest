import React, {useState, useEffect} from "react";
import { Card } from "./Card";
import axios from "axios";
import styles from "../styles/Main.module.css";

export const Main = () => {

    const [wilders, setWilders] = useState([])

    useEffect(() => { axios.get(
    `http://localhost:3001/api/wilder`)
      .then((response) => {
        console.log(response.data.result);
        setWilders(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      })
    }, [])
 

/*   const wilders = [
    {
      name: "Jane Doe",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      skills: [
        {
          title: "express",
          votes: 10,
        },
        {
          title: "PHP",
          votes: 11,
        },
      ],
    },
    {
      name: "Jane Doe",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      skills: [
        {
          title: "express",
          votes: 10,
        },
        {
          title: "PHP",
          votes: 11,
        },
      ],
    },
  ]; */
  return (
    <main className={styles.container}>
      <h2>Wilders</h2>
      <section className={styles.cardRow}>
        {wilders.map((wilder, index) => (
          <Card {...wilder} key={index} />
        ))}
      </section>
    </main>
  );
};
