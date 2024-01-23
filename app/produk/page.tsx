import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col px-6 sm:px-0 mt-[50px] md:px-[100px] h-auto">
        <div className="container gap-10 grid lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow">
            <a href="/subproduk/purecleans">
              <Image
                className="rounded-t-lg"
                src={
                  "https://res.cloudinary.com/dwo6cfmg0/image/upload/v1705542014/keripik_pisang_suruhan_zcscms.jpg"
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
              <a href="/subproduk/purecleans">
                <h5 className="mb-2 text-2xl font-bold tracking-wider text-gray-900">
                  ANEKA KERIPIK
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                Keripik merupakan hasil olahan yang banyak dihasilkan oleh warga Desa Gambirmanis, karena melimpahnya bahan baku untuk memproduksi aneka keripik.
              </p>
              <a
                href="/subproduk/purecleans"
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
            <a href="/subproduk/purecleans">
              <Image
                className="rounded-t-lg"
                src={
                  "https://res.cloudinary.com/dwo6cfmg0/image/upload/v1705541403/ampyang_gmcg69.jpg"
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
              <a href="/subproduk/ampyang">
                <h5 className="mb-2 text-2xl font-bold tracking-wider text-gray-900">
                  AMPYANG
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                Makanan ringan hasil produk Desa Gambirmanis yang dikembangkan
                oleh Kelompok Usaha Kecil dan Menengah (UMKM) bernama Kelompok
                Usaha &quot;Kenangan&quot;.
              </p>
              <a
                href="/subproduk/ampyang"
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
            <a href="/subproduk/purecleans">
              <Image
                className="rounded-t-lg"
                src={
                  "https://res.cloudinary.com/dwo6cfmg0/image/upload/v1705542228/gethuk_gr7ru1.jpg"
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
              <a href="/subproduk/purecleans">
                <h5 className="mb-2 text-2xl font-bold tracking-wider text-gray-900">
                  GETHUK SINGKONG
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                Gethuk Singkong merupakan salah satu makanan ringan yang diproduksi oleh warga masyarakat Desa Gambirmanis.
              </p>
              <a
                href="/subproduk/purecleans"
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
            <a href="/subproduk/purecleans">
              <Image
                className="rounded-t-lg"
                src={
                  "https://res.cloudinary.com/dwo6cfmg0/image/upload/v1705511573/WhatsApp_Image_2024-01-13_at_10.09.54_972462d2_yz1r5r.jpg"
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
              <a href="/subproduk/purecleans">
                <h5 className="mb-2 text-2xl font-bold tracking-wider text-gray-900">
                  PURE CLEANS
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                Inovasi sabun cuci piring dengan aroma Jeruk Nipis dan pewarna
                alami dari Daun Pandan dari Desa Gambirmanis.
              </p>
              <a
                href="/subproduk/purecleans"
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
