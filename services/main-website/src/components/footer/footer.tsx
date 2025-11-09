"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button/button";
import { SocialIcon } from "../socials/SocialIcon";
import styles from "./footer.module.scss";

const MotionImage = motion(Image);

const footerLinks = {
  topLeft: [
    { label: "Schedule", href: "/schedule" },
    { label: "Speakers", href: "/speakers" },
    { label: "DP Generator", href: "https://devfestlagos.com/dp-generator" },
  ],
  topRight: [
    // { label: "Map Venue", href: "/map" },
    { label: "Login", href: "https://tickets.devfestlagos.com/login" },
    {
      label: "Join the Community",
      href: "https://gdg.community.dev/gdg-lagos/",
    },
  ],
  bottomLeft: [
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policy", href: "https://policies.google.com/privacy" },
    {
      label: "Community Guidelines",
      href: "https://www.google.com/events/policy/anti-harassmentpolicy.html",
    },
  ],
};

const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/gdglagos",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gdglagos/",
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/people/Google-Developers-Group-Lagos/100075612535619/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@GDGLagos",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gdg-lagos",
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <MotionImage
          width={177}
          height={177}
          className={styles.sticker}
          src="/stickers/world-class-energy-globe.svg"
          alt="'World Class Energy' written above a green globe"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.68, -0.55, 0.265, 1.55],
          }}
        />

        <div className={styles.title}>
          <span>DevFest</span>
          <Button
            type="link"
            href="https://tickets.devfestlagos.com/buy"
            className={styles.cta}
            target="_blank"
          >
            Buy Tickets
          </Button>
          <br />
          <span className={styles.nowrap}>Lagos 2025</span>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <ul className={styles.links}>
              {footerLinks.topLeft.map((link) => (
                <li key={link.href} className={styles.link}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href}>{link.label}</Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <ul className={styles.links}>
              {footerLinks.topRight.map((link) => (
                <li key={link.href} className={styles.link}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href}>{link.label}</Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <ul className={styles.links}>
              {footerLinks.bottomLeft.map((link) => (
                <li key={link.href} className={styles.link}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href}>{link.label}</Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles.socialSection}>
              <h3 className={styles.socialHeading}>Follow Us:</h3>
              <div className={styles.socialIcons}>
                {socialLinks.map((social) => (
                  <a
                    target="_blank"
                    key={social.name}
                    href={social.href}
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <SocialIcon name={social.name.toLowerCase()} size={50} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social + imagery */}
          <div className={styles.right}>
            <Button
              size="sm"
              type="link"
              href="https://tickets.devfestlagos.com/buy"
              target="_blank"
              className={styles.mobileCta}
            >
              Buy Tickets
            </Button>
            <Image
              width={2500}
              height={1407}
              quality={100}
              src="/footer.webp"
              alt="DevFest Lagos Community"
              className={styles.desktopImage}
            />
            <Image
              width={2000}
              height={1126}
              quality={100}
              src="/footer-mobile.webp"
              alt="DevFest Lagos Community"
              className={styles.mobileImage}
            />
          </div>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} DevFest Lagos. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
