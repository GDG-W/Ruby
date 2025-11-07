"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import closeIcon from "@/assets/close.svg";
import hamburgerIcon from "@/assets/hamburger.svg";
import navLogo from "@/assets/nav-logo.svg";
import { Button } from "../button/button";
import styles from "./navbar.module.scss";

const links = [
  {
    link: "/schedule",
    text: "Schedule",
  },
  {
    link: "/speakers",
    text: "Speakers",
  },
  {
    link: "/faqs",
    text: "FAQs",
  },
  {
    link: "/team",
    text: "Team",
  },
];

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const isOnHomepage = pathname === "/";

  return (
    <>
      <div className={styles.navbarBackground}>
        <motion.nav
          className={styles.navbar}
          initial={{
            opacity: isOnHomepage ? 0 : 1,
            y: isOnHomepage ? 23 : 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 1, ease: [0, 0, 0, 1], delay: 0.6 }}
        >
          <Link href="/" className={styles.logo}>
            <Image src={navLogo} alt="DevFest Lagos" />
          </Link>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.link}>
                <Link
                  href={link.link}
                  onClick={() => setNavOpen(false)}
                  className={clsx(
                    styles.link,
                    styles[link.link.replace("/", "")],
                    {
                      [styles.active]: pathname === link.link,
                    },
                  )}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="https://tickets.devfestlagos.com" target="_blank">
            <Button size="sm" className={styles.buyTicket}>
             BUY TICKETS
            </Button>
          </Link>
          <Button
            className={styles.mobileNavButton}
            onClick={() => setNavOpen(true)}
          >
            <Image src={hamburgerIcon} alt="Open menu" />
          </Button>
        </motion.nav>
      </div>
      <aside className={clsx(styles.mobileNav, { [styles.open]: navOpen })}>
        <div className={styles.topRow}>
          <div className={styles.logo}>
            <Image src={navLogo} alt="DevFest Lagos" />
          </div>
          <Button
            className={styles.mobileNavClose}
            onClick={() => setNavOpen(false)}
          >
            <Image src={closeIcon} alt="Close menu" />
          </Button>
        </div>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.link}>
              <Link
                href={link.link}
                onClick={() => setNavOpen(false)}
                className={clsx(styles.link, {
                  [styles.active]: pathname === link.link,
                })}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <Button className={styles.buyTicket}>BUY TICKETS</Button>
      </aside>
    </>
  );
}
