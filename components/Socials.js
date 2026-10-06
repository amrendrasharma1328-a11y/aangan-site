import { SITE } from "@/lib/config";
import { InstagramIcon, YouTubeIcon } from "./Icons";

export default function Socials() {
  return (
    <span className="soc">
      <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <YouTubeIcon />
      </a>
    </span>
  );
}
