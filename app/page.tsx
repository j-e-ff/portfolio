"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";
import { Draggable } from "gsap/Draggable";
import Interests from "./Components/Interests";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import AboutMe from "./Components/AboutMe";

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
    <div id="smooth-wrapper">
      {/* Navbar at bottom of page */}
      <nav className="hidden sm:flex sm:flex-row gap-4 backdrop-blur-3xl absolute bottom-10 left-1/2 -translate-x-1/2 justify-center z-30 p-2 rounded-full">
        {/* Home Button */}
        <button
          className={`cursor-pointer hover:brightness-100 text-lg ${
            activeSection === "about" ? "brightness-100" : "brightness-50 "
          }`}
          onClick={() => scrollToSection("about")}
        >
          Home{" "}
        </button>

        {/* Projects Button */}
        <button
          className={`cursor-pointer hover:brightness-100 text-lg ${
            activeSection === "projects" ? "brightness-100" : "brightness-50 "
          }`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>

        {/* Certifications Button */}
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

        {/* Interest Button */}
        <button
          className={`cursor-pointer hover:brightness-100 text-lg ${
            activeSection === "projects" ? "brightness-100" : "brightness-50 "
          }`}
          onClick={() => scrollToSection("interests")}
        >
          Interests
        </button>

        {/* Education Button */}
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
      <section className="opacity-0 sm:opacity-100 flex flex-col absolute z-20 bottom-12 right-12 left-8 sm:left-2 md:left-4 lg:left-6 xl:left-8 gap-4">
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
      <div
        id="smooth-content"
        className="font-sans grid grid-rows-1 items-center justify-center min-h-screen text-foreground bg-background"
      >
        <main className="flex flex-col gap-[32px] overflow-y-auto w-full md:px-12 lg:px-15 ">
          {/* About Me Section */}
          <AboutMe
            fallingImagesRef={fallingImagesRef}
            images={images}
            isInverted={isInverted}
          />
          ``
          {/* Projects Section */}
          <Projects projectRef={projectRef} />
          {/* Certifications Section */}
          <Certifications />
          {/* Interests */}
          <Interests />
          {/* Education Section */}
          <Education />
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
  );
}
