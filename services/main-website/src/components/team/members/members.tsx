"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { members } from "@/data/members";
import styles from "./members.module.scss";
import { MembersCarousel } from "./members-carousel";
import { MembersList } from "./members-list";

type ViewMode = "carousel" | "list";

const ROLES = [
  "All",
  "Organizer",
  "Design",
  "Engineering",
  "Product",
  "Marketing",
  "QA",
  "Content",
] as const;

const shuffle = <T,>(list: readonly T[]) => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const Members = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("carousel");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMembers = useMemo(() => {
    if (selectedRole === "All") return members;
    return members.filter(
      (member) => member.role.toLowerCase() === selectedRole.toLowerCase(),
    );
  }, [selectedRole]);

  const [shuffledMembers, setShuffledMembers] = useState(filteredMembers);

  useEffect(() => {
    setShuffledMembers(shuffle(filteredMembers));
  }, [filteredMembers]);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setIsModalOpen(false);
  };

  return (
    <section className={styles.members}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          The <br className={styles.break} /> Team
        </h2>

        <div className={styles.inner}>
          <button
            onClick={() => setIsModalOpen(true)}
            className={styles.dropdown}
          >
            {selectedRole}
          </button>
          <div className={styles.toggle}>
            <button
              aria-label="Carousel view"
              onClick={() => setViewMode("carousel")}
              className={clsx(
                styles.button,
                viewMode === "carousel" && styles.active,
              )}
            >
              <Image
                alt=""
                width={16}
                height={16}
                src="/carousel.svg"
                className={styles.icon}
              />
            </button>
            <button
              aria-label="List view"
              onClick={() => setViewMode("list")}
              className={clsx(
                styles.button,
                viewMode === "list" && styles.active,
              )}
            >
              <Image
                alt=""
                width={16}
                height={11}
                src="/list.svg"
                className={styles.icon}
              />
            </button>
            <span className={styles.label}>Layout</span>
          </div>
        </div>
      </div>

      {viewMode === "list" && (
        <div className={styles.filters}>
          <div className={styles.pills}>
            {ROLES.map((role) => (
              <button
                key={role}
                className={`${styles.pill} ${selectedRole === role ? styles.active : ""}`}
                onClick={() => setSelectedRole(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      )}

      {viewMode === "carousel" ? (
        <MembersCarousel members={shuffledMembers} />
      ) : (
        <MembersList members={shuffledMembers} />
      )}

      <Image
        src="/stickers/al:ml-prompt-like-a-pro.svg"
        alt="AI/ML Prompt Like a Pro"
        width={171}
        height={159}
        className={styles.sticker1}
      />
      <Image
        src="/stickers/built-for-the-web.svg"
        alt="Built for the Web"
        width={104}
        height={172}
        className={styles.sticker2}
      />

      {isModalOpen && (
        <div className={styles.overlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.close}
              onClick={() => setIsModalOpen(false)}
            >
              CLOSE
            </button>
            {ROLES.map((role) => (
              <button
                key={role}
                className={clsx(
                  styles.option,
                  selectedRole === role && styles.active,
                )}
                onClick={() => handleRoleSelect(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Members;
