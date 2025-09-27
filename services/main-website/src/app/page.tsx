import { HomepageHero } from "@/components/homepage/hero/hero";
import styles from "./page.module.scss";
import Throwback from "@/components/homepage/throwback/throwback";
import GDG from "@/components/homepage/gdg/gdg";
import FAQs from "@/components/homepage/faqs/faqs";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomepageHero />
      <Throwback />
      <GDG />
      <FAQs />
    </div>
  );
}
