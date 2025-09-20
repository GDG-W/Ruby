import styles from "./hero.module.scss";
import DLogo from "@/assets/devfest-logo.svg";
import heroImage from "@/assets/hero-image.png";
import heroImageMobile from "@/assets/hero-image-mobile.png";
import Image from "next/image";
import { Button } from "@/components/button/button";
import DateAndLocationArrow from "@/assets/date-and-location-arrow.svg";
import DateAndLocationMobileArrow from "@/assets/date-and-location-mobile-arrow.svg";

export function HomepageHero() {
  return (
    <section>
      <div className={styles.hero}>
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

      </div>
      <div className={styles.callToAction}>
        <Button className={styles.buyButton}>
          BUY TICKETS
        </Button>
        <div className={styles.dateAndLocation}>
          <span>
            18-22 november, 2025
          </span>
          <DateAndLocationArrow className={styles.arrow} />
          <DateAndLocationMobileArrow className={styles.mobileArrow} />
          <span>
            The Zone, Gbagada, Lagos
          </span>
        </div>
      </div>

    </section>
  )
}
