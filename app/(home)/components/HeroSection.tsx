import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold ">
          Nice to meet you! 👋
          <br />
          <span className="underline underline-offset-8 decoration-cyan-500 dark:decoration-green-500">
            I'm Sharthak-sp.
          </span>
        </h1>
        <p className="md:w-96 text-lg text-primary-300">
          Born in Nepal, I'm a Mobile application developer passionate about
          building a modern mobile applications that users love.
        </p>
        <br />
      </div>
      <div>
        {/* <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div> */}
        <Image
          alt="image"
          className="h-full w-full object-cover rounded-md"
          width="1000"
          height="1000"
          src="/pp.jpg"
        />
      </div>
    </div>
  );
}
