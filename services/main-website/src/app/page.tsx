import { HomepageHero } from "@/components/homepage/hero/hero";
import styles from "./page.module.scss";
import FAQs from "@/components/homepage/faqs/faqs";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomepageHero />
      <FAQs />
    </div>
  );
}
