"use client";

import { motion } from "framer-motion";
import { socialLinks, stats, timelineData } from "@/lib/constants";
import Image from "next/image";
import CountUp from "./CountUp";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="font-sans text-gray-500 mb-4 block">
              Estudante de Análise e Desenvolvimento de Sistemas | FIAP
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Prazer, sou o
              <span className="block text-emerald-400">Augusto Lopes</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Estudante do 4º período na FIAP com sólida base em desenvolvimento web, 
              APIs RESTful, banco de dados e computação em nuvem. Experiência prática 
              com projetos acadêmicos utilizando <span className="text-emerald-400">Go, Java, Python</span> e 
              frameworks modernos como <span className="text-emerald-400">React, Next.js e Spring Boot</span>.
            </p>

            <div className="space-y-4 mb-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-emerald-400/30 transition-colors group"
                >
                  <div className={`p-2 rounded-lg bg-gray-800 group-hover:bg-emerald-400/10 transition-colors`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <motion.a
                href="./Curriculo 1.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-400 text-gray-900 py-3 px-8 rounded-full font-semibold hover:bg-emerald-300 transition-colors flex items-center gap-3 
                shadow-lg shadow-emerald-400/25"
              >
                <Download size={20} />
                Baixar CV
              </motion.a>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 
                    hover:border-emerald-400 transition-colors hover:bg-emerald-400/10"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex justify-center"
          >
            <div className="w-[400px] h-[400px] relative">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-purple-400/10"
              />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute inset-[-10px] rounded-full border-2 border-emerald-400/20"
              />

              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="absolute inset-[-20px] rounded-full border-2 border-dashed border-emerald-400/10"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-400/10 p-6"
              >
                <Image
                  src="/EuDenovo.png"
                  alt="Augusto Lopes - Desenvolvedor"
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>

              {[
                { text: "Go", top: "10%", left: "5%" },
                { text: "Java", top: "20%", right: "5%" },
                { text: "React", bottom: "20%", left: "5%" },
                { text: "AWS", bottom: "10%", right: "5%" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className={`absolute px-3 py-1 bg-gray-900 border border-emerald-400/30 rounded-full text-xs text-emerald-400 font-medium 
                  ${badge.top} ${badge.left} ${badge.right} ${badge.bottom}`}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1}}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-emerald-400 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-emerald-400 mb-2">
                <CountUp value={Number(stat.number)} />
              </h3>
              <p className="text-gray-400 text-sm">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}