import Image from "next/image";
import React from "react";
import { Button } from "@/components/button/button";
import FaqItem from "@/components/faq-item/faq-item";
import styles from "./faqs.module.scss";

const faqs = [
  {
    id: 1,
    question: "1. What is DevFest?",
    answer:
      "Yes! This platform allows you to securely purchase tickets for the five days event",
  },
  {
    id: 2,
    question: "2. What is DevFest Lagos 2025",
    answer:
      "No — meals and merchandise are not included by default. However, some vendor stalls and sponsors may offer giveaways during the event.",
  },
  {
    id: 3,
    question: "3. What if I register and can't attend anymore?",
    answer:
      "Tickets are non-refundable for DevFest Lagos 2025 and not transferable. Each ticket is tied to a specific attendee and cannot be transferred to another person.",
  },
  {
    id: 4,
    question: "4. Is lunch or swag included in my ticket?",
    answer:
      "No — meals and merchandise are not included by default. However, some vendor stalls and sponsors may offer giveaways during the event.",
  },
];

const FAQs = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image
            width={298}
            height={227}
            className={styles.sticker}
            src="/stickers/more-community-less-ego-dwg-group-picture.svg"
            alt="'More Community, Less Ego' written above a group photo of DevFest Digital Working Group (2024)"
          />
          <div className={styles.inner}>
            <h2 className={styles.title}>Get your questions answered</h2>
            <p className={styles.description}>
              From registration to what to expect on the day, our FAQs have all
              the info you need.
            </p>
            <ul className={styles.list}>
              {faqs.map(({ id, question, answer }) => (
                <FaqItem key={id} id={id} question={question} answer={answer} />
              ))}
            </ul>
            <Button type="link" href="/faqs" className={styles.button}>
              I have more questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
