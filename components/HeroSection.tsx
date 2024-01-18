import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center px-6 sm:px-0 md:px-[100px] mt-[50px] h-auto">
        <Image
          src={"https://res.cloudinary.com/dwo6cfmg0/image/upload/v1704763829/hero_tlmb3w.png"}
          alt={"hero"}
          width={1500}
          height={400}
          priority={true}
          sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
        />
      </div>
    </>
  );
};

export default HeroSection;
