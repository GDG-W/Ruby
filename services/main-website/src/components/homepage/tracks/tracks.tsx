import Image from "next/image";
import cloudTrack from "@/assets/tracks-cloud.png";
import designTrack from "@/assets/tracks-design.png";
import docsTrack from "@/assets/tracks-docs.png";
import prodTrack from "@/assets/tracks-prod.png";
import productTrack from "@/assets/tracks-product.png";
import promptsTrack from "@/assets/tracks-prompts.png";
import webTrack from "@/assets/tracks-web.png";
import classes from "./tracks.module.scss";

export function Tracks() {
  return (
    <section className={classes.tracks}>
      <div className={classes.textWrapper}>
        <h2 className={classes.text}>
          Whatever you’re into, there's a track at{" "}
          <span>DevFest Lagos made just for you.</span>
        </h2>
        <Image src={webTrack} alt="Web Track" className={classes.webTrack} />
        <Image
          src={promptsTrack}
          alt="Prompts Track"
          className={classes.promptTrack}
        />
        <Image
          src={productTrack}
          alt="Product Track"
          className={classes.productTrack}
        />
        <Image
          src={prodTrack}
          alt="Production Track"
          className={classes.prodTrack}
        />
        <Image
          src={docsTrack}
          alt="Documentation Track"
          className={classes.docsTrack}
        />
        <Image
          src={designTrack}
          alt="Design Track"
          className={classes.designTrack}
        />
        <Image
          src={cloudTrack}
          alt="Cloud Track"
          className={classes.cloudTrack}
        />
      </div>
    </section>
  );
}
