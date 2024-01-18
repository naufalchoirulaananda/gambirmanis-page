import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col px-6 sm:px-0 mt-[50px] md:px-[100px] h-auto mb-36">
        <div className="container gap-10 grid lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow">
            <a href="/">
              <Image
                className="rounded-t-lg"
                src={
                  "https://res.cloudinary.com/dwo6cfmg0/image/upload/v1705541119/IMG_0039_pkvq5v.jpg"
                }
                alt={""}
                width={1500}
                height={400}
                priority={true}
                sizes="(max-width: 640px) 100vw,
                                    (max-width: 768px) 80vw,
                                    (max-width: 1024px) 60vw,
                                    50vw
                                    "
              />
            </a>
            <div className="p-5">
              <a href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-wider text-gray-900">
                  WAYANG KULIT
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                Wayang Kulit merupakan salah satu kesenian yang ditampilkan di
                Desa Gambirmanis.
              </p>
              <a
                href="/"
                className="inline-flex items-center px-3 py-2 text-[12px] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Baca selengkapnya
                <svg
                  className="rtl:rotate-180 w-3 h-3 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <a href="/">
              <Image
                className="rounded-t-lg"
                src={
                  "https://res.cloudinary.com/dwo6cfmg0/image/upload/v1705541110/IMG_0700_zlkdxq.png"
                }
                alt={""}
                width={1500}
                height={400}
                priority={true}
                sizes="(max-width: 640px) 100vw,
                                    (max-width: 768px) 80vw,
                                    (max-width: 1024px) 60vw,
                                    50vw
                                    "
              />
            </a>
            <div className="p-5">
              <a href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-wider text-gray-900">
                  PERTUNJUKAN JATHILAN
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                Jathilan juga merupakan kesenian yang masih sering diadakan di
                Desa Gambirmanis.
              </p>
              <a
                href="/"
                className="inline-flex items-center px-3 py-2 text-[12px] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Baca selengkapnya
                <svg
                  className="rtl:rotate-180 w-3 h-3 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
