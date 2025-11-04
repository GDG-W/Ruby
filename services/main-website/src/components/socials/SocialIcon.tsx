import clsx from "clsx";
import type React from "react";
import { FacebookIcon } from "./FacebookIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { XIcon } from "./XIcon";
import { YoutubeIcon } from "./YoutubeIcon";
import styles from "./social-icon.module.scss";

export type SocialIconName =
  | "twitter"
  | "instagram"
  | "facebook"
  | "youtube"
  | "linkedin"
  | "github";

type Props = {
  name: SocialIconName | string;
  size?: number;
  className?: string;
};

export function SocialIcon({ name, size = 50, className }: Props): React.JSX.Element | null {
  const key = String(name).toLowerCase();

  const iconClassName = clsx(styles.icon, className);

  switch (key) {
    case "twitter":
    case "x":
      return <XIcon size={size} className={iconClassName} />;
    case "instagram":
      return <InstagramIcon size={size} className={iconClassName} />;
    case "facebook":
      return <FacebookIcon size={size} className={iconClassName} />;
    case "youtube":
      return <YoutubeIcon size={size} className={iconClassName} />;
    case "linkedin":
      return <LinkedinIcon size={size} className={iconClassName} />;
    case "github":
      // Placeholder: using Facebook icon until a GitHub icon is provided
      return <FacebookIcon size={size} className={iconClassName} />;
    default:
      return null;
  }
}


