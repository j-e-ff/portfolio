import React from "react";
import Image from "next/image";

interface AboutMeProps {
  fallingImagesRef: React.RefObject<HTMLDivElement | null>;
  images: string[];
  isInverted: (imageSrc: string) => boolean;
}

const AboutMe = ({ fallingImagesRef, images, isInverted }: AboutMeProps) => {
  return (
    <section id="about" className="about-me h-full ">
      <div
        ref={fallingImagesRef}
        className=" w-full min-h-screen flex flex-col gap-8 sm:flex-row justify-center items-center sm:gap-10 md:gap-30 relative overflow-hidden"
      >
        {/* Text About Me */}
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
            Recent Computer Science graduate seeking to launch my career in
            Front-End Web Development
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
  );
};

export default AboutMe;
