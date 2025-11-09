"use client";

import clsx from "clsx";
import Image from "next/image";
import { SocialIcon } from "@/components/socials/SocialIcon";
import type { Member } from "@/data/members";
import sharedStyles from "./members.module.scss";
import styles from "./members-list.module.scss";

interface MembersListProps {
  members: readonly Member[];
}

export const MembersList = ({ members }: MembersListProps) => {
  return (
    <ul className={styles.list}>
      {members.map((member, index) => (
        <li
          key={`${member.firstName}-${member.lastName}-${index}`}
          className={styles.item}
        >
          <div className={styles.info}>
            <Image
              width={100}
              height={133}
              src={member.image}
              alt={member.firstName}
              className={styles.image}
            />
            <div className={styles.inner}>
              <p className={clsx(sharedStyles.firstName, styles.name)}>
                {member.firstName}
              </p>
              <p className={sharedStyles.lastName}>{member.lastName}</p>
              <p className={sharedStyles.role}>did {member.role}</p>
            </div>
          </div>

          <div className={styles.content}>
            <p className={sharedStyles.question}>{member.question}</p>
            <p className={sharedStyles.answer}>"{member.answer}"</p>
            <a href={member.music.link} target="_blank" rel="noopener noreferrer" className={sharedStyles.music}>
              <Image
                width={16}
                height={16}
                src="/yt-music.svg"
                alt="YouTube Music"
                className={sharedStyles.youtubeMusic}
              />
              <p>Listening to</p>
              <p className={sharedStyles.song}>
                {member.music.song} - {member.music.artist}
              </p>
            </a>
          </div>
          <div className={clsx(sharedStyles.social, styles.social)}>
            {member.socialMedia.map((social) => (
              <a
                target="_blank"
                href={social.url}
                key={social.type}
                rel="noopener noreferrer"
                className={sharedStyles.socialLink}
              >
                <SocialIcon name={social.type.toLowerCase()} size={50} />
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
