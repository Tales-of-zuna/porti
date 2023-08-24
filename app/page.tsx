"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as dayjs from "dayjs";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const socials = [
    {
      title: "Instagram",
      icon: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",
      link: "https://www.instagram.com/zuna.btw/?hl=en",
    },
    {
      title: "Facebook",
      icon: "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z",
      link: "https://www.facebook.com/profile.php?id=100024624228231&mibextid=ZbWKwL",
    },

    {
      title: "Twitter",
      icon: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z",
      link: "https://twitter.com/ZuunbilegB",
    },
  ];

  return (
    <div
      className={`${
        mounted
          ? "bg-gradient-to-tl opacity-100 to-gray-900 from-black flex min-h-screen p-4 justify-center pt-24 md:items-center transition-all transform duration-1000"
          : "opacity-50 "
      }`}
    >
      <div className="hidden fixed md:flex h-full opacity-5 top-0 left-0 w-full justify-center items-center">
        <Image
          draggable={false}
          aria-readonly
          aria-disabled
          className={`${
            mounted
              ? "delay-500 animate-pulse opacity-100 ease-in-out duration-1000 transition-all transform"
              : "opacity-0"
          }`}
          height={500}
          width={window.innerWidth}
          objectFit={"contain"}
          alt=""
          src="https://res.cloudinary.com/dwl0svlrm/image/upload/v1692865826/background_tmp8bb.gif"
        />
      </div>
      <div className="text-gray-400 w-full md:w-1/3  space-y-8">
        <p
          className={
            mounted
              ? "text-3xl text-gray-200 delay-100 ease-in-out duration-1000 transition-opacity transform font-semibold"
              : "opacity-0"
          }
        >
          Zuunbileg.B
        </p>
        <p
          className={
            mounted
              ? "delay-200 translate-y-0  ease-in-out duration-1000 transition-all transform"
              : "opacity-0 translate-y-8"
          }
        >
          Hey, I am Zuunbileg, a system development engineer.
        </p>
        <p
          className={
            mounted
              ? "delay-200 translate-y-0  ease-in-out duration-1000 transition-all transform"
              : "opacity-0 translate-y-8 "
          }
        >
          Working at
          <Link
            href="https://www.unitel.mn/unitel/about"
            className="text-gray-200 hover:underline font-semibold"
          >
            {` Unitel`}
          </Link>
          .
          <br />
          Former employee at
          <Link
            href="https://golomtbank.com/"
            className="text-gray-200 hover:underline font-semibold"
          >
            {` Golomt bank, `}
          </Link>
          <Link
            href="https://smartshrefre.mn/"
            className="text-gray-200 hover:underline font-semibold"
          >
            {` Smartdeal `}
          </Link>
          and
          <span className="text-gray-200 font-semibold">{` UNICEF `}</span>
          {`(
          "Namuu" project )`}
          .
          <br />
          With
          <span className="text-gray-200 font-semibold">{` 4 `}</span> years of
          experience.
        </p>
        <p
          className={
            mounted
              ? "delay-500 translate-y-0 ease-in-out duration-500 transition-all transform"
              : "opacity-0 translate-y-8"
          }
        >
          Dreaming up ideas and making them come true is where my passion lies.
          You can find my full projects list
          <Link href="/projects" className="text-white font-semibold underline">
            {` here `}
          </Link>
          . I also do some graphic design projects, photograph, interactivity
          experiments.
        </p>
        <p
          className={
            mounted
              ? "delay-500 translate-y-0 ease-in-out duration-1000 transition-all transform"
              : "opacity-0 translate-y-8"
          }
        >
          Outside of programming, I enjoy mountain biking, playing volleyball,
          taking photographs and cooking. Some of my photos can be found on{" "}
          <Link
            className="text-gray-200 hover:underline font-semibold"
            href={"https://www.instagram.com/zuna.btw/?hl=en"}
          >
            {` Instagram `}
          </Link>
          . If you happen to be in the same city I live (currently in
          Ulaanbaatar), maybe we can hang out and take some photos or code
          together.
        </p>
        <div className="flex justify-center">
          <div className="h-px w-20 bg-gray-400 rounded-full"></div>
        </div>
        <div
          className={`space-y-2
            ${
              mounted
                ? "delay-1000 translate-y-0 ease-in-out duration-1000 transition-all transform"
                : "opacity-0 translate-y-8"
            }`}
        >
          <p>Find me on</p>
          <div className="flex gap-4 flex-wrap">
            {socials.map((social) => (
              <Link
                className="flex hover:text-gray-200 duration-1000 transition-all transform items-center gap-2"
                key={social.title}
                href={social.link}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
                <p>{social.title}</p>
              </Link>
            ))}
            <Link
              className="flex hover:text-gray-200 duration-1000 transition-all transform items-center gap-2"
              href={"/"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-discord h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
              <p>Discord server</p>
            </Link>
          </div>
        </div>
        <p
          className={
            mounted
              ? "delay-1000 translate-y-0 ease-in-out duration-1000 transition-all transform"
              : "opacity-0 translate-y-8"
          }
        >
          If you enjoy my works, consider sponsoring me on
          <Link href={"/"} className="text-gray-200 font-semibold">
            {` GitHub Sponsor `}
          </Link>
          or{" "}
          <Link href={"/"} className="text-gray-200 font-semibold">
            {` Paypal `}
          </Link>{" "}
          to keep them sustainable.
        </p>
        <div
          className={`flex gap-4 text-gray-500 ${
            mounted
              ? "delay-1000 translate-y-0 ease-in-out duration-1000 transition-all transform"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            className="underline text-gray-200"
          >
            CC BY-NC-SA 4.0{" "}
          </Link>
          {dayjs.default().format("YYYY")} © Zuunbileg
        </div>
      </div>
    </div>
  );
};
export default Home;
