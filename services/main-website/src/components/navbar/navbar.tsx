"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import navLogo from "@/assets/nav-logo.svg";
import { Button } from "../button/button";
import hamburgerIcon from "@/assets/hamburger.svg";
import closeIcon from "@/assets/close.svg";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image src={navLogo} alt="DevFest Lagos" />
        </Link>
        <ul className={styles.links}>
          {
            links.map((link) => (
              <li key={link.link}>
                <Link
                  href={link.link}
                  onClick={() => setNavOpen(false)}
                  className={clsx(styles.link, { [styles.active]: pathname === link.link })}
                >
                  {link.text}
                </Link>
              </li>

            ))}
        </ul>
        <Button size="sm" className={styles.buyTicket}>
          BUY TICKETS
        </Button>
        <Button className={styles.mobileNavButton} onClick={() => setNavOpen(true)}>
          <Image src={hamburgerIcon} alt="Open menu" />
        </Button>
      </nav>
      <aside className={clsx(styles.mobileNav, { [styles.open]: navOpen })}>
        <div className={styles.topRow}>
          <div className={styles.logo}>
            <Image src={navLogo} alt="DevFest Lagos" />
          </div>
          <Button className={styles.mobileNavClose} onClick={() => setNavOpen(false)}>
            <Image src={closeIcon} alt="Close menu" />
          </Button>
        </div>
        <ul className={styles.links}>
          {
            links.map(link => (
              <li key={link.link}>
                <Link
                  href={link.link}
                  onClick={() => setNavOpen(false)}
                  className={clsx(styles.link, { [styles.active]: pathname === link.link })}
                >
                  {link.text}
                </Link>
              </li>
            ))
          }
        </ul>
        <Button className={styles.buyTicket}>
          BUY TICKETS
        </Button>
      </aside>
    </>
  );
}
