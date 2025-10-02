import { notFound } from "next/navigation";
import { FAQ_DATA, TABS, TAB_LABELS, type Tab } from "@/data/faqs";
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
        {faqs.map(({ id, question, answer }, idx) => (
          <FaqItem key={id} idx={idx} question={question} answer={answer} />
        ))}
      </ul>
    </>
  );
}

export async function generateStaticParams() {
  return TABS.map((tab) => ({ tab }));
}
