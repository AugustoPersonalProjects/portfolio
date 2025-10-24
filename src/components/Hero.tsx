"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { socialLinks, stats } from "@/lib/constants";
import Image from "next/image";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <>
      <section className="min-h-screen bg-gray-950 text-white pt-20">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-sans text-gray-500 mb-4 block text-center lg:text-left">
                Desenvolvedor Back-End | Data Science | Cloud Architect
              </span>
              <h1 className="text-5xl font-bold mb-4 text-center lg:text-left">
                Prazer, me chamo
                <span className="block text-emerald-400 mt-2">
                  Augusto Lopes!
                </span>
              </h1>

              <p className="text-gray-400 mb-8 text-center lg:text-left">
                Especializado em criar experiêcias digitais elegantes e possuo
                conhecimentos em diversas linguagens de programação e
                tecnologias.
              </p>

              <div className="flex flex-col items-center gap-4 lg:flex-row">
                <motion.a
                  href="./Curriculo 1.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full lg:w-auto bg-emerald-400 text-gray-900 py-3 px-6
                  rounded-full flex items-center justify-center gap-2
                   hover:bg-emerald-300"
                >
                  <Download size={20} />
                  Download
                </motion.a>

                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-800 rounded-full flex
                          items-center justify-center text-gray-400
                          hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative flex-1"
            >
              <div className="w-[350px] h-[350px] relative mx-auto">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity
                  }}
                  className="absolute inset-0 rounded-full border-2 border-emerald-400/20"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="absolute inset-[-10px] rounded-full border-2
                   border-emerald-400/10"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="absolute inset-[-20px] rounded-full border-2 border-dashed border-emerald-400/5"
                />

                <Image
                  src="/EuDenovo.png"
                  alt="Minha foto de perfil"
                  fill
                  className="object-cover rounded-full p-4"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid gap-8 mt-20"
          >
            {stats.map((stat, index) => (
             <div key={index} className="flex items-center gap-4">
                <h2 className="text-4xl font-bold text-emerald-400">
                    <CountUp value={Number(stat.number)} />
                </h2>   
                <p className="text-gray-400 text-sm">{stat.text}</p>
             </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
