"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

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

  return (
    <div className="font-sans grid grid-rows-[40px_1fr_20px] items-center justify-center min-h-screen">
      {/* Navbar at top of page */}
      <header className="hidden sm:flex sm:flex-row gap-4 backdrop-blur-3xl fixed top-0 justify-center z-50  h-10 w-full ">
        <button className="brightness-50 hover:brightness-100">Home </button>
        <button className="brightness-50 hover:brightness-100">Projects</button>
        <button className="brightness-50 hover:brightness-100">
          Certifications
        </button>
        <button className="brightness-50 hover:brightness-100">
          Education
        </button>
      </header>

      <header className="sm:hidden flex w-full fixed top-6 right-4 justify-end ">
        <button>Menu</button>
      </header>

      {/* Links to GitHub, LinkedIn, email; Displayed on side of page (bottom left)*/}
      <nav></nav>

      <main className="flex flex-col gap-[32px] overflow-y-auto w-full">
        {/* About Me Section */}
        <div className="w-full min-h-screen flex flex-col gap-20 sm:flex-row justify-center items-center sm:gap-40 relative overflow-hidden">
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
        <div className="w-full flex flex-col gap-20 min-h-screen">
          <div className="w-full flex flex-col justify-center items-center gap-6 ">
            <p className="text-2xl font-bold sticky">Projects</p>
            <p>Current projects deployed</p>
          </div>
          {/* Cards displaying the projects */}
          <div className="felx flex-col sm:grid sm:grid-cols-2 sm:gap-4 sm:gap-y-12 w-full">
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

            <Link
              href="https://cinemasite.rodasjeffrey.com"
              rel="noopener noreferer"
              target="_blank"
            >
              <div className="observe group relative bg-[url(/cinemasite.png)] bg-cover mx-auto flex w-100 h-80 sm:w-85 sm:h-80 md:w-100 md:h-90 lg:w-120 lg:h-100  gap-x-4 rounded-xl ">
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
              </div>
            </Link>

            <Link
              href="https://weather.rodasjeffrey.com"
              rel="noopener noreferer"
              target="_blank"
            >
              <div className="observe group relative bg-[url(/weather-app.png)] bg-cover mx-auto flex w-100 h-80 sm:w-85 sm:h-80 md:w-100 md:h-90 lg:w-120 lg:h-100 gap-x-4 rounded-xl ">
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
              </div>
            </Link>
          </div>
        </div>
        {/* Certifications Section */}
        <div className="w-full flex flex-col items-center gap-20 min-h-screen justify-start pt-6">
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
          <div className="flex flex-row justify-start items-start sm:w-135 sm:pr-3 w-full">
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
          <div className="flex flex-row justify-start sm:w-135 pr-24 sm:pr-3 w-full ">
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
        <div className="w-full flex flex-col items-center gap-20 h-100 sm:h-200">
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
