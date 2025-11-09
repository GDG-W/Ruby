import Hero from "@/components/team/hero/hero";
import Members from "@/components/team/members/members";
import styles from "./page.module.scss";

export default function TeamPage() {
  return (
    <div className={styles.team}>
      <Hero />
      <Members />
    </div>
  );
}
