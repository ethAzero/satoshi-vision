"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="md:flex md:min-h-screen justify-center md:gap-16 md:pt-40 md:pb-40 container mx-auto flex flex-col items-start md:flex-row my-4 md:my-8 border-b-2">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Image
          src="/SaintImg.png"
          alt="@Sathosi Vision"
          width={100}
          height={100}
          className="overflow-hidden hidden md:block md:w-[400px] md:h-[400px] rounded-full "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
      >
        <div className="m-10 justify-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-7 text-center md:text-start">
            Satoshi Vision
          </h1>
          <h3 className="text-md md:text-xl font-semibold">
            On-Chain Data At Your Fingertips With $SAINT AI Agent
          </h3>
          <h3>
            Contract Address
            <p>Base : 0x93d65a935e7c0f1aa153780e0db3ad08b9448c89</p>
            <p>Solana : 8PXfc6tVKNLUaa6pTfN7VBeTLhe8TH6WpVDYBjG9DWhV</p>
          </h3>
          <div className="flex gap-2 mt-7">
            <Button>
              <Link
                href={
                  "https://www.dextools.io/app/en/base/pair-explorer/0x93d65a935e7c0f1aa153780e0db3ad08b9448c89?t=1731779784090"
                }
                className="flex gap-1"
                target="_blank"
              >
                <Image src="/dextools.svg" alt="mail" width={20} height={20} />
                <span className="hidden md:block">DexTools</span>
              </Link>
            </Button>
            <Button>
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
                <span className="hidden md:block">Dexscreener</span>
              </Link>
            </Button>
            <Button>
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
                <span className="hidden md:block">X / Twitter</span>
              </Link>
            </Button>
            <Button>
              <Link
                href={"https://t.me/+bbwDofGgcDBkYzRh"}
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
                <span className="hidden md:block">Telegram</span>
              </Link>
            </Button>
            <Button>
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
                <span className="hidden md:block">Buy $SAINT</span>
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
