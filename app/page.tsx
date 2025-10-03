import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[40px_1fr_20px] items-center justify-items-center min-h-screen">
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

      <header className="sm:hidden flex w-full fixed top-6 justify-end px-4">
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
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <div className="w-20 h-20 bg-red-500 animate-fall"></div>

          {/* Falling image */}
          <div className="absolute top-0 left-10 w-[50px] h-[38px] animate-">
            <Image
              src="/daisyUI-rotating.svg"
              alt="Daisy UI Logo"
              width={50}
              height={38}
              className="w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="w-full flex flex-col items-center gap-20 min-h-screen">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <h1 className="text-3xl font-bold">Projects</h1>
            <p>Current projects deployed</p>
          </div>
          {/* Cards displaying the projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-12 w-full ">
            <Link
              href="https://umedia.rodasjeffrey.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="group relative bg-[url(/umedia-home.png)] bg-cover mx-auto flex w-100 h-80 sm:w-85 sm:h-80 md:w-100 md:h-90 lg:w-120 lg:h-100 xl:w-120 gap-x-4 rounded-xl justify-center">
                <div className="absolute inset-0 hover:bg-black/80 text-center flex flex-col gap-15 p-6">
                  <h1 className="opacity-0 group-hover:opacity-100 brightness-200 text-xl ">
                    Umedia
                  </h1>
                  <section className="flex flex-col gap-15 text-start">
                    <p className="opacity-0 group-hover:opacity-100 brightness-200">
                      Social media website that combines features from Reddit
                      and X, supporting image and text-based posts, user
                      messaging, following users, and forum/topic subscription.
                    </p>
                    {/* icons */}
                    <div className="opacity-0 group-hover:opacity-100 flex flex-row gap-4">
                      <Image
                        className=""
                        src="/react-2.svg"
                        alt="react logo"
                        width={25}
                        height={38}
                        priority
                      />
                      <Image
                        className="dark:invert"
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
                  </section>
                </div>
              </div>
            </Link>

            <Link
              href="https://cinemasite.rodasjeffrey.com"
              rel="noopener noreferer"
              target="_blank"
            >
              <div className="group relative bg-[url(/cinemasite.png)] bg-cover mx-auto flex w-100 h-80 sm:w-85 sm:h-80 md:w-100 md:h-90 lg:w-120 lg:h-100  gap-x-4 rounded-xl justify-center ">
                <div className="absolute inset-0 hover:bg-black/80 text-center flex flex-col gap-15 p-6">
                  <div className="gap-15 flex flex-col">
                    <h1 className="opacity-0 group-hover:opacity-100 brightness-200 text-xl">
                      CinemaSite
                    </h1>
                    <section className="flex flex-col gap-15 text-start">
                      <p className="opacity-0 group-hover:opacity-100 brightness-200">
                        Movie database (and tv-shows) site where users can
                        search for content, allowing them to add to favorites
                        list or watch later list. Uses The Movie Database API
                        and JustWatch for information.
                      </p>
                      {/* icons */}
                      <div className="opacity-0 group-hover:opacity-100 flex flex-row gap-4">
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
                    </section>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="https://weather.rodasjeffrey.com"
              rel="noopener noreferer"
              target="_blank"
            >
              <div className="group relative bg-[url(/weather-app.png)] bg-cover mx-auto flex w-100 h-80 sm:w-85 sm:h-80 md:w-100 md:h-90 lg:w-120 lg:h-100 gap-x-4 rounded-xl justify-center">
                <div className="absolute inset-0 hover:bg-black/80 text-center flex flex-col gap-15 p-6">
                  <div className="gap-15 flex flex-col ">
                    <h1 className="opacity-0 group-hover:opacity-100 brightness-200 text-xl">
                      Weather App
                    </h1>
                    <p className="text-start opacity-0 group-hover:opacity-100 brightness-200">
                      A weather app that takes in a city name to provide weather
                      information from The Weather API. User location can also
                      be used if allowed.
                    </p>
                    {/* icons */}
                    <div className="opacity-0 group-hover:opacity-100 flex flex-row gap-4">
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
        <div className="w-full flex flex-col items-center gap-20 min-h-screen justify-center">
          <h1 className="text-3xl font-bold">Certifications</h1>
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
          <div className="flex flex-row justify-start sm:w-135 pr-3">
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
          <div className="flex flex-row justify-start sm:w-135 pr-3">
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
        <div className="w-full flex flex-col items-center gap-20 h-300">
          <h1 className="text-3xl font-bold">Education</h1>
          <Image
            className=""
            src="/CPP_Horizontal_2C_Green_RGB-700px.png"
            alt="Next.js logo"
            width={380}
            height={38}
            priority
          />
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
