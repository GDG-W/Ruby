export type Member = {
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;
  readonly image: string;
  readonly music: {
    readonly artist: string;
    readonly song: string;
    readonly link: string;
  };
  readonly question: string;
  readonly answer: string;
  readonly socialMedia: ReadonlyArray<{
    readonly type: string;
    readonly url: string;
  }>;
};

export const members = [
  {
    firstName: "Isreal",
    lastName: "Aluko",
    role: "Engineering",
    image: "https://i.ibb.co/tMN1yjs7/20250629-133702.jpg",
    music: {
      artist: "Dai Verse",
      song: "Salt",
      link: "https://music.youtube.com/watch?v=dZxe2T7-3QQ&si=SbzBznfKp3AoD4Np",
    },
    question:
      "What's something people are usually surprised to learn about you?",
    answer:
      "People are usually surprised to learn that I started out studying Geophysics, not Computer Science. My path into tech came from curiosity — automating small tasks, breaking things, and learning to fix them again. That background taught me to think analytically and find patterns, which I now apply daily as a software engineer.",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/eazyisreal",
      },
      {
        type: "twitter",
        url: "https://www.x.com/eazyisreal",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/theeazyisreal",
      },
    ],
  },
  {
    firstName: "Daniel",
    lastName: "Umoren",
    role: "QA",
    image: "https://i.ibb.co/FqjrHVvr/IMG-2267.jpg",
    music: {
      artist: "Ahmed Spins",
      song: "Sawa (feat. Idd Aziz)",
      link: "https://music.youtube.com/watch?v=dzLu7elxnJI&si=WHLadbSstAt_028v",
    },
    question: "What's a quote you live by?",
    answer: "You can just do things!",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/daniel-umoren",
      },
      {
        type: "twitter",
        url: "https://x.com/the_umoren_",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/the_umoren_",
      },
    ],
  },
  {
    firstName: "Aliyyah",
    lastName: "Kalejaye",
    role: "Marketing",
    image: "https://i.ibb.co/sdLJJJW8/Headshot2.jpg",
    music: {
      artist: "Adekunle Gold",
      song: "Many People",
      link: "https://youtu.be/IjtDozgr7mo?si=G5bG50sWywdE155o",
    },
    question: "What's a quote you live by?",
    answer: '"My Enemy Na Sapa" - Rema',
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/aliyyah-kalejaye",
      },
      {
        type: "twitter",
        url: "https://twitter.com/AliyyahKalejaye",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/aliyyah_kalejaye",
      },
    ],
  },
  {
    firstName: "Florence",
    lastName: "Ogunbore",
    role: "Product Management",
    image: "https://i.ibb.co/3ypPbZ4R/DSC-5605.jpg",
    music: {
      artist: "Tevin Campbell",
      song: "Can We Talk",
      link: "https://music.youtube.com/watch?v=jRS9JPt5sdU&si=BjcOOSxojVcFSeEB",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "Working out tbh or just sleeping 🫠",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/florence-ogunbore",
      },
      {
        type: "twitter",
        url: "https://x.com/the_florencee",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/the_florencee",
      },
    ],
  },
  {
    firstName: "Moyomade",
    lastName: "Adegbite",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=2uQM-n_y-Hs&si=NSvcDQPqMxI0tsfG",
    },
    question: "What's a quote you live by?",
    answer: "If you can think it, you can do it.",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/moyomade-adegbite",
      },
      {
        type: "twitter",
        url: "https://x.com/moyomadee7",
      },
    ],
  },
  {
    firstName: "Treasure",
    lastName: "Ajefu",
    role: "Content",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=25MqD0hHo14&si=uYByL156sHl4YqWS",
    },
    question: "What's a quote you live by?",
    answer:
      '"whatever happens, happens". anything that is going to happen will happen, and if no amount of anxiety or unrest will change the outcome then i try not no worry about it.',
    socialMedia: [
      {
        type: "linkedin",
        url: "https://linkedin.com/in/treasure-ajefu",
      },
      {
        type: "twitter",
        url: "https://twitter.com/cybergenie_",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/cybergenie_",
      },
    ],
  },
  {
    firstName: "Sebastine",
    lastName: "Odeh",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=whbczRUgYQw&si=PhJEsIOtqPGvH8C8",
    },
    question:
      "What's something people are usually surprised to learn about you?",
    answer: "Being the first of four children",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/sebastine-odeh-1081a318b",
      },
      {
        type: "twitter",
        url: "https://x.com/H3ndrick_",
      },
    ],
  },
  {
    firstName: "Faisal",
    lastName: "Adams Omokugbo",
    role: "Content",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=7uk8X3_23xY&si=DduYfTY7GZrt3FVt",
    },
    question: "What's a quote you live by?",
    answer:
      "When I get anxious opening my laptop to code or start a new project, I read this quote aloud: The idea of an Imposter syndrome is great, it means you are doing something worth wile. Use it to motivate yourself. Its normal to fail, Fail several times till you get it. You will get it eventually and finally, You become what you believe.",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/faisal-adams-omokugbo/",
      },
      {
        type: "twitter",
        url: "https://twitter.com/code_crushed",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/code_crushed",
      },
    ],
  },
  {
    firstName: "Durosinlohun",
    lastName: "Uthman Olalekan",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=EVwh5pJj5KY&si=bXXfXxDn76IEcVXP",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "When i need a mental reset i go out to play squash",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/uthmanduro",
      },
      {
        type: "twitter",
        url: "https://x.com/lekan_duro",
      },
    ],
  },
  {
    firstName: "Efe",
    lastName: "Akhigbe",
    role: "Design",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=0bAIVYkDTWM&si=cx8q5GM6L4sG5vyH",
    },
    question: "What's a quote you live by?",
    answer:
      'A quote I live by is "I can do all things through Christ who strengthens me." — Philippians 4:13. It constantly reminds me that with faith and determination, nothing is impossible.',
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/efeakhigbe",
      },
      {
        type: "twitter",
        url: "https://twitter.com/efe_akhigbe",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/efe_akhigbe",
      },
    ],
  },
  {
    firstName: "Emmanuel",
    lastName: "Olubiyi",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=VhdAZ2aQtBk&si=cJuVkDlAL5tbYBuL",
    },
    question: "What's a quote you live by?",
    answer: "Surviving is winning, keep going, it will make sense one day",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/emmanuel-olubiyi/",
      },
      {
        type: "twitter",
        url: "https://x.com/lord_emmo",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/lord_emmo_/",
      },
    ],
  },
  {
    firstName: "Faith",
    lastName: "Onasanya",
    role: "Design",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=6F_0p1T2Lgc&si=XbKf_4PBVrzBAqOg",
    },
    question: "What's a quote you live by?",
    answer:
      '"Do the best you can until you know better. Then when you know better , do better "- Maya Angelou',
    socialMedia: [
      {
        type: "linkedin",
        url: "https://ng.linkedin.com/in/faithonasanya",
      },
      {
        type: "twitter",
        url: "https://twitter.com/FaithOnasanyaa",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/_i.am.faith",
      },
    ],
  },
  {
    firstName: "Khadijah",
    lastName: "Abdulkabir",
    role: "Design",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=-0BDGSeAn1w&si=j0qxsgKV1-oW7QZw",
    },
    question: "What's a quote you live by?",
    answer:
      'Wa ma tawfiqi illa billah translates to "And verily my success is only by Allah"',
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/khadijah-abdulkabir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        type: "twitter",
        url: "https://twitter.com/TheUI_Niqabi",
      },
    ],
  },
  {
    firstName: "Rebecca",
    lastName: "Adegbesan",
    role: "Design",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://youtu.be/nomxXk6Q1rk?si=xuZgpmN2QmoQHMBk",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "Shawama and Exotic",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/rebecca-adegbesan-99a8a7185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        type: "twitter",
        url: "https://twitter.com/Rhebhek",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/Beyccaa",
      },
    ],
  },
  {
    firstName: "TemiTope",
    lastName: "Aiyegbusi",
    role: "Design",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://www.youtube.com/watch?v=z_gtrZ63sIw&list=RDz_gtrZ63sIw&start_radio=1",
    },
    question: "What's a quote you live by?",
    answer: "Do Hard things, that is where growth lies",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/ttaiyegbusi/",
      },
      {
        type: "twitter",
        url: "https://x.com/aiyegbusitope",
      },
    ],
  },
  {
    firstName: "Motunrayo",
    lastName: "Sanni",
    role: "QA",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=r0Nv_e9E-e0&si=EQfgf2X3PKNigDb-",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "Sleeping / Reading a book (fiction)",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/motunrayo-sanni",
      },
      {
        type: "twitter",
        url: "https://twitter.com/dearmotun",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/dearmotun",
      },
    ],
  },
  {
    firstName: "Ijeoma",
    lastName: "Odiaka",
    role: "Design",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=nHNPT_QPQ_U&si=7__MUe69vY_No1c9",
    },
    question: "Tell us about your DevFest Lagos 2025 experience",
    answer: "It was an interesting experience working with the Devfest team.",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/ijeoma-odiaka?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/aijay_26?igsh=MTlsb2YxdjM2MG9yNQ%3D%3D&utm_source=qr",
      },
    ],
  },
  {
    firstName: "Malik",
    lastName: "Temitope Usamot",
    role: "Content",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=JUyaw8zrsBg&si=hLllP_kB4Mkphb6Y",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "Binge Watch a Movie Series or Go cycling",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/thebnusamot",
      },
      {
        type: "twitter",
        url: "https://x.com/journalwmalik",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/journalwithmalik",
      },
    ],
  },
  {
    firstName: "Tolulope",
    lastName: "Johnson",
    role: "Design",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=LvL-zoIJJ3Q",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "When I need a mental reset I take a very long walk",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/tolulopejohnson/",
      },
      {
        type: "twitter",
        url: "https://x.com/_techegbon",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/dejolasgraphics/",
      },
    ],
  },
  {
    firstName: "Timilehin",
    lastName: "Omolana",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=7IfYUm1j_cI&si=4edm4nsQi0UtHKMN",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer:
      "I've got an instant vibe-shifter built right into my desk. My piano lives in a drawer, powered up 24/7. The second I need a mental reset, I just pull it out and tickle the ivories 'til my brain's back online! :)",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://linkedin.com/in/timmyomolana",
      },
    ],
  },
  {
    firstName: "Favour",
    lastName: "Attah",
    role: "Content",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=qOlQn8bFtbU&si=_Joxf8uRQCCIEMn0",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "Sleeping 😂",
    socialMedia: [
      {
        type: "linkedin",
        url: "http://linkedin.com/in/favourattah",
      },
    ],
  },
  {
    firstName: "Gabriel",
    lastName: "Shoyombo",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=AxZfngXkVq4&si=F8-EKcgBnPhIuvVU",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "Movies or sleep",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/gabriel-shoyombo-0666511bb",
      },
      {
        type: "twitter",
        url: "https://twitter.com/theDocWhoCodes",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/realdrprime",
      },
    ],
  },
  {
    firstName: "Samuel",
    lastName: "Abada",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=YE6jg1_RSec&si=Ev_CsC947rUCKwoF",
    },
    question: "What's a quote you live by?",
    answer:
      "if you gaze long into an abyss, the abyss also gazes into you. Be careful not to blink",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/abada-samuel/",
      },
      {
        type: "twitter",
        url: "https://twitter.com/mastersam_",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/codefarmer_",
      },
    ],
  },
  {
    firstName: "Okunoye",
    lastName: "David",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=1rMFPDMiMVg&list=PLzgUv3CnsSzU4-SanCOzdY4xjUubVd-uv",
    },
    question:
      "What's something people are usually surprised to learn about you?",
    answer: "I'm an instrumentalist",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/david-okunoye-777b691a8/",
      },
      {
        type: "twitter",
        url: "https://twitter.com/drexjs",
      },
    ],
  },
  {
    firstName: "Oyeyemi",
    lastName: "Ifeoluwa",
    role: "Engineering",
    image: "https://i.ibb.co/nqjSvPxR/IMG-1705-3.png",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=2MHsDNV9lgY",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer:
      "When I need a mental reset, I get a bottle of wine, cake and a book.",
    socialMedia: [
      {
        type: "twitter",
        url: "https://twitter.com/yourfavoriteife",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/ifeoluwa.oyeyemi",
      },
    ],
  },
  {
    firstName: "Oye",
    lastName: "Sobowale",
    role: "Design",
    image: "",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=zLdT_0YfPLk&si=MZnJgzC23lFsqaVV",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "Reading",
    socialMedia: [
      {
        type: "twitter",
        url: "https://x.com/oyeuniverse",
      },
    ],
  },
  {
    firstName: "Kruse",
    lastName: "Chukwurah",
    role: "Engineering",
    image: "",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=J2ZxdqNYROY&si=-lBY-ol55nVVNcKH",
    },
    question: "What's your comfort activity when you need a mental reset?",
    answer: "Listening to Music",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://linkedin.com/in/chukwuemekachukwurah",
      },
      {
        type: "twitter",
        url: "https://twitter.com/chukwurah__",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/I.am.chukwuemeka",
      },
    ],
  },
  {
    firstName: "Williams",
    lastName: "Eni",
    role: "Design",
    image: "",
    music: {
      artist: "",
      song: "",
      link: "https://music.youtube.com/watch?v=1sl7-yLNm_E&si=VcwvwCiUM684G75X",
    },
    question: "What's a quote you live by?",
    answer: '"There are cathedrals everywhere for those with eyes to see"',
    socialMedia: [
      {
        type: "linkedin",
        url: "https://linkedin.com/in/williamseni",
      },
      {
        type: "twitter",
        url: "https://twitter.com/itxbo",
      },
      {
        type: "instagram",
        url: "https://instagram.com/itxbo__",
      },
    ],
  },
  {
    firstName: "Oluwatobiju",
    lastName: "Omotosho",
    role: "Engineering",
    image: "",
    music: {
      artist: "",
      song: "",
      link: "",
    },
    question: "",
    answer: "",
    socialMedia: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/oluwatobiju-judah-omotosho/",
      },
    ],
  },
] as const;
