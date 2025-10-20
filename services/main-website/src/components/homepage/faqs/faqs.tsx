"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/button/button";
import FaqItem from "@/components/faq-item/faq-item";
import styles from "./faqs.module.scss";
import { FAQ_DATA } from "@/data/faqs";

const MotionImage = motion(Image);

const faqs = FAQ_DATA.general.slice(0, 4)

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
    },
  },
};

const stickerVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "linear" },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 0.2, ease: "easeOut" },
  },
};

const FAQs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <MotionImage
            className={styles.sticker}
            variants={stickerVariants}
            width={298}
            height={227}
            src="/stickers/more-community-less-ego-dwg-group-picture.svg"
            alt="'More Community, Less Ego' written above a group photo of DevFest Digital Working Group (2024)"
          />
          <div className={styles.inner}>
            <motion.h2 variants={fadeVariants} className={styles.title}>
              Get your questions answered
            </motion.h2>
            <motion.p variants={fadeVariants} className={styles.description}>
              From registration to what to expect on the day, our FAQs have all
              the info you need.
            </motion.p>
            <motion.ul variants={listVariants} className={styles.list}>
              {faqs.map(({ id, question, answer }, idx) => (
                <FaqItem
                  key={id}
                  idx={idx}
                  question={question}
                  answer={answer}
                  variants={listItemVariants}
                />
              ))}
            </motion.ul>
            <motion.div variants={buttonVariants}>
              <Button type="link" href="/faqs" className={styles.button}>
                I have more questions
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQs;
