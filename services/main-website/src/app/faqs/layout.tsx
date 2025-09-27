import React from "react";
import Image from "next/image";
import styles from "./layout.module.scss";

export const metadata = { title: "FAQs" };

export default function FAQParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.faqs}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <Image
            width={200}
            height={161}
            className={styles.sticker}
            src="/stickers/more-community-less-ego-dwg-group-picture.svg"
            alt="'More Community, Less Ego' written above a group photo of DevFest Digital Working Group (2024)"
            priority
          />
          Get your questions answered
        </h2>
        {children}
      </div>
    </div>
  );
}
