'use client';

import Image from 'next/image'
import styles from './about.module.scss'
import Slider from "../slider/Slider";
import Button from "../button/Button";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Slider />
        <div className={styles.buttons}>
          <Button name="Categorias" link="category" />
          <Button name="Mais Curtidos" link="rank" />
          <Button name="Campeonatos" link="champs" />
        </div>
      </div>
    </main>
  )
}