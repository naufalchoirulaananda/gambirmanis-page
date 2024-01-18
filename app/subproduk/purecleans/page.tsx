import React from "react";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="container mx-auto flex flex-col px-6 sm:px-0 mt-[50px] md:px-[100px] h-auto">
        <Image
        className="shadow-xl"
          src={
            "https://res.cloudinary.com/dwo6cfmg0/image/upload/v1705511573/WhatsApp_Image_2024-01-13_at_10.09.54_972462d2_yz1r5r.jpg"
          }
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
        <p className="mt-[24px] text-2xl font-semibold">PURE CLEANS</p>
        <p className="text-sm text-justify mt-[24px] text-[#8c8c8c] uppercase leading-loose">
          Selamat datang di Desa Gambirmanis, di mana keindahan alam dan
          kreativitas bergabung untuk menciptakan produk pembersih baru yang
          menakjubkan. Pure Cleans! Dibuat dengan cinta oleh warga setia dari
          Dusun Gambiranom, Pure Cleans adalah sabun cuci piring yang menawarkan
          keharuman menyegarkan jeruk nipis dan menggunakan pewarna alami dari
          daun pandan.
        </p>
        <p className="text-sm text-justify mt-[24px] text-[#8c8c8c] uppercase leading-loose">
          Desa Gambirmanis dikenal dengan keberagaman alamnya, dan inovasi ini
          mencerminkan semangat kreatif dan kepedulian lingkungan yang tinggi di
          antara penduduknya. Para pengrajin lokal dengan penuh semangat
          menciptakan Pure Cleans sebagai jawaban atas kebutuhan akan produk
          cuci piring yang tidak hanya efektif namun juga ramah lingkungan.
        </p>
        <p className="text-sm text-justify mt-[24px] text-[#8c8c8c] uppercase leading-loose">
          Aroma segar jeruk nipis dalam Pure Cleans bukan hanya memberikan
          keharuman menyenangkan, tetapi juga membawa kesegaran ke setiap piring
          yang dicuci. Sementara itu, pewarna alami dari daun pandan tidak hanya
          memberikan warna menarik, tetapi juga merupakan langkah kecil menuju
          pengurangan penggunaan bahan kimia berbahaya dalam produk sehari-hari
          kita.
        </p>
        <p className="text-sm text-justify mt-[24px] text-[#8c8c8c] uppercase leading-loose">
          Harga terjangkau sebesar 5000 Rupiah membuat Pure Cleans menjadi pilihan
          yang ramah kantong bagi semua orang di Desa Gambirmanis. Sebagai
          inovasi terbaru di desa ini, Pure Cleans memberikan dampak positif
          pada ekonomi lokal, mendorong pengembangan usaha kecil, dan memperkuat
          rasa kebersamaan di antara warga Gambirmanis.
        </p>
        <p className="text-sm text-justify mt-[24px] text-[#8c8c8c] uppercase leading-loose">
          Jadi, jika Anda mencari cara untuk menjaga kebersihan dapur sambil
          mendukung produk lokal dan lingkungan, Pure Cleans adalah jawabannya.
          Dapatkan pengalaman mencuci piring yang lebih menyenangkan dan
          bermanfaat dengan sabun cuci piring inovatif dari Desa Gambirmanis.
        </p>
      </div>
    </>
  );
}

export default page;
