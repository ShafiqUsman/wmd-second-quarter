"use client";
import Image from "next/image";
import Link from "next/link";
import { topicCoverData } from "./data/topicData";
import { useState } from "react";

export default function Home() {
  const [target, setTarget] = useState<JSX.Element>();

  return (
    <div>
      <h1> WMD Quarter II </h1>
      <div className="flex">
      <div className="w-56 bg-blue-900 h-screen shrink-0">
        <h2>Topic Cover</h2>
        <ul className="pt-1">
          {topicCoverData.map((menu, i) => (
            <li
              key={i}
              className={`text-gray-300 text-sm cursor-pointer py-1 mt-1 pl-2 hover:bg-blue-600 rounded-md flex items-center capitalize`}
              onClick={() => setTarget(menu.target)}
            >
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7">{target}</div>
      </div>
    </div>
  );
}
