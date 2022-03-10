import React from "react";
import Image from "next/image";
import Avatar from "../public/avatar.png";
import { Skill } from "./Skill";
import styles from "../styles/Card.module.css";

export const Card = ({name, city, skills}) => {
  return (
    <article className={styles.card}>
      <Image src={Avatar} alt={name} />
      <h3>{name}</h3>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
        {skills.map((skill) => (
            <>
            <Skill title={skill.title} votes={skill.votes} />
          </>
        ))}
      </ul>
    </article>
  );
};
