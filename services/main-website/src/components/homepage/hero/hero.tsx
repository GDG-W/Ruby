import styles from "./hero.module.scss";
import DLogo from "@/assets/devfest-logo.svg";
import heroImage from "@/assets/hero-image.png";
import heroImageMobile from "@/assets/hero-image-mobile.png";
import Image from "next/image";

export function HomepageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.devfestText}>
        Devfest
        <div className={styles.lagosRow}>
          <DLogo />
          <span>Lagos</span>
        </div>
      </div>
      <h1 className={styles.yearText}>
        2025
      </h1>
      <Image
        src={heroImage}
        className={styles.heroImage}
        alt="Clipped illustration"
        style={{ width: "100%" }}
      />
      <Image
        src={heroImageMobile}
        className={styles.heroImageMobile}
        alt="Clipped illustration"
        style={{ width: "100%" }}
      />

    </section>
  )
}
