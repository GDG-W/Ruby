import abeg from "@/assets/sponsors/abeg.png";
import andela from "@/assets/sponsors/andela.png";
import busha from "@/assets/sponsors/busha.png";
import fincra from "@/assets/sponsors/fincra.png";
import google from "@/assets/sponsors/google.png";
import interswitch from "@/assets/sponsors/interswitch.png";
import patricia from "@/assets/sponsors/patricia.png";
import paystack from "@/assets/sponsors/paystack.png";
import splitIcon from "@/assets/sponsors/split.png";
import classes from "./sponsor.module.scss";
import Image from "next/image";
import GdgBag from "@/assets/sponsors/gdg-bag.svg";

const sponsorImages = [
  abeg,
  andela,
  busha,
  fincra,
  google,
  interswitch,
  patricia,
  paystack,
]

export function Sponsor() {
  return (
    <section className={classes.sponsor}>
      <div className={classes.sponsoredBy}>
        PROUDLY <br /> SPONSORED BY
        <GdgBag className={classes.gdgBag} />
      </div>
      <div className={classes.logosContainer}>
        <div className={classes.logos}>
          {sponsorImages.concat(sponsorImages).map((image, index) => (
            <>
              <Image src={image} alt={`sponsor-${index}`} className={classes.logo} />
              <Image src={splitIcon} alt={`split-${index}`} />
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
