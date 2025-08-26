import { HomepageHero } from "@/components/homepage/hero/hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomepageHero />
    </div>
  );
}
