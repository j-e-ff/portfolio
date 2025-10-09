"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import DropDown from "./Components/DropDown";

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
];

export default function Home() {
  // Initialize with first 6 images
  const [imageStates, setImageStates] = useState([
    images[0],
    images[1],
    images[2],
    images[3],
    images[4],
    images[5],
  ]);

  // Preload images on component mount
  useEffect(() => {
    images.forEach((imageSrc) => {
      const img = new window.Image();
      img.src = imageSrc;
    });
  }, []);

  // helper funciton to invert LE-SSERAFIM.svg and samsung.svg
  const isInverted = (src: string) => {
    return (
      src.includes("LE_SSERAFIM.svg") ||
      src.includes("samsung.svg") ||
      src.includes("apex-legends.svg")
    );
  };

  const getRandomImage = () =>
    images[Math.floor(Math.random() * images.length)];

  useEffect(() => {
    console.log("Setting up intersection observer...");

    const elements = document.querySelectorAll(".observe");
    console.log("Found", elements.length, "elements to observe");

    if (!elements.length) {
      console.log("No elements with .observe class found!");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            "Element intersecting:",
            entry.isIntersecting,
            entry.target
          );
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            console.log("Animation triggered for:", element.className);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Add visibility and animation classes to elements WITHOUT hiding them initially
    elements.forEach((el, index) => {
      console.log(`Setting up element ${index}:`, el);
      el.classList.add(
        "translate-y-10",
        "transition-all",
        "duration-700",
        "ease-out"
      );
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });

    // Elements stay visible for animation

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  function openEmailClient(
    recipient: string,
    subject: string = " ",
    body: string = " "
  ): void {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // construct mailto URL
    const mailtoUrl = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

    // oepn window
    window.open(mailtoUrl, "_blank");
  }

  return (
    <div className="font-sans grid grid-rows-1 items-center justify-center min-h-screen">
      {/* Navbar at top of page */}
      <header className="hidden sm:flex sm:flex-row gap-4 backdrop-blur-3xl fixed top-0 justify-center z-50  h-10 w-full ">
        <button
          className="brightness-50 hover:brightness-100"
          onClick={() => scrollToSection("about")}
        >
          Home{" "}
        </button>
        <button
          className="brightness-50 hover:brightness-100"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className="brightness-50 hover:brightness-100"
          onClick={() => scrollToSection("certifications")}
        >
          Certifications
        </button>
        <button
          className="brightness-50 hover:brightness-100"
          onClick={() => scrollToSection("education")}
        >
          Education
        </button>
      </header>

      <header className="sm:hidden flex w-full fixed top-6 right-4 justify-end z-50">
        <DropDown scrollToSection={scrollToSection}></DropDown>

        {/* <button className="hover:cursor-pointer rounded-sm px-1 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill=""
            className="bi bi-menu-button-wide"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
            <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
          </svg>
        </button> */}
      </header>

      {/* Links to GitHub, LinkedIn, email; Displayed on side of page (bottom left)*/}
      <nav className="opacity-0 sm:opacity-100 flex flex-col fixed bottom-12 left-8 gap-4">
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
          </Link>
        </div>

        {/* LINKEDIN */}
        <div className="group">
          <Link
            href="https://linkedin.com/in/jeffrey-rodas-018665250"
            rel="noopener noreferer"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] stroke-black dark:stroke-white group-hover:stroke-[#0077B5] transition-colors duration-300 cursor-pointer"
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
              "_blank"
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
                className="transition-all duration-500 group-hover:stroke-[url(#gmailGradient)] dark:stroke-white"
              />
            </svg>
          </div>
        </div>
      </nav>

      <main className="flex flex-col gap-[32px] overflow-y-auto w-full">
        {/* About Me Section */}
        <div
          id="about"
          className="w-full min-h-screen flex flex-col gap-8 sm:flex-row justify-center items-center sm:gap-40 relative overflow-hidden"
        >
          <div className="text">
            <p className="text-3xl font-bold">Software Engineer</p>
            <p className="text-2xl font-semibold">Front-End</p>
          </div>

          <Image
            className="z-10"
            src="/me.jpg"
            alt="Me"
            width={320}
            height={38}
            priority
          />

          {/* Falling images */}
          {imageStates.map((imageSrc, index) => (
            <div
              key={index}
              className={`absolute top-0 animate-fall ${
                isInverted(imageSrc) ? "dark:invert" : ""
              }`}
              style={{
                left: `${10 + index * 15}vw`,
                animationDelay: `${index * 1.5}s`,
              }}
              onAnimationIteration={() => {
                setImageStates((prev) => {
                  const newStates = [...prev];
                  newStates[index] = getRandomImage();
                  return newStates;
                });
              }}
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

        {/* Projects Section */}
        <div
          id="projects"
          className="w-full flex flex-col gap-20 min-h-screen scroll-mt-12"
        >
          <div className="w-full flex flex-col justify-center items-center gap-6 ">
            <p className="text-2xl font-bold sticky">Projects</p>
            <p>Current projects deployed</p>
          </div>
          {/* Cards displaying the projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-y-12 sm:gap-y-0 w-full sm:h-220">
            {/* umedia */}
            <div className="observe group relative bg-[url(/umedia-home.png)] bg-cover mx-auto flex w-100 h-80 sm:w-85 sm:h-80 md:w-100 md:h-90 lg:w-120 lg:h-100 xl:w-120 sm:gap-x-4 rounded-xl ">
              <Link
                href="https://umedia.rodasjeffrey.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="absolute inset-0 hover:bg-black/80 text-center flex flex-col gap-10 rounded-xl items-center ">
                  <p className="text-white opacity-0 group-hover:opacity-100 brightness-200 text-xl pt-8">
                    Umedia
                  </p>
                  <div className="textbox flex flex-col text-center sm:w-85 md:w-95">
                    <p className="text-white opacity-0 group-hover:opacity-100 brightness-200 text-xs lg:text-lg">
                      Social media website that combines features from Reddit
                      and X, supporting image and text-based posts, user
                      messaging, following users, and forum/topic subscription.
                    </p>
                  </div>
                  {/* icons */}
                  <div className="opacity-0 group-hover:opacity-100 flex flex-row gap-4 justify-center">
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
            {/* cinemasite */}
            <div className="observe group relative bg-[url(/cinemasite.png)] bg-cover mx-auto flex w-100 h-80 sm:w-85 sm:h-80 md:w-100 md:h-90 lg:w-120 lg:h-100  gap-x-4 rounded-xl ">
              <Link
                href="https://cinemasite.rodasjeffrey.com"
                rel="noopener noreferer"
                target="_blank"
              >
                <div className="absolute inset-0 hover:bg-black/80 text-center flex flex-col gap-15 p-6 rounded-xl">
                  <div className="gap-10 flex flex-col items-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 brightness-200 text-xl mt-4">
                      CinemaSite
                    </p>
                    <div className="textbox flex flex-col text-center w-95">
                      <p className="lg:text-lg text-white opacity-0 group-hover:opacity-100 brightness-200">
                        Movie database (and tv-shows) site where users can
                        search for content, allowing them to add to favorites
                        list or watch later list. Uses The Movie Database API
                        and JustWatch for information.
                      </p>
                    </div>
                    {/* icons */}
                    <div className="opacity-0 group-hover:opacity-100 flex flex-row gap-3 justify-center">
                      <Image
                        src="/react-2.svg"
                        alt="react logo"
                        width={25}
                        height={38}
                        priority
                      />
                      <Image
                        className=""
                        src="/vitejs.svg"
                        alt="vite logo"
                        width={25}
                        height={38}
                        priority
                      />
                      <Image
                        className=""
                        src="/firebase-1.svg"
                        alt="firebase logo"
                        width={20}
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
            {/* weather */}
            <div className="observe group relative bg-[url(/weather-app.png)] bg-cover mx-auto flex w-100 h-80 sm:w-85 sm:h-80 md:w-100 md:h-90 lg:w-120 lg:h-100 gap-x-4 rounded-xl ">
              <Link
                href="https://weather.rodasjeffrey.com"
                rel="noopener noreferer"
                target="_blank"
              >
                <div className="absolute inset-0 hover:bg-black/80 text-center flex flex-col gap-15 p-6 rounded-xl">
                  <div className="gap-10 flex flex-col items-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 brightness-200 text-xl ">
                      Weather App
                    </p>
                    <p className="lg:text-lg text-white text-start opacity-0 group-hover:opacity-100 brightness-200 w-95">
                      A weather app that takes in a city name to provide weather
                      information from The Weather API. User location can also
                      be used if allowed.
                    </p>
                    {/* icons */}
                    <div className="opacity-0 group-hover:opacity-100 flex flex-row gap-4 justify-center">
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
        </div>
        {/* Certifications Section */}
        <div
          id="certifications"
          className="w-full flex flex-col items-center gap-20 min-h-screen justify-center  pt-4"
        >
          <p className="text-3xl font-bold">Certifications</p>
          {/* Google Certification */}
          <div className="flex flex-row items-center gap-10 lg:gap-15 sm:w-135">
            <Link
              href="https://www.credly.com/badges/1142c4a8-7d5c-4caf-a68d-22de92fafaf8/public_url"
              rel="noopener noreferer"
              target="_blank"
            >
              <Image
                className=""
                src="/google-cloud-computing-foundations-certificate.png"
                alt="google badge"
                width={150}
                height={38}
                priority
              />
            </Link>
            {/* text section for badge */}
            <section className="flex flex-col">
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
                className="bg-white"
                src="/project-management-institute.svg"
                alt="google badge"
                width={150}
                height={38}
                priority
              ></Image>
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
                className="bg-white"
                src="/project-management-institute.svg"
                alt="google badge"
                width={150}
                height={38}
                priority
              ></Image>
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
        </div>
        {/* Education Section */}
        <div
          id="education"
          className="w-full flex flex-col items-center gap-20 h-100 sm:h-200 scroll-mt-12"
        >
          <p className="text-3xl font-bold">Education</p>
          <Image
            className=""
            src="/CPP_Horizontal_2C_Green_RGB-700px.png"
            alt="CPP logo"
            width={380}
            height={38}
            priority
          />
          <section className="flex flex-row gap-4">
            <Image
              src="/graduation.svg"
              alt="falling image"
              width={20}
              height={38}
              className=""
            />
            <p>Aug 2021 - May 2025</p>
          </section>
        </div>
      </main>

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
