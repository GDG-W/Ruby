"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/button/button";
import FaqItem from "@/components/faq-item/faq-item";
import { motion, Variants } from "motion/react";
import styles from "./faqs.module.scss";

const MotionImage = motion(Image);

const faqs = [
  {
    id: 1,
    question: "What is DevFest?",
    answer: "Yes! This platform allows you to securely purchase tickets for the five days event",
  },
  {
    id: 2,
    question: "What is DevFest Lagos 2025",
    answer:
      "No — meals and merchandise are not included by default. However, some vendor stalls and sponsors may offer giveaways during the event.",
  },
  {
    id: 3,
    question: "What if I register and can't attend anymore?",
    answer:
      "Tickets are non-refundable for DevFest Lagos 2025 and not transferable. Each ticket is tied to a specific attendee and cannot be transferred to another person.",
  },
  {
    id: 4,
    question: "Is lunch or swag included in my ticket?",
    answer:
      "No — meals and merchandise are not included by default. However, some vendor stalls and sponsors may offer giveaways during the event.",
  },
];

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
            <motion.h2
              variants={fadeVariants}
              className={styles.title}
            >
              Get your questions answered
            </motion.h2>
            <motion.p
              variants={fadeVariants}
              className={styles.description}
            >
              From registration to what to expect on the day, our FAQs have all the info you need.
            </motion.p>
            <motion.ul variants={listVariants} className={styles.list}>
              {faqs.map(({ id, question, answer }, idx) => (
                <FaqItem key={id} idx={idx} question={question} answer={answer} variants={listItemVariants} />
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
