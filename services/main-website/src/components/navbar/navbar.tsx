"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import { Button } from "../button/button";
import { SvgIcon } from "@/components/icon";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

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
          <SvgIcon name="nav-logo" />
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
          <SvgIcon name="hamburger" />
        </Button>
      </nav>
      <aside className={clsx(styles.mobileNav, { [styles.open]: navOpen })}>
        <div className={styles.topRow}>
          <div className={styles.logo}>
            <SvgIcon name="nav-logo" />
          </div>
          <Button className={styles.mobileNavClose} onClick={() => setNavOpen(false)}>
            <SvgIcon name="close" />
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
