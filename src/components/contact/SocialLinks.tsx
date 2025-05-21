
import React from "react";
import Icon from "@/components/ui/icon";
import { SocialLink } from "./types";

interface SocialLinksProps {
  socials: SocialLink[];
}

const SocialLinks = ({ socials }: SocialLinksProps) => {
  return (
    <>
      <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">Мы в социальных сетях</h3>
      <div className="flex gap-4 mb-8">
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.url} 
            className="bg-hookah-dark hover:bg-hookah-accent/10 w-10 h-10 rounded-full flex items-center justify-center text-hookah-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <Icon name={social.icon} size={20} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
