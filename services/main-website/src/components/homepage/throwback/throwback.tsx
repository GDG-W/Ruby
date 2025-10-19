import Image from "next/image";
import React from "react";
import { Button } from "@/components/button/button";
import styles from "./throwback.module.scss";

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
              className={styles.tweetOne}
              src="/images/@dev_leoo-tweet.png"
              alt="@dev_leoo's tweet on DevFest Lagos 2024 saying: 'No tech event in the country beats #DevFestLagos!Good job team @gdglagos #DevFestLagos2024'"
            />
            <Image
              width={488}
              height={488}
              quality={100}
              className={styles.photoOne}
              src="/images/devfest-2024-dancing.png"
              alt="Some attendees of DevFest Lagos 2024 dancing during the after-party"
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
                href="https://youtu.be/4HeUaiZLZ34?si=_-n9psHWDKjv36wL"
              >
                Watch 2024 Recap
              </Button>
              <Button
                type="link"
                variant="secondary"
                className={styles.button}
                href="https://photos.app.goo.gl/LyuJgDDFsefN2r5i6"
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
              className={styles.tweetTwo}
              src="/images/@Motushbae-tweet.png"
              alt="@Motushbae's tweet on DevFest Lagos 2024 saying: 'Last Saturday, I had an incredible time at #DevFestLagos leading a codelab on OAuth 2.0. I walked participants through the concepts and hands-on implementation, it was rewarding to see so much interaction and learning. Thanks to everyone who came through—y’all made it engaging.'"
            />
            <Image
              width={517}
              height={589}
              quality={100}
              className={styles.photoTwo}
              src="/images/devfest-2024-trio.png"
              alt="Three attendees of DevFest Lagos 2024 at the DevFest photo booth"
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <Image
            width={750}
            height={380}
            quality={100}
            className={styles.tweetThree}
            src="/images/@adesay0-tweet.png"
            alt="@adesay0's tweet on DevFest Lagos 2024 saying: 'My very first devfest. My &ldquo;devfirst&rdquo;. I had so much fun and met new people. I must be there next year *if I never japa sha*'"
          />
          <Image
            width={450}
            height={510}
            quality={100}
            className={styles.photoThree}
            src="/images/devfest-2024-speaker.png"
            alt="John Ohio speaking at DevFest Lagos 2024 on 'Design Thinking for Problem-Solving: Beyond UX Design'"
          />
          <Image
            width={750}
            height={446}
            quality={100}
            className={styles.tweetFour}
            src="/images/@mutiatadebimpe-tweet.png"
            alt="@mutiatadebimpe's tweet on DevFest Lagos 2024 saying: 'I had an incredible time at #DevFest2024! I met amazing people, gained valuable insights and had a blast! Huge thanks to the team for putting together such an amazing event!@gdglagos #DevFestLagos #Networking #Techcommunity #GrowthJourney'"
          />
        </div>
      </div>
    </div>
  );
};

export default Throwback;
