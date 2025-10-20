import Image from "next/image";
import dLogo from "@/assets/devfest-logo.svg";
import heroImage from "@/assets/hero-image.png";
import heroImageMobile from "@/assets/hero-image-mobile.png";
import { Button } from "@/components/button/button";
import dateAndLocationArrow from "@/assets/date-and-location-arrow.svg";
import dateAndLocationMobileArrow from "@/assets/date-and-location-mobile-arrow.svg";
import styles from "./hero.module.scss";

export function HomepageHero() {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.devfestText}>
          Devfest
          <div className={styles.lagosRow}>
            <Image src={dLogo} alt="DevFest Logo" />
            <span>Lagos</span>
          </div>
        </div>
        <h1 className={styles.yearText}>2025</h1>
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
        <Button className={styles.buyButton}>BUY TICKETS</Button>
        <div className={styles.dateAndLocation}>
          <span>18-22 november, 2025</span>
          <Image src={dateAndLocationArrow} alt="" className={styles.arrow} />
          <Image src={dateAndLocationMobileArrow} alt="" className={styles.mobileArrow} />
          <span>The Zone, Gbagada, Lagos</span>
        </div>
      </div>
    </section>
  );
}
