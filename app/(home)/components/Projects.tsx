import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiBluetooth,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Learning Management App",
      tech: [SiNextdotjs, SiReactquery, SiTailwindcss, SiReact],
      link: "",
      cover: "/ss.png", //path to image
      background: "bg-cyan-500 ",
    },
    {
      title: "Learning Pariyatti App",
      tech: [SiReact, SiTailwindcss],
      link: "",
      cover: "/ss.png", //path to image
      background: "bg-pink-500",
    },
    {
      title: "Yatri Energy App",
      tech: [SiReact, SiTailwindcss, SiBluetooth],
      link: "",
      cover: "/ss.png", //path to image
      background: "bg-green-500",
    },
    {
      title: "Yatri Hub App",
      tech: [SiReact, SiTailwindcss, SiBluetooth],
      link: "",
      cover: "/ss.png", //path to image
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects </>"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-2 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="font-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
