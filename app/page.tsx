"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import DropDown from "./Components/DropDown";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  useGSAP,
  Observer,
  Draggable,
);

const images = [
  "/twice-1.svg",
  "/badminton.svg",
  "/final-fantasy.png",
  "/Coca-Cola.svg",
  "/pepsi.svg",
  "/samsung.svg",
  "/LE_SSERAFIM.svg",
  "/image(3).svg",
  "/Dragonball.svg",
  "/apex-legends.svg",
  "/running-man.svg",
  "/subaru.png",
  "/Naruto.svg",
  "/NMIXX_logo.svg",
];

export default function Home() {
  // State to track which section is currently active for navbar highlighting
  const [activeSection, setActiveSection] = useState("");

  // container ref for falling images to use with GSAP
  const fallingImagesRef = useRef<HTMLDivElement>(null);

  // container ref for project cards to use with GSAP
  const projectRef = useRef<HTMLDivElement>(null);

  // Falling animation for the SVGs
  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".falling-image").forEach((item) => {
        gsap.set(item, {
          left: `${gsap.utils.random(0, 90)}%`,
          top: "-10vh",
        });

        gsap.fromTo(
          item,
          { y: 0 },
          {
            y: "110vh",
            rotation: gsap.utils.random(-360, 360),
            duration: gsap.utils.random(3, 7),
            ease: "none",
            repeat: -1,
            delay: gsap.utils.random(0, 5),
            onRepeat: () => {
              gsap.set(item, { left: `${gsap.utils.random(0, 90)}%` });
            },
          },
        );
      });
    },
    { scope: fallingImagesRef },
  );

  // Project card animations with GSAP Scroll-Trigger
  useGSAP(
    () => {
      gsap.fromTo(
        ".left-card",
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        },
      );
      gsap.fromTo(
        ".right-card",
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        },
      );
    },
    { scope: projectRef },
  );

  // Project Card tilt
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>(
      projectRef.current!.querySelectorAll(".card-tilt"),
    );

    cards.forEach((card) => {
      Observer.create({
        target: card,
        type: "pointer",
        onMove: (self) => {
          const rect = card.getBoundingClientRect();
          const xNorm = (self.x! - rect.left) / rect.width - 0.5;
          const yNorm = (self.y! - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotateY: -xNorm * 15,
            rotateX: yNorm * 15,
            transformPerspective: 800,
            ease: "power2.out",
            duration: 0.4,
          });
        },
        onHoverEnd: () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "ease.out",
          });
        },
      });
    });
  });

  // ScrollSmoother
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: true,
      effects: true,
      smoothTouch: 0.1,
    });
    return () => {
      smoother.kill();
    };
  });

  // helper funciton to invert LE-SSERAFIM.svg and samsung.svg
  const isInverted = (src: string) => {
    return (
      src.includes("LE_SSERAFIM.svg") ||
      src.includes("samsung.svg") ||
      src.includes("apex-legends.svg") ||
      src.includes("NMIXX_logo.svg")
    );
  };

  const scrollToSection = (id: string) => {
    const offset = window.innerHeight * 0.1 + 15;
    ScrollSmoother.get()?.scrollTo(`#${id}`, true, `top ${offset}px`);
  };

  return (
    <div id="smooth-wrapper" >
      {/* Navbar at top of page */}
      <nav className="hidden sm:flex sm:flex-row gap-4 backdrop-blur-3xl absolute bottom-10 left-1/2 -translate-x-1/2 justify-center z-30 p-2 rounded-full">
        <button
          className={`cursor-pointer hover:brightness-100 text-lg ${
            activeSection === "about" ? "brightness-100" : "brightness-50 "
          }`}
          onClick={() => scrollToSection("about")}
        >
          Home{" "}
        </button>
        <button
          className={`cursor-pointer hover:brightness-100 text-lg ${
            activeSection === "projects" ? "brightness-100" : "brightness-50 "
          }`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className={`cursor-pointer hover:brightness-100 text-lg ${
            activeSection === "certifications"
              ? "brightness-100"
              : "brightness-50 "
          }`}
          onClick={() => scrollToSection("certifications")}
        >
          Certifications
        </button>
        <button
          className={`cursor-pointer hover:brightness-100 text-lg ${
            activeSection === "education-title"
              ? "brightness-100"
              : "brightness-50 "
          }`}
          onClick={() => scrollToSection("education-title")}
        >
          Education
        </button>
      </nav>

      {/* Links to GitHub, LinkedIn, email; Displayed on side of page (bottom left)*/}
      <section className="opacity-0 sm:opacity-100 flex flex-col absolute bottom-12 right-12 left-8 sm:left-2 md:left-4 lg:left-6 xl:left-8 gap-4">
        {/* GITHUB */}
        <div>
          <Link
            href="https://github.com/j-e-ff"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] stroke-(--foreground) hover:stroke-[#5FED83] transition-colors duration-300 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        {/* LINKEDIN */}
        <div className="group">
          <Link
            href="https://www.linkedin.com/in/jeffrey-rodas-hernandez-018665250"
            rel="noopener noreferer"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] stroke-(--foreground) group-hover:stroke-[#0077B5] transition-colors duration-300 cursor-pointer"
            >
              <path
                d="M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="9"
                width="4"
                height="13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="5"
                cy="4"
                r="2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        {/* EMAIL */}
        <div
          className="group"
          onClick={() =>
            window.open(
              `mailto:${"rodasjeffrey@gmail.com"}?subject=${""}&body=${""}`,
              "_blank",
            )
          }
        >
          <div>
            <svg
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-[30px] h-[30px] group-hover:cursor-pointer "
            >
              {/* Define the gradient */}
              <defs>
                <linearGradient
                  id="gmailGradient"
                  x1="0"
                  y1="0"
                  x2="192"
                  y2="192"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="35%" stopColor="#EA4335" /> {/* Red */}
                  <stop offset="35%" stopColor="#34A853" /> {/* Green */}
                  <stop offset="50%" stopColor="#4285F4" /> {/* Blue */}
                  <stop offset="75%" stopColor="#FBBC05" /> {/* Yellow */}
                </linearGradient>
              </defs>
              {/* Apply gradient on hover */}
              <path
                stroke="black"
                strokeWidth="12"
                strokeLinejoin="round"
                d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
                className="transition-all duration-500 group-hover:stroke-[url(#gmailGradient)] stroke-(--foreground)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div>
        <div
          id="smooth-content"
          className="font-sans grid grid-rows-1 items-center justify-center min-h-screen text-foreground bg-background"
        >
          <header className="sm:hidden flex w-full fixed top-6 right-4 justify-end z-20">
            <DropDown scrollToSection={scrollToSection} />
          </header>
          <main className="flex flex-col gap-[32px] overflow-y-auto w-full md:px-12 lg:px-15 ">
            {/* About Me Section */}
            <section id="about" className="about-me h-full ">
              <div
                ref={fallingImagesRef}
                className=" w-full min-h-screen flex flex-col gap-8 sm:flex-row justify-center items-center sm:gap-10 md:gap-30 relative overflow-hidden"
              >
                <div className="z-20 text flex flex-col md:w-74 sm:w-50 w-70 gap-2">
                  <p className="md:text-3xl font-bold w-full wrap-anywhere text-start text-lg">
                    Web Developer
                  </p>
                  <div className="location-text flex flex-row gap-4 pb-2 items-center">
                    {/* map pin */}
                    <svg
                      className="text-(--foreground)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z"
                        opacity="0.2"
                      ></path>
                      <path d="M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z"></path>
                    </svg>
                    <p className="md:text-lg font-semibold text-xs ">
                      Lomita, California
                    </p>
                  </div>
                  <p className="bio md:text-lg font-semibold sm:text-xs">
                    Recent Computer Science graduate seeking to launch my career
                    in Front-End Web Development
                  </p>
                </div>
                {/* Photo */}
                <div className="card-tilt z-20">
                  <Image
                    className=" md:w-80 lg:w-90 rounded-3xl "
                    src="/profile-pic.jpg"
                    alt="Me"
                    width={300}
                    height={38}
                    priority
                  />
                </div>
                {/* Falling images */}
                {images.map((imageSrc, index) => (
                  <div
                    key={index}
                    className={`falling-image absolute top-0 z-10  ${
                      isInverted(imageSrc) ? "dark:invert" : ""
                    }`}
                  >
                    <Image
                      src={imageSrc}
                      alt="falling image"
                      width={40}
                      height={38}
                      className=""
                      priority={index < 3}
                    />
                  </div>
                ))}
              </div>
            </section>
            {/* Projects Section */}
            <section
              id="projects"
              className="w-full flex flex-col  scroll-mt-12 pb-15 sm:pb-none items-center justify-center gap-6"
            >
              <p className="text-2xl font-bold sticky">Personal Projects</p>
              {/* Project Cards*/}
              <div
                ref={projectRef}
                className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-y-12 sm:gap-y-6 w-full sm:h-full"
              >
                {/* cinemasite project */}
                <div className="card-tilt project left-card group relative bg-[url(/CinemaV2-home.jpg)] bg-cover mx-auto flex w-100 h-80 sm:w-115 sm:h-105 md:w-88 md:h-80 lg:w-120 lg:h-100 xl:w-120 sm:gap-x-4 rounded-xl">
                  <Link
                    href="https://cinemasite.rodasjeffrey.com"
                    rel="noopener noreferer"
                    target="_blank"
                  >
                    <div className="absolute inset-0 bg-black/80 sm:bg-transparent sm:hover:bg-black/80 text-center flex flex-col gap-15 p-6 rounded-xl">
                      <div className="gap-10 flex flex-col items-center">
                        <p className="font-bold text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 brightness-200 text-xl mt-4">
                          CinemaSite
                        </p>
                        <div className="textbox flex flex-col text-center sm:w-100 md:w-80 lg:w-110">
                          <p className=" text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 brightness-200 text-xs sm:text-base lg:text-lg">
                            Movie database (and tv-shows) site where users can
                            search for content, allowing them to add to favorites
                            list or watch later list. Uses The Movie Database API
                            and JustWatch for information.
                          </p>
                        </div>
                        {/* icons */}
                        <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 flex flex-row gap-4 justify-center">
                          <Image
                            className=""
                            src="/react-2.svg"
                            alt="react logo"
                            width={25}
                            height={38}
                            priority
                          />
                          <Image
                            className="invert"
                            src="/next-js.svg"
                            alt="Next.js logo"
                            width={22}
                            height={38}
                            priority
                          />
                          <Image
                            className=""
                            src="/tailwind-css-2.svg"
                            alt="tailwind logo"
                            width={25}
                            height={38}
                            priority
                          />
                          <Image
                            className=""
                            src="/typescript.svg"
                            alt="typescript logo"
                            width={23}
                            height={38}
                            priority
                          />
                          <Image
                            className=""
                            src="/firebase-1.svg"
                            alt="Firebase logo"
                            width={20}
                            height={38}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* umedia project*/}
                <div className="card-tilt project right-card group relative bg-[url(/umedia-home.png)] bg-cover mx-auto flex w-100 h-80 sm:w-115 sm:h-105 md:w-88 md:h-80 lg:w-120 lg:h-100 xl:w-120 sm:gap-x-4 rounded-xl">
                  <Link
                    href="https://umedia.rodasjeffrey.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="absolute inset-0 bg-black/80  sm:bg-transparent sm:hover:bg-black/80 text-center flex flex-col gap-10 rounded-xl items-center ">
                      <p className="font-bold text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 brightness-200 text-xl pt-8">
                        Umedia
                      </p>
                      <div className="textbox flex flex-col text-center sm:w-100 md:w-80 lg:w-110">
                        <p className="text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 brightness-200 text-xs sm:text-base lg:text-lg">
                          Social media website that combines features from Reddit
                          and X, supporting image and text-based posts, user
                          messaging, following users, and forum/topic
                          subscription.
                        </p>
                      </div>
                      {/* icons */}
                      <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 flex flex-row gap-4 justify-center">
                        <Image
                          className=""
                          src="/react-2.svg"
                          alt="react logo"
                          width={25}
                          height={38}
                          priority
                        />
                        <Image
                          className="invert"
                          src="/next-js.svg"
                          alt="Next.js logo"
                          width={22}
                          height={38}
                          priority
                        />
                        <Image
                          className=""
                          src="/tailwind-css-2.svg"
                          alt="tailwind logo"
                          width={25}
                          height={38}
                          priority
                        />
                        <Image
                          className=""
                          src="/typescript.svg"
                          alt="typescript logo"
                          width={23}
                          height={38}
                          priority
                        />
                        <Image
                          className=""
                          src="/firebase-1.svg"
                          alt="Firebase logo"
                          width={20}
                          height={38}
                          priority
                        />
                        <Image
                          className=""
                          src="/daisyUI-rotating.svg"
                          alt="daisyUI logo"
                          width={30}
                          height={38}
                          priority
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                {/* weather project */}
                <div className="card-tilt project left-card group relative bg-[url(/weather-app.png)] bg-cover mx-auto flex w-100 h-80 sm:w-115 sm:h-105 md:w-88 md:h-80 lg:w-120 lg:h-100 xl:w-120 sm:gap-x-4 rounded-xl">
                  <Link
                    href="https://weather.rodasjeffrey.com"
                    rel="noopener noreferer"
                    target="_blank"
                  >
                    <div className="absolute inset-0 bg-black/80 sm:bg-transparent sm:hover:bg-black/80 text-center flex flex-col gap-15 p-6 rounded-xl">
                      <div className="gap-10 flex flex-col items-center">
                        <p className="font-bold text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 brightness-200 text-xl mt-4">
                          Weather App
                        </p>
                        <p className="text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 brightness-200 text-xs sm:text-base lg:text-lg">
                          A weather app that takes in a city name to provide
                          weather information from The Weather API. User location
                          can also be used if allowed.
                        </p>
                        {/* icons */}
                        <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 flex flex-row gap-3 justify-center">
                          <Image
                            className=""
                            src="/react-2.svg"
                            alt="react logo"
                            width={25}
                            height={38}
                            priority
                          />
                          <Image
                            className=""
                            src="/javascript-1.svg"
                            alt="javascript logo"
                            width={23}
                            height={38}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
            {/* Certifications Section */}
            <section
              id="certifications"
              className="w-full flex flex-col items-center justify-center gap-20 scroll-mt-12 py-24 "
            >
              <p className="text-3xl font-bold">Certifications</p>
              {/* Google Certification */}
              <div className="flex flex-row items-center gap-10 lg:gap-28 sm:w-135">
                <Link
                  href="https://www.credly.com/badges/1142c4a8-7d5c-4caf-a68d-22de92fafaf8/public_url"
                  rel="noopener noreferer"
                  target="_blank"
                >
                  <Image
                    className="lg:w-55"
                    src="/google-cloud-computing-foundations-certificate.png"
                    alt="google badge"
                    width={150}
                    height={38}
                    priority
                  />
                </Link>
                {/* text section for badge */}
                <section className="flex flex-col ">
                  <p className="text-lg sm:text-xl font-bold">
                    Google Cloud Computing Foundations
                  </p>
                  <p className="text-xs sm:text-md font-bold">
                    Date Issued: April 17, 2025
                  </p>
                </section>
              </div>
              {/* Basics of Scrum */}
              <div className="flex flex-row justify-start items-start sm:w-135 sm:pr-3 w-full pl-2">
                <div className="flex flex-row gap-10 lg:gap-15 ">
                  <Image
                    className="bg-white p-2 xl:w-50"
                    src="/project-management-institute.svg"
                    alt="google badge"
                    width={150}
                    height={38}
                    priority
                  />
                  <section>
                    <p className="text-lg sm:text-xl font-bold">
                      The Basics of Scrum
                    </p>
                    <p className="text-xs sm:text-base font-bold">
                      Date issued: March 20, 2025
                    </p>
                  </section>
                </div>
              </div>
              {/* Basics of Disciplined Aglie */}
              <div className="flex flex-row justify-start sm:w-135  sm:pr-3 w-full pl-2">
                <div className="flex flex-row gap-10 lg:gap-15 ">
                  <Image
                    className="bg-white p-2 xl:w-50"
                    src="/project-management-institute.svg"
                    alt="google badge"
                    width={150}
                    height={38}
                    priority
                  />
                  <section>
                    <p className="text-lg sm:text-xl font-bold">
                      Basics of Disciplined Agile
                    </p>
                    <p className="text-xs sm:text-base font-bold">
                      Date issued: March 20, 2025
                    </p>
                  </section>
                </div>
              </div>
            </section>
            {/* Education Section */}
            <section
              id="education"
              className="w-full flex flex-col items-center justify-center gap-15 pt-24 pb-50 sm:h-200"
            >
              <p id="education-title" className="text-3xl font-bold">
                Education
              </p>
              <Image
                className=""
                src="/CPP_Horizontal_2C_Green_RGB-700px.png"
                alt="CPP logo"
                width={380}
                height={38}
                quality={100}
                priority
              />
              <section className="flex flex-col gap-4 items-center">
                <p className="text-2xl font-semibold">
                  California State Polytechnic University Pomona
                </p>
                <div className="flex flex-row gap-4">
                  <svg
                    className="text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07L128,160Z"
                      opacity="0.2"
                    ></path>
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                  </svg>
                  <p className="font-semibold text-xl ">
                    Bachelor of Science, Computer Science
                  </p>
                </div>
                <p className="font-semibold text-base text-center">
                  Aug 2021 - May 2025
                </p>
              </section>
            </section>
            {/* Contact */}
          </main>
          {/* only for mobile, will stay hidden on larger screens */}
          <footer className="sm:hidden row-start-3 flex gap-[34px] flex-wrap items-center justify-center p-10">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/j-e-ff"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[30px] stroke-black dark:stroke-white hover:stroke-[#5FED83] transition-colors duration-300 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/jeffrey-rodas-hernandez-018665250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="z-10 md:w-80 lg:w-90"
                src="/linkedin-color.svg"
                alt="Me"
                width={30}
                height={38}
                priority
                quality={100}
              />
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                window.open(
                  `mailto:${"rodasjeffrey@gmail.com"}?subject=${""}&body=${""}`,
                  "_blank",
                )
              }
            >
              <Image
                className="z-10 md:w-80 lg:w-90"
                src="/gmail-color.svg"
                alt="Me"
                width={30}
                height={38}
                priority
                quality={100}
              />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
