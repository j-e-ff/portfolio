import React, { useState } from "react";
import Image from "next/image";

interface DropDownProps {
  scrollToSection: (id: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ scrollToSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div
      className={`flex flex-col justify-end items-end gap-1 text-black ${
        active ? "opacity-100" : "opacity-100"
      }`}
    >
      <button
        onClick={() => (setIsExpanded(!isExpanded), setActive(!active))}
        className="text-white px-2 py-1 rounded-sm cursor-pointer"
      >
        <Image src="dropdown-arrow.svg" alt="dropdown" width={20} height={20} />
      </button>
      {isExpanded && (
        <div className="bg-white/70 rounded-sm px-2 py-1">
          <ul className="items-center h-full w-full">
            <li
              className="text-base hover:cursor-pointer justify-center items-center h-6 flex flex-row"
              onClick={() => (
                scrollToSection("about"), setIsExpanded(false), setActive(false)
              )}
            >
              Home
            </li>
            <li
              className="text-base hover:cursor-pointer justify-center items-center h-6 flex flex-row"
              onClick={() => (
                scrollToSection("projects"),
                setIsExpanded(false),
                setActive(false)
              )}
            >
              Projects
            </li>
            <li
              className="text-base hover:cursor-pointer justify-center items-center h-6 flex flex-row"
              onClick={() => (
                scrollToSection("certifications"),
                setIsExpanded(false),
                setActive(false)
              )}
            >
              Certifications
            </li>
            <li
              className="text-base hover:cursor-pointer justify-center items-center h-6 flex flex-row"
              onClick={() => (
                scrollToSection("education"),
                setIsExpanded(false),
                setActive(false)
              )}
            >
              Education
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
