"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiBluetooth,
  SiExpress,
  SiFirebase,
  SiGit,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { text: "React", icon: SiReact },
    { text: "Native", icon: SiReact },
    { text: "Next.js", icon: SiNextdotjs },
    { text: "Tailwind", icon: SiTailwindcss },
    { text: "Sql", icon: SiMysql },
    { text: "Mongo", icon: SiMongodb },
    { text: "Express.js", icon: SiExpress },
    { text: "Postman", icon: SiPostman },
    { text: "Git", icon: SiGit },
    { text: "Firebase", icon: SiFirebase },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills </>"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
