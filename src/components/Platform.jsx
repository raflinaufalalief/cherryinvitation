import React from "react";
import { BsFacebook, BsWhatsapp, BsInstagram, BsPeople } from "react-icons/bs";
import { GoMailRead, GoMail } from "react-icons/go";
import { RiMailCheckLine } from "react-icons/ri";

const Platform = () => {
  return (
    <div className="w-full py-16">
      <div className="md:max-w-[1240px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold md:text-4xl sm:text-3xl text-secondary">
            Platform No. 1
          </h1>
          <h2 className="py-6 text-3xl font-semibold">
            Website Undangan Pernikahan
          </h2>
          <p className="text-lg text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Lorem ipsum dolor sit amet.
          </p>
          <div className="py-3 md:flex ">
            <p>Temukan kami : </p>
            <p className="flex items-center space-x-3 md:ml-1">
              <BsFacebook
                size={20}
                style={{ color: "#1877F2" }}
                className="pr-1"
              />
              Facebook
              <BsWhatsapp
                size={20}
                style={{ color: "#00A884" }}
                className="pr-1"
              />
              WhatsApp
              <BsInstagram
                size={20}
                style={{ color: "#6C47C5" }}
                className="pr-1"
              />
              Instagram
            </p>
          </div>
        </div>
        {/* grid kanan */}
        <div className="grid grid-cols-2 md:mt-[-25px] md:py-16 tems-center ">
          <div className="flex py-6 ">
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <GoMailRead size={30} style={{ color: "#1A906B" }} />
            </div>
            <div className="px-3">
              <h1 className="text-2xl font-semibold">300</h1>
              <p className="text-[#6D737A] text-sm">Undangan Aktif</p>
            </div>
          </div>
          <div className="flex py-6">
            <div className="p-4 bg-[#FFFAF5] rounded-xl">
              <GoMail size={30} style={{ color: "#FFC27A" }} />
            </div>
            <div className="px-3">
              <h1 className="text-2xl font-semibold">10,000+</h1>
              <p className="text-[#6D737A] text-sm">Amplop Digital</p>
            </div>
          </div>
          <div className="flex py-6">
            <div className="p-4 bg-[#FFEEF0] rounded-xl">
              <RiMailCheckLine size={30} style={{ color: "#ED4459" }} />
            </div>
            <div className="px-3">
              <h1 className="text-2xl font-semibold">20,000+</h1>
              <p className="text-[#6D737A] text-sm">Doa & Ucapan</p>
            </div>
          </div>
          <div className="flex py-6">
            <div className="p-4 bg-[#F0F7FF] rounded-xl">
              <BsPeople size={30} style={{ color: "#0075FD" }} />
            </div>
            <div className="px-3">
              <h1 className="text-2xl font-semibold">10,000+</h1>
              <p className="text-[#6D737A] text-sm">Tamu Reservasi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
