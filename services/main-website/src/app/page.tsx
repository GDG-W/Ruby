import FAQs from "@/components/homepage/faqs/faqs";
import GDG from "@/components/homepage/gdg/gdg";
import { HomepageHero } from "@/components/homepage/hero/hero";
import { ScheduleSection } from "@/components/homepage/schedule/schedule";
import { SecureTicket } from "@/components/homepage/secure-ticket/secure-ticket";
import { Speakers } from "@/components/homepage/speakers/speakers";
import { Sponsor } from "@/components/homepage/sponsor/sponsor";
import Throwback from "@/components/homepage/throwback/throwback";
import { Tracks } from "@/components/homepage/tracks/tracks";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomepageHero />
      <Sponsor />
      <SecureTicket />
      <Speakers />
      <Tracks />
      <ScheduleSection />
      <Throwback />
      <GDG />
      <FAQs />
    </div>
  );
}
