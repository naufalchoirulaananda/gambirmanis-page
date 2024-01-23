import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto flex items-center px-6 sm:px-0 md:px-[100px] h-[100px] border-t-[2px] mt-[50px]">
        <div>
          <Link
            href={"/"}
            className="hidden sm:block tracking-widest font-normal text-sm"
          >
            DESA GAMBIRMANIS
          </Link>
        </div>
        <div className="grow">
          <div className="font-normal text-[#8C8C8C] text-sm flex items-center justify-start gap-4 sm:gap-[30px] sm:ml-[100px]">
            <Link className="hover:text-neutral-950" href={"https://www.instagram.com/desagambirmanis/"}>
              INSTAGRAM
            </Link>
            <Link className="hover:text-neutral-950" href={"https://mail.google.com/mail/?view=cm&fs=1&to=semanisgambirmanis@gmail.com&su=Subjek%20Email&body=Isi%20Email"}>
              EMAIL
            </Link>
            <Link className="hover:text-neutral-950" href={"/"}>
              ORGANISASI
            </Link>
          </div>
        </div>
        <div>
          <Link href={"/"}>
            <p className="hidden sm:block text-sm text-[#8C8C8C] hover:text-neutral-950">
              2024
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
