import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I am Ramya</h1>
        <p className={styles.description}>
          As a dedicated Full Stack Developer, I bring a robust foundation in
          both front-end and back-end technologies, coupled with a passion for
          building seamless, user-centric applications.
        </p>
        <a href="mailto:sureramya2003@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
