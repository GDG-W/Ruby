"use client";

import { motion } from "motion/react";
import Image from "next/image";
import proTicket from "@/assets/pro-ticket.png";
import standardTicket from "@/assets/standard-ticket.png";
import techiesAssemble from "@/assets/techies-assemble.svg";
import ticketArrow from "@/assets/ticket-arrow.svg";
import { Button } from "@/components/button/button";
import classes from "./secure-ticket.module.scss";

// import { linear } from "motion";

const MotionImage = motion(Image);

const standardPerks = [
  "Access to all talks and sessions",
  "Available throughout the five days",
  "Access to sponsor booths",
  "Entry to the networking area",
];

const proPerks = [
  "Exclusive access to sponsor booths & product demos",
  "Access to masterclasses and technical workshops",
  "Invitation to the Executive Roundtable",
  "Special swags and merch",
];

export function SecureTicket() {
  return (
    <div className={classes.secureTicket}>
      <h1 className={classes.heading}>
        <MotionImage
          src={techiesAssemble}
          alt="Techies Assemble"
          className={classes.icon}
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            ease: "circInOut",
            duration: 0.8,
            type: "spring",
            mass: 0.5,
          }}
        />
        <motion.p
          initial={{
            y: 64,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: [0, 0, 0, 1] },
          }}
          viewport={{ once: true }}
        >
          SECURE YOUR TICKETS TODAY
        </motion.p>
      </h1>
      <motion.p
        initial={{
          y: 64,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.1, duration: 0.5, ease: [0, 0, 0, 1] },
        }}
        viewport={{ once: true }}
        className={classes.description}
      >
        Word on the street is that the last edition was a banger — and you bet
        we’re making this year’s DevFest even bigger and better. Select the
        ticket that works best for you:
      </motion.p>
      <div className={classes.tickets}>
        <motion.div
          className={`${classes.ticket} ${classes.standard}`}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.2, ease: [0, 0, 0, 1] },
          }}
          viewport={{ once: true }}
        >
          <Image
            className={classes.logo}
            src={standardTicket}
            alt="Standard Ticket"
          />
          <span className={classes.line} />
          <h3 className={classes.header}>Standard Ticket (₦10,000 PER day)</h3>
          <p className={classes.ticketDescription}>
            Open to everyone — whether you're just starting out or deep in the
            industry
          </p>
          <ul className={classes.perks}>
            {standardPerks.map((perk) => (
              <li key={perk} className={classes.perk}>
                <Image src={ticketArrow} alt="" className={classes.arrow} />
                {perk}
              </li>
            ))}
          </ul>
          <Button
            className={classes.buyButton}
            href="https://tickets.devfestlagos.com/buy"
            target="_blank"
            type="link"
          >
            BUY TICKETS
          </Button>
        </motion.div>
        <motion.div
          className={`${classes.ticket} ${classes.pro}`}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.2, ease: [0, 0, 0, 1] },
          }}
          viewport={{ once: true }}
        >
          <Image src={proTicket} alt="Pro Ticket" className={classes.logo} />
          <span className={classes.line} />
          <h3 className={classes.header}>Pro Ticket (₦70,000 FOR THURSDAY)</h3>
          <p className={classes.ticketDescription}>
            For those who want more access and a more focused, premium
            experience — all in one day
          </p>
          <ul className={classes.perks}>
            {proPerks.map((perk) => (
              <li key={perk} className={classes.perk}>
                <Image src={ticketArrow} alt="" className={classes.arrow} />
                {perk}
              </li>
            ))}
          </ul>
          <Button
            className={classes.buyButton}
            href="https://tickets.devfestlagos.com/buy#pro"
            target="_blank"
            type="link"
          >
            BUY TICKETS
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
