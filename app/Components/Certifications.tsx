import Image from "next/image"
import Link from "next/link"

const Certifications = () => {
  return (
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
  )
}

export default Certifications