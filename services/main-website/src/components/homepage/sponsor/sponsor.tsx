"use client";

import Image from "next/image";
import abeg from "@/assets/sponsors/abeg.png";
import andela from "@/assets/sponsors/andela.png";
import busha from "@/assets/sponsors/busha.png";
import fincra from "@/assets/sponsors/fincra.png";
import google from "@/assets/sponsors/google.png";
import interswitch from "@/assets/sponsors/interswitch.png";
import patricia from "@/assets/sponsors/patricia.png";
import paystack from "@/assets/sponsors/paystack.png";
import splitIcon from "@/assets/sponsors/split.png";
import classes from "./sponsor.module.scss";
import gdgBag from "@/assets/sponsors/gdg-bag.svg";
import { motion } from "motion/react";

const sponsorImages = [
  abeg,
  andela,
  busha,
  fincra,
  google,
  interswitch,
  patricia,
  paystack,
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
          {sponsorImages.concat(sponsorImages).map((image, index) => (
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
