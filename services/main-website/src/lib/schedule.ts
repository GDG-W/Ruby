export const sampleScheduleData = [
  {
    title: "WEB3 AND BLOCKCHAIN, OPEN SOURCE DAY",
    description: "Join us for a full day dedicated to the art and strategy of product design. From concept to execution, this track guides you through impactful user-centered design practices, creative problem-solving, and real-world innovation.",
    date: "Thu 20",
    shortLabel: "Day 1",
    scheduleItems: [
      {
        id: "1",
        title: "Keynote Speech",
        speakers: [{ name: "Faith Onasanya" }],
        room: 1,
        sessionType: "keynote" as const
      },
      {
        id: "2",
        title: "AI in Your Creative Toolkit: Practical Strategies",
        speakers: [
          { name: "Faith Onasanya" },
          { name: "Ijeoma Solomon" },
          { name: "Temitope Aiyegbusi" }
        ],
        room: 2
      },
      {
        id: "3",
        title: "Building Products People Love, Not Just Use",
        speakers: [{ name: "Ijeoma Solomon" }],
        room: 1,
        isBreakoutSession: true
      }
    ]
  },
  {
    title: "DESIGN AND PRODUCT DAY",
    description: "Join us for a full day dedicated to the art and strategy of product design. From concept to execution, this track guides you through impactful user-centered design practices, creative problem-solving, and real-world innovation.",
    date: "Fri 21",
    shortLabel: "Day 2",
    scheduleItems: [
      {
        id: "4",
        title: "Keynote Speech",
        speakers: [{ name: "Faith Onasanya" }],
        room: 1,
        sessionType: "keynote" as const
      },
      {
        id: "5",
        title: "AI in Your Creative Toolkit: Practical Strategies",
        speakers: [
          { name: "Faith Onasanya" },
          { name: "Ijeoma Solomon" },
          { name: "Temitope Aiyegbusi" }
        ],
        room: 2
      },
      {
        id: "6",
        title: "Building Products People Love, Not Just Use",
        speakers: [{ name: "Ijeoma Solomon" }],
        room: 1,
        isBreakoutSession: true
      }
    ]
  },
  {
    title: "DEVELOPMENT DAY",
    description: "Dive deep into modern development practices, frameworks, and tools. This day focuses on practical coding skills, architecture patterns, and emerging technologies that will shape the future of software development.",
    date: "Sat 22",
    shortLabel: "Day 3",
    scheduleItems: [
      {
        id: "7",
        title: "Designing with Co-Intelligence: AI + Human Insight",
        speakers: [{ name: "Ijeoma Solomon" }],
        room: 2,
        isBreakoutSession: true
      }
    ]
  },
  {
    title: "AI AND MACHINE LEARNING DAY",
    description: "Explore the cutting-edge world of artificial intelligence and machine learning. Learn about practical applications, ethical considerations, and how to integrate AI into your projects and workflows.",
    date: "Sun 23",
    shortLabel: "Day 4",
    scheduleItems: [
      {
        id: "8",
        title: "Mini-Workshop: Crafting a UX Product Vision",
        speakers: [{ name: "Ijeoma Solomon" }],
        room: 3,
        sessionType: "workshop" as const,
        isBreakoutSession: true
      }
    ]
  },
  {
    title: "CAREER AND NETWORKING DAY",
    description: "Focus on professional growth, networking opportunities, and career development in tech. Connect with industry leaders, learn about career paths, and build meaningful professional relationships.",
    date: "Mon 24",
    shortLabel: "Day 5",
    scheduleItems: [
      {
        id: "9",
        title: "Mini-Workshop: Crafting a UX Product Vision",
        speakers: [
          { name: "Faith Onasanya" },
          { name: "Ijeoma Solomon" }
        ],
        room: 1,
        sessionType: "workshop" as const
      }
    ]
  }
];
