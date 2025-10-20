"use client";

import Image from "next/image";
import cloudTrack from "@/assets/tracks-cloud.png";
import designTrack from "@/assets/tracks-design.png";
import docsTrack from "@/assets/tracks-docs.png";
import prodTrack from "@/assets/tracks-prod.png";
import productTrack from "@/assets/tracks-product.png";
import promptsTrack from "@/assets/tracks-prompts.png";
import webTrack from "@/assets/tracks-web.png";
import classes from "./tracks.module.scss";
import { motion } from "motion/react";

export function Tracks() {
  return (
    <section className={classes.tracks}>
      <div className={classes.textWrapper}>
        <h2 className={classes.text}>
          {"Whatever you’re into, there's a track at".split(" ").map((word, index) => (
            <motion.span
              key={word}
              initial={{ translateY: "50%", opacity: 0, filter: "blurRadius(10px)" }}
              whileInView={{ translateY: 0, opacity: 1, filter: "blurRadius(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0, 0, 0, 1] }}
              className={classes.letter}
            >
              {word}{" "}
            </motion.span>
          ))}
          <span className={classes.subText}>
            {"DevFest Lagos made just for you.".split(" ").map((word, index) => (
              <motion.span
                key={word}
                initial={{ translateY: "50%", opacity: 0, filter: "blurRadius(10px)" }}
                whileInView={{ translateY: 0, opacity: 1, filter: "blurRadius(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 + index * 0.05, ease: [0, 0, 0, 1] }}
                className={classes.letter}
              >
                {word}{" "}
              </motion.span>
            ))}
            </span>
        </h2>
        <Image src={webTrack} alt="Web Track" className={classes.webTrack} />
        <Image
          src={promptsTrack}
          alt="Prompts Track"
          className={classes.promptTrack}
        />
        <Image
          src={productTrack}
          alt="Product Track"
          className={classes.productTrack}
        />
        <Image
          src={prodTrack}
          alt="Production Track"
          className={classes.prodTrack}
        />
        <Image
          src={docsTrack}
          alt="Documentation Track"
          className={classes.docsTrack}
        />
        <Image
          src={designTrack}
          alt="Design Track"
          className={classes.designTrack}
        />
        <Image
          src={cloudTrack}
          alt="Cloud Track"
          className={classes.cloudTrack}
        />
      </div>
    </section>
  );
}
