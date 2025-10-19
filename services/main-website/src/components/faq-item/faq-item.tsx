import type React from "react";
import styles from "./faq-item.module.scss";

interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer }) => {
  return (
    <li className={styles.faq}>
      <details className={styles.detail} name="faqs" id={`faq-${id}`}>
        <summary className={styles.summary}>
          <span className={styles.question}>{question}</span>
          <div className={styles.toggle}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Toggle FAQ"
            >
              <path d="M13 6V18.6H11.2V6H13Z" fill="#171717" />
              <path d="M6 11H18.6V12.8H6V11Z" fill="#171717" />
            </svg>
          </div>
        </summary>
        <p className={styles.answer}>{answer}</p>
      </details>
      <svg
        width="44"
        height="33"
        fill="none"
        viewBox="0 0 44 33"
        className={styles.polygon}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M25.2295 30.4008C23.6316 32.5873 20.3684 32.5873 18.7705 30.4009L1.53343 6.81497C-0.398024 4.17213 1.4895 0.454788 4.7629 0.454788H39.2371C42.5105 0.454788 44.398 4.17212 42.4666 6.81497L25.2295 30.4008Z"
        />
      </svg>
      <div className={styles.polygonCover} />
    </li>
  );
};

export default FaqItem;
