"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/button/button";
import FaqItem from "@/components/faq-item/faq-item";
import GDG from "@/components/homepage/gdg/gdg";
import { FAQ_DATA, TAB_LABELS, TABS, type Tab } from "@/data/faqs";
import styles from "./page.module.scss";

const MotionImage = motion(Image);

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

const tabsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.3, ease: "linear" },
  },
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<Tab>("general");
  const faqs = FAQ_DATA[activeTab];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className={styles.faqs}>
          <div className={styles.container}>
            <motion.h2 variants={fadeVariants} className={styles.title}>
              <MotionImage
                width={200}
                height={161}
                className={styles.sticker}
                src="/stickers/more-community-less-ego-dwg-group-picture.svg"
                alt="'More Community, Less Ego' written above a group photo of DevFest Digital Working Group (2024)"
                priority
                variants={stickerVariants}
              />
              <span>Get your questions answered</span>
            </motion.h2>
            <motion.p variants={fadeVariants} className={styles.description}>
              From registration to what to expect on the day, our FAQs have all
              the info you need.
            </motion.p>

            <motion.div variants={tabsVariants} className={styles.tabs}>
              {TABS.map((tab) => (
                <Button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  variant={tab === activeTab ? "primary" : "tertiary"}
                >
                  {TAB_LABELS[tab]}
                </Button>
              ))}
            </motion.div>

            <motion.ul
              key={activeTab}
              initial="hidden"
              animate="visible"
              variants={listVariants}
              className={styles.list}
            >
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
          </div>
          <GDG />
        </div>
      </motion.div>
    </>
  );
}
