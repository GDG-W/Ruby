import classes from './secure-ticket.module.scss';
import standardTicket from "@/assets/standard-ticket.png";
import proTicket from "@/assets/pro-ticket.png";
import Image from 'next/image';
import TicketArrow from "@/assets/ticket-arrow.svg";
import { Button } from '@/components/button/button';
import TechiesAssemble from '@/assets/techies-assemble.svg';

const standardPerks = [
  "Access to all talks and sessions",
  "Available throughout the five days",
  "Access to sponsor booths",
  "Entry to the networking area"
]

const proPerks = [
  "Exclusive access to sponsor booths & product demos",
  "Access to masterclasses and technical workshops",
  "Invitation to the Executive Roundtable",
  "Special swags and merch"
]

export function SecureTicket() {
  return (
    <div className={classes.secureTicket}>
      <h1 className={classes.heading}>
        <TechiesAssemble className={classes.icon} />
        SECURE YOUR TICKETS TODAY
      </h1>
      <p className={classes.description}>
        Word on the street is that the last edition was a banger — and you bet we’re making this year’s DevFest even bigger and better. Select the ticket that works best for you:
      </p>
      <div className={classes.tickets}>
        <div className={`${classes.ticket} ${classes.standard}`}>
          <Image className={classes.logo} src={standardTicket} alt="Standard Ticket" />
          {/*<StandardTicket className={classes.logo} />*/}
          <span className={classes.line} />
          <h3 className={classes.header}>
            Standard Ticket (₦10,000 PER day)
          </h3>
          <p className={classes.description}>
            Open to everyone — whether you're just starting out or deep in the industry
          </p>
          <ul className={classes.perks}>
            {standardPerks.map((perk) => (
              <li key={perk} className={classes.perk}>
                <TicketArrow className={classes.arrow} />
                {perk}
              </li>
            ))}
          </ul>
          <Button className={classes.buyButton}>
            BUY TICKETS
          </Button>
        </div>
        <div className={`${classes.ticket} ${classes.pro}`}>
          <Image src={proTicket} alt="Pro Ticket" className={classes.logo} />
          <span className={classes.line} />
          <h3 className={classes.header}>
            Pro Ticket (₦70,000 FOR THURSDAY)
          </h3>
          <p className={classes.description}>
            For those who want more access and a more focused, premium experience — all in one day
          </p>
          <ul className={classes.perks}>
            {proPerks.map((perk) => (
              <li key={perk} className={classes.perk}>
                <TicketArrow className={classes.arrow} />
                {perk}
              </li>
            ))}
          </ul>
          <Button className={classes.buyButton}>
            BUY TICKETS
          </Button>
        </div>
      </div>
    </div>
  )
}
