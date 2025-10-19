import Image from "next/image";
import Link from "next/link";
import { Button } from "../button/button";
import styles from "./footer.module.scss";

const footerLinks = {
  topLeft: [
    { label: "Schedule", href: "/schedule" },
    { label: "Speakers", href: "/speakers" },
    { label: "DP Generator", href: "/" },
  ],
  topRight: [
    { label: "Map Venue", href: "/map" },
    { label: "Claim Ticket", href: "/" },
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
    icon: "/socials/x.svg",
    href: "https://x.com/gdglagos",
  },
  {
    name: "Instagram",
    icon: "/socials/instagram.svg",
    href: "https://www.instagram.com/gdglagos/",
  },
  {
    name: "Facebook",
    icon: "/socials/facebook.svg",
    href: "https://web.facebook.com/people/Google-Developers-Group-Lagos/100075612535619/",
  },
  {
    name: "YouTube",
    icon: "/socials/youtube.svg",
    href: "https://www.youtube.com/@GDGLagos",
  },
  {
    name: "LinkedIn",
    icon: "/socials/linkedin.svg",
    href: "https://www.linkedin.com/company/gdg-lagos",
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          width={177}
          height={177}
          className={styles.sticker}
          src="/stickers/world-class-energy-globe.svg"
          alt="'World Class Energy' written above a green globe"
        />

        <div className={styles.title}>
          <span>DevFest</span>
          <Button type="link" href="/" className={styles.cta}>
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
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles.links}>
              {footerLinks.topRight.map((link) => (
                <li key={link.href} className={styles.link}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles.links}>
              {footerLinks.bottomLeft.map((link) => (
                <li key={link.href} className={styles.link}>
                  <Link href={link.href}>{link.label}</Link>
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
                    <Image
                      src={social.icon}
                      width={50}
                      height={50}
                      alt={social.name}
                    />
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
              href="/buy"
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
          © 2025 DevFest Lagos. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
