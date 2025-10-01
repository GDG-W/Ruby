import React from "react";
import styles from "./gdg.module.scss";
import Orbit from "@/components/orbit/Orbit";
import { Button } from "@/components/button/button";

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
        <Orbit className={styles.orbit} />
      </div>
    </div>
  );
};

export default GDG;
