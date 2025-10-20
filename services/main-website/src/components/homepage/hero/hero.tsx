"use client";

import styles from "./hero.module.scss";
import dLogo from "@/assets/devfest-logo.svg";
import heroImage from "@/assets/hero-image.png";
import heroImageMobile from "@/assets/hero-image-mobile.png";
import Image from "next/image";
import { Button } from "@/components/button/button";
import dateAndLocationArrow from "@/assets/date-and-location-arrow.svg";
import dateAndLocationMobileArrow from "@/assets/date-and-location-mobile-arrow.svg";
import dLogoLeft from "@/assets/d-logo-left.png";
import dLogoRight from "@/assets/d-logo-right.png";
import { motion } from "motion/react";

export function HomepageHero() {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.devfestText}>
          <motion.span
            initial={{
              opacity: 0,
              filter: 'blur(20px)',
              x: -65,
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: "easeOut",
            }}
          >
            Devfest
          </motion.span>

          <div className={styles.lagosRow}>
            <div className={styles.dLogo}>
              <motion.div
                initial={{ x: -32, opacity: 0, filter: "blur(20px)"}}
                animate={{ x: 0, opacity: 1,   filter: "blur(0)"}}
                transition={{ duration: 0.3, delay: 0.2,  ease: [0.5, 0, 0.5, 1] }}
              >
                <Image src={dLogoLeft} alt="DevFest Logo Left Side" />
              </motion.div>
              <motion.div
                initial={{ x: -128, opacity: 0, filter: "blur(20px)"}}
                animate={{ x: 0, opacity: 1,   filter: "blur(0)"}}
                transition={{ duration: 0.3,  ease: [0.5, 0, 0.5, 1] }}
              >
                <Image src={dLogoRight} alt="DevFest Logo Right Side" />
              </motion.div>
            </div>
            <motion.span
              initial={{
                opacity: 0,
                filter: 'blur(20px)',
                x: -65,
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.55,
                ease: "easeOut",
              }}
            >
              Lagos
            </motion.span>
          </div>
        </div>
        <h1 className={styles.yearText}>
          {
            "2025".split("").map((letter, index) => (
              <motion.span
                key={letter}
                initial={{ y: "-100%"}}
                animate={{ y: 0 }}
                transition={{ delay: 1.26 + 0.052 * index, duration: 1.042, ease: [0, 0, 0.3, 1] }}
              >
                {letter}
              </motion.span>
            ))
          }
        </h1>
        <motion.div
          initial={{opacity: 0, scale: 1.03 }}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 1.5, duration: 0.8, ease: [0, 0, 0, 1]}}
        >
          <Image
            src={heroImage}
            className={styles.heroImage}
            alt="Clipped illustration"
            style={{ width: "100%" }}
          />
        </motion.div>
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
          <Image src={dateAndLocationArrow} alt="" className={styles.arrow} />
          <Image src={dateAndLocationMobileArrow} alt="" className={styles.mobileArrow} />
          <span>
            The Zone, Gbagada, Lagos
          </span>
        </div>
      </div>

    </section>
  )
}
