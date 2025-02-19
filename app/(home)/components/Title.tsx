import React from "react";

export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-[#c036d3] opacity-50 dark:opacity-100 dark:bg-green-500 rounded-full -translate-x-2"></div>
      <div className="w-40 h-2 bg-cyan-500 dark:bg-indigo-500 rounded-full"></div>
    </div>
  );
}
