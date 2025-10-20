import { notFound } from "next/navigation";
import { Button } from "@/components/button/button";
import FaqItem from "@/components/faq-item/faq-item";
import { FAQ_DATA, TAB_LABELS, TABS, type Tab } from "@/data/faqs";
import styles from "./page.module.scss";

export const dynamic = "force-static";

export default function FAQs({ params }: { params: { tab: string } }) {
  const tab = params.tab as Tab;
  if (!TABS.includes(tab)) return notFound();

  const faqs = FAQ_DATA[tab];

  return (
    <>
      <div className={styles.tabs}>
        {TABS.map((slug) => (
          <Button
            key={slug}
            type="link"
            href={`/faqs/${slug}`}
            variant={slug === tab ? "primary" : "tertiary"}
          >
            {TAB_LABELS[slug]}
          </Button>
        ))}
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
