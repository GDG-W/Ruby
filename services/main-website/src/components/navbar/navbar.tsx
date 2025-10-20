"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CloseIcon from "@/assets/close.svg";
import HamburgerIcon from "@/assets/hamburger.svg";
import NavLogo from "@/assets/nav-logo.svg";
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

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <NavLogo />
        </Link>
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
        <Button size="sm" className={styles.buyTicket}>
          BUY TICKETS
        </Button>
        <Button
          className={styles.mobileNavButton}
          onClick={() => setNavOpen(true)}
        >
          <HamburgerIcon />
        </Button>
      </nav>
      <aside className={clsx(styles.mobileNav, { [styles.open]: navOpen })}>
        <div className={styles.topRow}>
          <div className={styles.logo}>
            <NavLogo />
          </div>
          <Button
            className={styles.mobileNavClose}
            onClick={() => setNavOpen(false)}
          >
            <CloseIcon />
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
