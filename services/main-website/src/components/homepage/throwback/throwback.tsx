import React from "react";
import styles from "./throwback.module.scss";
import { Button } from "@/components/button/button";
import Image from "next/image";

const Throwback = () => {
  return (
    <div className={styles.throwback}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imageContainer}>
            <Image
              width={765}
              height={379}
              quality={100}
              alt="throwback"
              className={styles.tweetOne}
              src="/images/@dev_leoo-tweet.png"
            />
            <Image
              width={488}
              height={488}
              quality={100}
              alt="throwback"
              className={styles.photoOne}
              src="/images/devfest-2024-dancing.png"
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Let's take you down memory lane</h2>
            <p className={styles.description}>
              DevFest Lagos 2024 was unforgettable. A time was thoroughly had
              and no be by cho cho cho, we have receipts.
            </p>
            <div className={styles.buttons}>
              <Button
                type="link"
                className={styles.button}
                href="https://gdg.community.dev/gdg-lagos/"
              >
                Watch 2024 Recap
              </Button>
              <Button
                type="link"
                className={styles.button}
                href="https://gdg.community.dev/gdg-lagos/"
              >
                View 2024 Photos
              </Button>
              <div className={styles.lane}>
                <svg
                  height="12"
                  width="100%"
                  aria-hidden="true"
                  viewBox="0 0 100 12"
                  className={styles.dashes}
                  preserveAspectRatio="none"
                >
                  <line
                    y1="4"
                    x1="0"
                    y2="4"
                    x2="100"
                    strokeWidth="12"
                    stroke="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={750}
              height={413}
              quality={100}
              alt="throwback"
              className={styles.tweetTwo}
              src="/images/@Motushbae-tweet.png"
            />
            <Image
              width={517}
              height={589}
              quality={100}
              alt="throwback"
              className={styles.photoTwo}
              src="/images/devfest-2024-trio.png"
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <Image
            width={750}
            height={380}
            quality={100}
            alt="throwback"
            className={styles.tweetThree}
            src="/images/@adesay0-tweet.png"
          />
          <Image
            width={450}
            height={510}
            quality={100}
            alt="throwback"
            className={styles.photoThree}
            src="/images/devfest-2024-speaker.png"
          />
          <Image
            width={750}
            height={446}
            quality={100}
            alt="throwback"
            className={styles.tweetFour}
            src="/images/@mutiatadebimpe-tweet.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Throwback;
