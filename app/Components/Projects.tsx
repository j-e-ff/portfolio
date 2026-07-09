import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  projectRef: React.RefObject<HTMLDivElement | null>;
}

const Projects = ({ projectRef }: ProjectsProps) => {
  return (
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
                    Movie database (and tv-shows) site where users can search
                    for content, allowing them to add to favorites list or watch
                    later list. Uses The Movie Database API and JustWatch for
                    information.
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
                  Social media website that combines features from Reddit and X,
                  supporting image and text-based posts, user messaging,
                  following users, and forum/topic subscription.
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
                  A weather app that takes in a city name to provide weather
                  information from The Weather API. User location can also be
                  used if allowed.
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
  );
};

export default Projects;
