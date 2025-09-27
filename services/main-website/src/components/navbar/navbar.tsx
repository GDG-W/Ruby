import Link from "next/link";
import styles from "./navbar.module.scss";
import NavLogo from "@/assets/nav-logo.svg";
import { Button } from "../button/button";

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
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <NavLogo />
      </Link>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.link}>
            <Link href={link.link} className={styles.link}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <Button size="sm">BUY TICKETS</Button>
    </nav>
  );
}
