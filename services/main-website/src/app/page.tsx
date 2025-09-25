import { HomepageHero } from "@/components/homepage/hero/hero";
import styles from "./page.module.scss";
import { SecureTicket } from "@/components/homepage/secure-ticket/secure-ticket";
import { Tracks } from "@/components/homepage/tracks/tracks";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomepageHero />
      <SecureTicket />
      <Tracks />
    </div>
  );
}
