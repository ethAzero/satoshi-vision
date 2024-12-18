"use client";
import Image from "next/image";
import Link from "next/link";
export default function WhitepaperPage() {
  return (
    <div>
      <section id="Whitepaper">
        <div className="bg-black py-2">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-8">
            <div className="flex text-white text-justify flex-col w-full sticky md:top-36 lg:w-2/3 mt-2 md:mt-12 px-6">
              <p className="text-yellow-300 text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Whitepaper
              </p>
              <p className="mb-4">
                As seasoned Developers with extensive experience in the crypto
                industry, We have honed our skills to embody the principle of
                minimalism into satoshi vision. Instead of indulging in
                extravagant social media posts or engaging in lengthy
                discussions in Telegram chat rooms, we prioritize action over
                words. I believe that true inspiration lies in actions, not in
                mere verbosity. Hence, when we do speak, every word carries
                purpose and significance.
              </p>
              <div className="flex flex-row gap-2 start-0">
                <a
                  href="/Satoshi Vision - Litepaper.pdf"
                  target="_blank"
                  className="bg-transparent  hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                >
                  Download Litepaper
                </a>
                <a
                  href="/Whitepaper_Saint.pdf"
                  target="_blank"
                  className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                >
                  Download Whitepaper
                </a>
              </div>
            </div>
            <div className="ml-0 md:ml-12 lg:w-1/3 mt-20">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="flex gap-2">
                    <Link
                      href={
                        "https://www.dextools.io/app/en/base/pair-explorer/0x93d65a935e7c0f1aa153780e0db3ad08b9448c89?t=1731779784090"
                      }
                      className="flex gap-1"
                      target="_blank"
                    >
                      <Image
                        src="/dextools.svg"
                        alt="mail"
                        width={20}
                        height={20}
                      />
                    </Link>
                    <Link
                      href={
                        "https://dexscreener.com/base/0x93d65a935e7c0f1aa153780e0db3ad08b9448c89"
                      }
                      className="flex gap-1"
                      target="_blank"
                    >
                      <Image
                        src="/dexscreener1.png"
                        alt="mail"
                        width={20}
                        height={20}
                        className="rounded"
                      />
                    </Link>
                    <Link
                      href={"https://x.com/saint_satoshiai"}
                      className="flex gap-1"
                      target="_blank"
                    >
                      <Image
                        src="/x.png"
                        alt="mail"
                        width={20}
                        height={20}
                        className="ml-0"
                      />
                    </Link>
                    <Link
                      href={"https://t.me/SAINT_byVirtual"}
                      className="flex gap-1"
                      target="_blank"
                    >
                      <Image
                        src="/telegram.svg"
                        alt="mail"
                        width={20}
                        height={20}
                        className="ml-0"
                      />
                    </Link>
                    <Link
                      href={"https://app.virtuals.io/virtuals/2047"}
                      className="flex gap-1"
                      target="_blank"
                    >
                      <Image
                        src="/virtuals.svg"
                        alt="mail"
                        width={20}
                        height={20}
                        className="ml-0"
                      />
                    </Link>
                  </div>
                  <p className="text-yellow-300 text-sm md:text-sm leading-normal md:leading-relaxed mb-2 justify-center  ">
                    © 2024 Property of SATOSHI VISION | All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
