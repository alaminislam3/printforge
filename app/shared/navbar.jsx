"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function navbar() {
  return (
    <div className="flex justify-between border-b-transparent px-3 items-center">
      <div>
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo img" height={50} width={200}></Image>
        </Link>
      </div>
      <div className="flex gap-3">
      <Link
        href="/3d-model"
        className={usePathname === "/3d-model" ? "text-[#F77429] border-b" : ""}
      >
        3D Model
      </Link>

      <Link
        href="/about"
        className={usePathname === "/about" ? "text-[#F77429] border-b" : ""}
      >
        About
      </Link>
    </div>
    </div>
  );
}
