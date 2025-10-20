import Image from "next/image";
import React from "react";
import { Button } from "@/components/button/button";
import styles from "./gdg.module.scss";

const GDG = () => {
  return (
    <div className={styles.gdg}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>What is GDG Lagos up to?</h2>
          <p className={styles.description}>
            Stay updated on all our activities, events, webinars. Be the first
            to know what the GDG Lagos community is up to.
          </p>
          <Button
            type="link"
            className={styles.button}
            href="https://gdg.community.dev/gdg-lagos/"
          >
            Join the community
          </Button>
        </div>
        <Image
          alt="GDG Lagos orbit illustration"
          width={500}
          height={538}
          className={styles.image}
          src="/images/GDG-Lagos-orbit.svg"
        />
      </div>
    </div>
  );
};

export default GDG;
