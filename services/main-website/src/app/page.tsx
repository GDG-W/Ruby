import { HomepageHero } from "@/components/homepage/hero/hero";
import styles from "./page.module.scss";
import GDG from "@/components/homepage/gdg/gdg";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomepageHero />
      <GDG />
    </div>
  );
}
