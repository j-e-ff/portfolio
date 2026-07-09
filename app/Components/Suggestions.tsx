import playlist_data from "../data/playlist_data.json";
import Image from "next/image";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SongProps {
  title: string;
  artists: string[];
  album: string;
  album_art: string;
  videoId: string;
  genre: string;
}

function generateRandomIndex(min: number, max: number) {
  const range = max - min + 1;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return min + (array[0] % range);
}

const Suggestions = () => {
  const [song, setSong] = useState<SongProps | null>(null);
  const songs: SongProps[] = playlist_data as SongProps[];

  useEffect(() => {
    const randomIndex = generateRandomIndex(0, songs.length - 1);
    setSong(songs[randomIndex]);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "fade-in",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 },
    );
  });

  const handleNextSuggestion = () => {
    const randomIndex = generateRandomIndex(0, songs.length - 1);
    setSong(songs[randomIndex]);
  };

  if (!song) {
    return (
      // container
      <div className="fade-in flex flex-col items-center gap-2 p-2 rounded-lg bg-neutral-700 text-white w-50 h-65 justify-center ">
        {/* Album Art */}
        <p>Song Suggesstion</p>
        <p>refresh to see my suggestion</p>
      </div>
    );
  }
  return (
    // container - fixed size so album art can never change the card's footprint
    <div className="fade-in flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-neutral-800 text-white w-full h-full">
      {/* Album Art */}
      <div className="relative w-full h-1/2 md:h-3/4 p-2">
        <Image
          src={song.album_art}
          alt={song.title + "album art"}
          sizes="200px"
          fill
          className="rounded-xl"
        />
      </div>

      {/* Track Information */}
      <div className="flex flex-col items-center justify-center gap w-full md:h-1/4 gap-2">
        <h2 className="sm:text-xs md:text-sm font-bold">{song.title}</h2>
        <p className="sm:text-xs md:text-sm font-semibold">
          {song.artists.join(", ")}
        </p>

        <button
          onClick={() => handleNextSuggestion()}
          className="hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Suggestions;
