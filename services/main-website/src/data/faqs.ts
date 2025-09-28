export const TABS = ["general", "tickets"] as const;
export type Tab = (typeof TABS)[number];

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_DATA: Record<Tab, FAQ[]> = {
  "general": [
    {
      id: 1,
      question: "What is DevFest Lagos 2025?",
      answer:
        "DevFest Lagos 2025 is the largest Google developer community event in Lagos, bringing together developers for a day of talks, codelabs and networking.",
    },
    {
      id: 2,
      question: "Who can attend DevFest Lagos 2025?",
      answer:
        "Anyone interested in tech is welcome—students, professionals, or hobbyists.",
    },
    {
      id: 3,
      question: "Where will the event take place?",
      answer: "The venue will be announced soon on our official channels.",
    },
  ],
  tickets: [
    {
      id: 1,
      question: "How do I buy a ticket?",
      answer: "Tickets can be purchased on our website via the Tickets page.",
    },
    {
      id: 2,
      question: "Are tickets refundable?",
      answer:
        "Tickets are non-refundable but you can transfer them to another participant until Oct 31, 2025.",
    },
    {
      id: 3,
      question: "Is lunch included?",
      answer:
        "Lunch is not included, but food vendors will be available on-site.",
    },
  ],
};

export const TAB_LABELS: Record<Tab, string> = {
  "general": "General",
  tickets: "Tickets",
};
