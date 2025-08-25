import { Button } from "@/components/button";
import {HomepageHero} from "@/components/homepage-hero";
import styles from "./page.module.scss";
import "@/styles/global.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomepageHero/>
    </div>
  );
}
