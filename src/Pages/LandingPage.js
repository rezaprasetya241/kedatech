import React, { useEffect, useRef, useState } from "react";
import {
  FaCheck,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

function LandingPage() {
  const listTier = [
    {
      type: "Basic",
      desc: "Pilihan bagi anda pengguna biasa",
      price: 250,
      benefit: [
        "Mencatat  barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuangan",
      ],
    },
    {
      type: "Business",
      desc: "Pilihan bagi anda untuk membangun bisnis",
      price: 45000,
      benefit: [
        "Mencatat  barang masuk dan keluar",
        "Mencatat hasil keuangan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
      ],
    },
    {
      type: "Entrepreneur",
      desc: "Pilihan bagi anda untuk kebutuhan yang complex",
      price: 75000,
      benefit: [
        "Mencatat  barang masuk dan keluar",
        "Mencatat hasil keuangan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi Penghasilan",
      ],
    },
  ];
  const navbar = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Pricing",
      url: "#price",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  const listServiceChat = [
    "Bantuan Live Chat responsif dari tim Customer Success.",
    "Artikel bantuan dan video tutorial.",
    "Beragam tutorial lengkap dan terbaik.",
  ];

  const navigate = useNavigate();
  const contact = useRef(null);
  const price = useRef(null);

  const [open, setOpen] = useState(false);

  function formatRupiah(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  function handleLogin() {
    navigate("/login");
  }

  return (
    <div>
      <header className=" md:flex justify-between items-center px-[4rem] pt-4">
        <div>
          <img src="/assets/logo.png" />
        </div>
        <div className="md:hidden absolute indent-10 top-4 right-3 text-black">
          <FaBars
            className="text-3xl"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <ul
          className={`text-end md:text-start md:items-center md:flex justify-end md:static absolute bg-white text-black w-full left-0 p-4 md:p-0 transition-all duration-500 ease-in-out ${
            open ? "top-15 opacity-100" : "top-[-490px]"
          } opacitiy-0 md:opacity-100`}
        >
          {navbar.map((data, index) => {
            return (
              <li className="my-5 md:my-0" key={index}>
                <a
                  className="uppercase md:mr-4 font-black cursor-pointer"
                  href={data.url}
                >
                  {data.name}
                </a>
              </li>
            );
          })}
          <Button handleClick={handleLogin}>LOGIN</Button>
        </ul>
      </header>
      <div className="mt-[40px]">
        <div className="px-[4rem] mt-[20px] h-[50vh] flex flex-col-reverse md:flex-row items-center justify-between">
          <div className=" basis-1/2">
            <p className="mb-5">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
            <Button>Lorem Ipsun</Button>
          </div>
          <img className="w-[400px]" src="/assets/analytic.svg" />
        </div>
        <div className="bg-[#EDF4E4] px-8 py-[30px] mt-5" ref={price}>
          <p className="text-center title text-2xl md:text-3xl">SYSTEM TIER</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-5 md:mt-8 ">
            {listTier.map((item, key) => {
              return (
                <div
                  key={key}
                  className="bg-white border border-1 border-solid border-[#d5dfff] rounded-xl py-3 px-8 text-center drop-shadow-md scale-90 hover:scale-100 duration-300 ease-in-out"
                >
                  <p className="uppercase title text-xl md:text-2xl">
                    {item.type}
                  </p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                  <div>
                    <p className="mt-4">
                      Rp
                      <span className="text-3xl font-medium text-dark_green">
                        {formatRupiah(item.price)}
                      </span>
                      /bln
                    </p>
                    <p className="text-dark_green font-semibold my-4">
                      + Gratis 3 Bulan
                    </p>
                    <button className="w-full max-w-[200px] bg-white text-orange border-solid border-1 border-orange border py-2 hover:bg-orange hover:text-white rounded-lg">
                      PILIH TIER
                    </button>
                  </div>
                  <hr className="my-4" />
                  <ul className="mb-5">
                    {item.benefit.map((data, key) => (
                      <li
                        className="flex items-center text-start xs:text-sm my-1"
                        key={key}
                      >
                        <FaCheck className="mr-1 text-green-500" /> {data}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-dark_green text-white px-[4rem] pt-5 pb-8 ">
          <p className="text-3xl text-center font-extrabold">OUR FITURE</p>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="mt-3 md:mt-0">
              <p className="text-xl md:text-xl lg:text-3xl font-bold">
                Layanan Bantuan 24/7
              </p>
              {listServiceChat.map((data, key) => {
                return (
                  <p
                    className="text-xl md:text-base flex items-center"
                    key={key}
                  >
                    <FaCheck className="mr-2 text-orange" />
                    {data}
                  </p>
                );
              })}
            </div>
            <img
              className="w-[600px] md:w-[300px]"
              src="/assets/services_chat.svg"
              alt="chat 24/7"
            />
          </div>
        </div>
        <div className="px-[4rem] pt-10 pb-5 bg-brown">
          <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center">
            <div className="mt-3 md:mt-0">
              <p className="text-xl md:text-xl lg:text-3xl font-bold">
                Sistem Keamanan Canggih
              </p>
              {listServiceChat.map((data, key) => {
                return (
                  <p
                    className="text-xl md:text-base flex items-center"
                    key={key}
                  >
                    <FaCheck className="mr-2 text-orange" />
                    {data}
                  </p>
                );
              })}
            </div>
            <img
              className="lg:w-[600px] md:w-[300px]"
              src="/assets/services_security.svg"
              alt="security"
            />
          </div>
        </div>
      </div>
      <footer
        className=" px-[4rem] bg-[#EDF4E4] pt-8 pb-2 text-center"
        ref={contact}
      >
        <div className="flex flex-col md:flex-row justify-between text-start">
          <div className="basis-1/4">
            <img src="/assets/logo.png" />
            <p>
              69QF+P73, Jl. Pogung Dalangan, RT.11/RW.50, Pogung Kidul,
              Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta
              55284
            </p>
            <div className="flex items-center text-dark_green mt-2">
              <FaFacebook className="cursor-pointer hover:scale-110 hover:text-orange" />
              <FaInstagram className="cursor-pointer hover:scale-110 hover:text-orange mx-5" />
              <FaTwitter className="cursor-pointer hover:scale-110 hover:text-orange" />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-0 text-dark_green">
            <div>
              <h5 className="font-medium">Company</h5>
              <ul className="font-normal">
                <li>Features</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="mx-8">
              <h5 className="font-medium">Help</h5>
              <ul className="font-normal">
                <li>Features</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium">Resources</h5>
              <ul className="font-normal">
                <li>Features</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-4">All Rights Reserved @scorn 2023</p>
      </footer>
    </div>
  );
}

export default LandingPage;
