import { HomepageHero } from "@/components/homepage/hero/hero";
import styles from "./page.module.scss";
import { SecureTicket } from "@/components/homepage/secure-ticket/secure-ticket";
import { Tracks } from "@/components/homepage/tracks/tracks";
import { Speakers } from "@/components/homepage/speakers/speakers";
import Throwback from "@/components/homepage/throwback/throwback";
import GDG from "@/components/homepage/gdg/gdg";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomepageHero />
      <SecureTicket />
      <Speakers />
      <Tracks />
      <Throwback />
      <GDG />
    </div>
  );
}
