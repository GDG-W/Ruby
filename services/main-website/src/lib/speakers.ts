import acekyd from "../assets/demo-speakers/acekyd.png";
import adora from "../assets/demo-speakers/adora.png";
import ayomide from "../assets/demo-speakers/ayomide.png";
import idk from "../assets/demo-speakers/idk.png";
import type { SpeakerProps } from "../components/speaker/speaker";

export const demoSpeakers: SpeakerProps[] = [
  {
    name: "Ace Kyd",
    tagline: "Software Engineer, Google",
    image: acekyd.src,
    bio: "With over five years of experience in Quality Assurance, penetration testing, and automation, Oluwaseyi brings a thorough and meticulous approach to software testing.",
    socialMedia: [
      {
        type: "twitter",
        url: "https://twitter.com/acekyd",
      },
    ],
  },
  {
    name: "Adora",
    tagline: "Software Engineer, Microsoft",
    image: adora.src,
    bio: "With over five years of experience in Quality Assurance, penetration testing, and automation, Oluwaseyi brings a thorough and meticulous approach to software testing.",
    socialMedia: [
      {
        type: "twitter",
        url: "https://twitter.com/adorab",
      },
    ],
  },
  {
    name: "Ayomide",
    tagline: "Software Engineer, Facebook",
    image: ayomide.src,
    bio: "With over five years of experience in Quality Assurance, penetration testing, and automation, Oluwaseyi brings a thorough and meticulous approach to software testing.",
    socialMedia: [
      {
        type: "twitter",
        url: "https://twitter.com/ayomide",
      },
    ],
  },
  {
    name: "Idk",
    tagline: "Software Engineer, Amazon",
    image: idk.src,
    bio: "With over five years of experience in Quality Assurance, penetration testing, and automation, Oluwaseyi brings a thorough and meticulous approach to software testing.",
    socialMedia: [
      {
        type: "twitter",
        url: "https://twitter.com/idk",
      },
    ],
  },
];
