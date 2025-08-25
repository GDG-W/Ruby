import { Button } from "@/components/button";
import styles from "./page.module.scss";
import "@/styles/global.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Button type="button">
        New button
      </Button>
    </div>
  );
}
