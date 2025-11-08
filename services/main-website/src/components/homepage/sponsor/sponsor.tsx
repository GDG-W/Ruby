"use client";

import { motion } from "motion/react";
import Image from "next/image";
import google from "@/assets/sponsors/google.png";
import threemtt from "@/assets/sponsors/3mtt.png";
import alat from "@/assets/sponsors/alat.png";
import bitnob from "@/assets/sponsors/bitnob.png";
import cadana from "@/assets/sponsors/cadana.png";
import cleva from "@/assets/sponsors/cleva.png";
import gdgBag from "@/assets/sponsors/gdg-bag.svg";
import shecodeafrica from "@/assets/sponsors/shecodeafrica.png";
import techcabal from "@/assets/sponsors/techcabal.png";
import splitIcon from "@/assets/sponsors/split.png";
import classes from "./sponsor.module.scss";

const sponsorImages = [
  google,
  bitnob,
  cleva,
  alat,
  cadana,
  techcabal,
  shecodeafrica,
  threemtt,
];

export function Sponsor() {
  return (
    <motion.section
      className={classes.sponsor}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          ease: [0, 0, 0, 1],
          duration: 1,
        },
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
    >
      <div className={classes.sponsoredBy}>
        PROUDLY <br /> SPONSORED BY
        <Image src={gdgBag} alt="GDG Bag" className={classes.gdgBag} />
      </div>
      <div className={classes.logosContainer}>
        <div className={classes.logos}>
          {sponsorImages.concat(sponsorImages).concat(sponsorImages).concat(sponsorImages).map((image, index) => (
            <>
              <Image
                src={image}
                alt={`sponsor-${index}`}
                className={classes.logo}
              />
              <Image src={splitIcon} alt={`split-${index}`} />
            </>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
