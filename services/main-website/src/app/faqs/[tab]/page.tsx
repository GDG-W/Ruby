import { notFound } from "next/navigation";
import { FAQ_DATA, TABS, type Tab } from "@/data/faqs";
import FaqItem from "@/components/faq-item/faq-item";
import styles from "./page.module.scss";
import { Button } from "@/components/button/button";

export const dynamic = "force-static";

export default function FAQs({ params }: { params: { tab: string } }) {
  const tab = params.tab as Tab;
  if (!TABS.includes(tab)) return notFound();

  const faqs = FAQ_DATA[tab];
  return (
    <>
      <div className={styles.tabs}>
        <Button
          type="link"
          href="/faqs/devfest-lagos-2025"
          variant={tab === "devfest-lagos-2025" ? "primary" : "tertiary"}
        >
          DevFest Lagos 2025
        </Button>
        <Button
          type="link"
          href="/faqs/tickets"
          variant={tab === "tickets" ? "primary" : "tertiary"}
        >
          Tickets
        </Button>
      </div>
      <ul className={styles.list}>
        {faqs.map(({ id, question, answer }) => (
          <FaqItem key={id} id={id} question={question} answer={answer} />
        ))}
      </ul>
    </>
  );
}

export async function generateStaticParams() {
  return TABS.map((tab) => ({ tab }));
}
