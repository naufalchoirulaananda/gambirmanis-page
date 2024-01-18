"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";

interface Props {}

interface ItemProps {
  href: string;
  text: string;
}

const Item = ({ href = "/", text = "Link" }: ItemProps) => {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={href}
        className={clsx(
          "text-[#8C8C8C] hover:text-black",
          pathName === href || (pathName === "#" && href === "#")
            ? "text-neutral-950"
            : null
        )}
      >
        {text}
      </Link>
    </>
  );
};

const Navbar = ({}: Props) => {
  return (
    <>
      <Popover className="container mx-auto flex items-center px-6 sm:px-0 md:px-[100px] h-[100px] border-b-[2px]">
        <Link href="/" className="tracking-widest font-normal text-sm">
          DESA GAMBIRMANIS
        </Link>
        <div className="grow">
          <div className="hidden font-normal text-sm sm:flex items-center justify-start gap-2 md:gap-[30px] ml-[100px]">
            <Item href={"/budaya"} text="BUDAYA" />
            <Item href={"/produk"} text="PRODUK" />
            <Item href={"/fasilitas"} text="FASILITAS" />
          </div>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center p-2">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-5 w-5 text-black" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scle-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-[110px] origin-top-right transform transition md:hidden z-10"
          >
            <div className="bg-white dark:bg-[#222] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-[50px] py-[50px]">
                <div className="">
                  <nav className="grid gap-y-8 font-normal text-sm">
                    <Item href={"/budaya"} text="BUDAYA" />
                    <Item href={"/produk"} text="PRODUK" />
                    <Item href={"/fasilitas"} text="FASILITAS" />
                  </nav>
                </div>
                <div className="mt-7">
                  <Link
                    href={"/galeri"}
                    className="font-normal text-sm text-[#8C8C8C] hover:text-neutral-950"
                  >
                    GALERI
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>

        <div className="hidden sm:block">
          <Link href={"/galeri"} className="font-normal text-sm text-[#8C8C8C] hover:text-neutral-950">
            GALERI
          </Link>
        </div>
      </Popover>
    </>
  );
};

export default Navbar;
