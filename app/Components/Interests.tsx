import Image from "next/image";
import Suggestions from "./Suggestions";
import kdrama from "../data/k-drama.json";
import Photos from "../data/photos.json";
import { useState, useEffect } from "react";

interface KDramaProps {
  title: string;
  backdrop: string;
  genre: string[];
  overview: string;
}

interface PhotoProps {
  path: string;
}

function generateRandomIndex(min: number, max: number) {
  const range = max - min + 1;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return min + (array[0] % range);
}

const Interests = () => {
  const kdrams: KDramaProps[] = kdrama as KDramaProps[];
  const photos: PhotoProps[] = Photos as PhotoProps[];

  const [randomIndex, setRandomIndex] = useState<number>(0);
  const [randomPhotoIndex, setRandomPhotoIndex] = useState<number>(0);

  useEffect(() => {
    const index = generateRandomIndex(0, kdrama.length - 1);
    const photoIndex = generateRandomIndex(0, photos.length - 1);
    setRandomIndex(index);
    setRandomPhotoIndex(photoIndex);
  }, []);

  const changeIndex = (num: number, data: string) => {
    if (data === "kdrama") {
      if (randomIndex == 0) {
        setRandomIndex(kdrams.length - 1);
      } else {
        setRandomIndex((prevIndex) => (prevIndex + num) % kdrams.length);
      }
    } else if (data === "photos") {
      if (randomPhotoIndex == 0) {
        setRandomPhotoIndex(photos.length - 1);
      } else {
        setRandomPhotoIndex((prevIndex) => (prevIndex + num) % photos.length);
      }
    }
  };

  return (
    <section id="interests" className="flex flex-col items-center">
      <p className="text-3xl font-bold">Interests</p>
      <div className="min-h-150 max-w-300 grid grid-cols-6 gap-5 p-2 sm:p-12  ">
        {/* Photos display */}
        <div className="bg-neutral-800 text-center rounded-2xl col-span-4 max-h-120 relative">
          <Image
            className="w-full h-full rounded-2xl object-cover "
            src={photos[randomPhotoIndex]?.path}
            alt="Interests"
            width={1000}
            height={100}
          />

          {/* Previou Button */}
          <button
            onClick={() => changeIndex(-1, "photos")}
            className="absolute z-20 left-5 bg-neutral-500 rounded-full opacity-60 hover:opacity-80 hover:cursor-pointer top-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
            </svg>
          </button>
          {/* Next Button */}
          <button
            onClick={() => changeIndex(-1, "photos")}
            className="absolute z-20 right-5 bg-neutral-500 rounded-full opacity-60 hover:opacity-80 hover:cursor-pointer top-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
            </svg>
          </button>
        </div>
        {/* Music Suggestion */}
        <div className="text-center h-full col-span-2 flex justify-center">
          <Suggestions />
        </div>
        {/* Badminton Section */}
        <div className="text-start col-span-2 max-h-65 bg-neutral-800 rounded-2xl p-4 gap-8 flex flex-col overflow-scroll wrap-anywhere">
          <p className="text-2xl font-bold pt-2">Badminton</p>
          <p className="text-base font-semibold ">
            I developed an interest in badminton during my college years.
          </p>
          <div className="text-footer gap-4">
            <button className="button bg-neutral-700 p-2 rounded-full text-sm">
              precision
            </button>{" "}
            <button className="button bg-neutral-700 p-2 rounded-full text-sm">
              reflexes
            </button>
          </div>
        </div>
        {/* Kdrama Section */}
        <div className="text-start col-span-4 h-65 pt-4  bg-neutral-800 rounded-2xl overflow-hidden">
          {/* Title */}
          <p className="text-2xl font-bold sm:pb-4 px-4 ">K-Drama</p>
          <div className="flex flex-col sm:flex-row w-full h-50 items-center">
            {/* Image and Buttons Container */}
            <div className="kdrama-image-container relative w-1/2 sm:w-1/2 sm:h-full p-4">
              <Image
                className="w-full h-full rounded-2xl mask-r-from-8% "
                src={kdrams[randomIndex]?.backdrop}
                alt="Interests"
                width={1000}
                height={100}
              />
              {/* Previou Button */}
              <button
                onClick={() => changeIndex(-1, "kdrama")}
                className="absolute z-20 left-5 bg-neutral-500 rounded-full opacity-60 hover:opacity-80 hover:cursor-pointer top-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
                </svg>
              </button>
              {/* Next Button */}
              <button
                onClick={() => changeIndex(-1, "kdrama")}
                className="absolute z-20 right-5 bg-neutral-500 rounded-full opacity-60 hover:opacity-80 hover:cursor-pointer top-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col w-1/2">
              <p className="text-xl font-bold px-2 ">
                {kdrams[randomIndex]?.title}
              </p>
              <p className="text-base font-semibold px-2  overflow-scroll sm:h-35">
                {kdrams[randomIndex]?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
