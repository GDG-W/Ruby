import Image from "next/image";
import type React from "react";
import GDG from "@/components/homepage/gdg/gdg";
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
          <span>Get your questions answered</span>
        </h2>
        <p className={styles.description}>
          From registration to what to expect on the day, our FAQs have all the
          info you need.
        </p>
        {children}
      </div>
      <GDG />
    </div>
  );
}
