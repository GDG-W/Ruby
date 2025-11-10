export const TABS = ["general", "tickets"] as const;
export type Tab = (typeof TABS)[number];

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_DATA: Record<Tab, FAQ[]> = {
  general: [
    {
      id: 1,
      question: "What is Devfest?",
      answer:
        "DevFest is an annual developer conference organized by Google Developers Groups (GDGs) across the world. The event brings together tech-enthusiasts, developers, and industry experts to share knowledge, experience, and innovation.",
    },
    {
      id: 2,
      question: "What is Devfest Lagos 2025?",
      answer:
        "DevFest Lagos 2025 is a five-day tech festival where tech enthusiasts, from beginners to experts, and everyone in between in one place.",
    },
    {
      id: 3,
      question: "When & where will DevFest Lagos 2025 take place?",
      answer:
        "DevFest Lagos 2025 will be held between 18th to 22nd of November 2025, with each day's session kickstarting by 9:00 AM prompt at the National Theatre, Iganmu, Lagos.",
    },
    {
      id: 4,
      question: "What should I expect at Devfest Lagos 2025?",
      answer:
        "DevFest Lagos 2025 is obviously going to be bigger and better! This time, the focus goes beyond learning from industry experts, or  connecting with like-minded professionals, or gaining insights into the latest trends and innovations in technology, but also enjoying an unforgettable experience with lots of fun, relaxation, and  memories to last a lifetime.",
    },
    {
      id: 5,
      question: "How can I register for DevFest Lagos 2025?",
      answer:
        "To attend DevFest Lagos 2025, you must register through the official event registration platform at tickets.devfestlagos.com. You can select the day you want to attend based on the interest of those days.",
    },
    {
      id: 6,
      question: "What if I register and can't attend any more?",
      answer:
        "Tickets are non-refundable for DevFest Lagos 2025  and not transferable. Each ticket is tied to a specific attendee and cannot be transferred to another person.",
    },
    {
      id: 7,
      question: "Is there a code of conduct for attendees?",
      answer:
        "Yes, there is a community conduct guideline that all attendees are expected to follow. We are committed to creating a safe and inclusive environment for all participants. Please review and adhere to our conduct guidelines to ensure a respectful and enjoyable experience for everyone. Community Guidelines - https://developers.google.com/community-guidelines",
    },
    {
      id: 8,
      question:
        "How can I get updates and announcements about DevFest Lagos 2025?",
      answer:
        "Stay tuned for updates and announcements by following our official social media channels and checking the event website. You can also subscribe to our newsletter to receive the latest information about speakers, sessions, and event details.",
    },
    {
      id: 10,
      question: "Can I volunteer to help make DevFest Lagos 2025 a success?",
      answer:
        "Yes, we welcome volunteers who are passionate about contributing to the success of DevFest Lagos 2025. To join our volunteer team, please follow us on our social media channels for updates and information on how to get involved.",
    },
    {
      id: 11,
      question:
        "I'm a non-technical person, can I still attend DevFest Lagos 2025?",
      answer:
        "Yes you can. We have sessions which also cover the writing, product design and management aspect of tech.",
    },
    {
      id: 12,
      question:
        "Can I still submit a proposal for a session or workshop (Call for Papers)?",
      answer:
        "No you can't. Call for papers for DevFest Lagos 2025 is officially closed.",
    },
  ],
  tickets: [
    {
      id: 1,
      question: "Can I buy tickets for the event through this platform?",
      answer:
        "Yes! This platform allows you to securely purchase tickets for the five-day event.",
    },
    {
      id: 2,
      question: "Is lunch or swag included in my ticket?",
      answer:
        "No — meals and merchandise are not included by default. However, some vendor stalls and sponsors may offer giveaways during the event.",
    },
    {
      id: 3,
      question: "What if I register and can’t attend any more?",
      answer:
        "Tickets are non-refundable for DevFest Lagos 2025  and not transferable. Each ticket is tied to a specific attendee and cannot be transferred to another person.",
    },
    {
      id: 4,
      question: "How do I pay for my ticket?",
      answer:
        "We have a number of payment options for your convenience - card payment, bank transfer, USSD",
    },
    {
      id: 5,
      question: "Can I buy tickets for other people?",
      answer:
        "Absolutely!  You can purchase tickets for others, but keep in mind they will need to register for the event separately to claim their tickets.",
    },
    {
      id: 6,
      question:
        "What information do I need to provide when buying tickets for others?",
      answer:
        "You will need to provide the email address for each person you are purchasing tickets for.",
    },
    {
      id: 7,
      question:
        "Will the people I buy tickets for receive a confirmation email?",
      answer:
        "Yes, they will  receive a confirmation email with the tickets attached.  They will receive an email prompting them to register for the event, and upon successful registration, they will be able to claim their tickets.",
    },
    {
      id: 8,
      question:
        "I want to purchase tickets for more than 10 people. What should I do?",
      answer:
        "For bulk ticket purchases (more than 10), please email us at team@gdglagos.com and we’ll help process your order.",
    },
    {
      id: 9,
      question: "What does a ticket grant me access to?",
      answer:
        "All ticket categories provide full access to all talks, workshops, sponsor booths, and product showcases on the days they cover.",
    },
    {
      id: 10,
      question:
        "I purchased a ticket for a day or more, but now I want to attend other days. Can I upgrade my ticket?",
      answer:
        "Yes, you can upgrade your ticket by purchasing additional days to add to your current ticket. This way, you’ll be able to attend on more days.",
    },
    {
      id: 11,
      question: "How do I upgrade my ticket?",
      answer:
        "Simply log in to your DevFest Lagos dashboard and navigate to the ticket details section. Then, follow the on-screen instructions to complete the upgrade process.",
    },
    {
      id: 12,
      question: "Will I receive a new ticket ID after upgrading?",
      answer:
        "No, your ticket ID remains the same after upgrading your ticket.",
    },
    {
      id: 13,
      question:
        "I purchased a ticket for someone else. How do they claim their ticket?",
      answer:
        "The person you purchased a ticket for will receive an email prompting them to register for the event.  After successful registration, they will receive a confirmation email and they will be able to access the platform.",
    },
    {
      id: 14,
      question:
        "I haven't received an email to claim my ticket. What should I do?",
      answer:
        "First, check your spam folder.  If you still can't find the email, contact DevFest Lagos directly for assistance. team@gdglagos.com",
    },
    {
      id: 15,
      question: "Can I claim my ticket before registering for the event?",
      answer:
        "Unfortunately, no. Tickets can only be claimed after successful event registration.",
    },
  ],
};

export const TAB_LABELS: Record<Tab, string> = {
  general: "General",
  tickets: "Tickets",
};
