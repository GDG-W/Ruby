import clsx from "clsx";
import NextLink, { type LinkProps } from "next/link";
import type React from "react";
import styles from "./button.module.scss";

type Variant = "primary" | "secondary" | "tertiary";

type BaseProps = {
  children: React.ReactNode;
  size?: "sm" | "default";
  variant?: Variant;
  className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: "button";
};
type NextLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  type: "a";
  to: string;
};
type ExternalLinkProps = LinkProps & { type: "link"; target?: string };

type Props = BaseProps & (ButtonProps | NextLinkProps | ExternalLinkProps);

export function Button(props: Props) {
  const { children, variant = "primary" } = props;

  const className = clsx(
    styles.button,
    props.className,
    styles[variant],
    props.size === "sm" && styles.small,
  );

  switch (props.type) {
    case "link":
      return (
        <NextLink {...props} className={className}>
          {children}
        </NextLink>
      );
    case "a":
      return (
        <a {...props} className={className}>
          {children}
        </a>
      );
    default:
      return (
        <button {...props} className={className}>
          {children}
        </button>
      );
  }
}
