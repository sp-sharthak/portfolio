import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://github.com/sp-sharthak",
      label: "Linkedin",
      icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/sharthak-sharma-poudel-34288b165/",
      label: "Github",
      icon: SiLinkedin,
    },
    // {
    //   link: "https://www.linkedin.com/shartaksp",
    //   label: "x",
    //   icon: SiX,
    // },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-cyan-500 dark:decoration-green-500 -rotate-3">
        SP 👓
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
