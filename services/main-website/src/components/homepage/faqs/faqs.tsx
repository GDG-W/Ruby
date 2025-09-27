import React from "react";
import styles from "./faqs.module.scss";
import Image from "next/image";
import { Button } from "@/components/button/button";

const faqs = [
  {
    id: 1,
    question: "1. What is DevFest?",
    answer: "Yes! This platform allows you to securely purchase tickets for the five days event",
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
    <div className={styles.faqs}>
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
              From registration to what to expect on the day, our FAQs have all the info you need.
            </p>
            <ul className={styles.list}>
              {faqs.map((faq) => (
                <li key={faq.id} className={styles.faq}>
                  <details className={styles.detail} name="faqs" id={`faq-${faq.id}`}>
                    <summary className={styles.summary}>
                      <span className={styles.question}>{faq.question}</span>
                      <div className={styles.toggle}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13 6V18.6H11.2V6H13Z" fill="#171717" />
                          <path d="M6 11H18.6V12.8H6V11Z" fill="#171717" />
                        </svg>
                      </div>
                    </summary>
                    <p className={styles.answer}>{faq.answer}</p>
                  </details>
                  <svg
                    width="44"
                    height="33"
                    fill="none"
                    viewBox="0 0 44 33"
                    className={styles.polygon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M25.2295 30.4008C23.6316 32.5873 20.3684 32.5873 18.7705 30.4009L1.53343 6.81497C-0.398024 4.17213 1.4895 0.454788 4.7629 0.454788H39.2371C42.5105 0.454788 44.398 4.17212 42.4666 6.81497L25.2295 30.4008Z"
                    />
                  </svg>
                  <div className={styles.polygonCover} />
                </li>
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
