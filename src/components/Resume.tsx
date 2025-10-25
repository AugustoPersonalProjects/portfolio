"use client";

import { ExperienceTabs, resumeData, skillsData } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {resumeData.experience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-emerald-400 before:rounded-full"
              >
                <span className="text-emerald-400 text-sm font-medium">
                  {experience.period}
                </span>
                <h3 className="text-xl ">{experience.title}</h3>
                <p className="text-gray-400">{experience.company}</p>
                <p className="text-gray-400">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case "education":
        return (
          <div className="grid gap-6">
            {resumeData.education.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                {/* Ícone */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {education.title.charAt(0)}
                </div>

                {/* Conteúdo */}
                <div className="flex-grow">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{education.title}</h3>
                    <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-sm font-medium rounded-full">
                      {education.period}
                    </span>
                  </div>

                  <p className="text-emerald-400 font-medium mb-2">
                    {education.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {education.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "skills":
        return (
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.15, y: -5 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                <div className="relative z-10 flex flex-col items-center p-3 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 mb-3">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {skill.name}
                  </span>
                </div>
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        );
      case "about":
        return (
          <div className="max-w-4xl ml-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Coluna principal */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  {resumeData.about.description}
                </motion.p>

                {/* Timeline pessoal */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-400">
                    Minha Jornada
                  </h3>
                  <div className="space-y-4">
                    {[
                      { year: "2023", event: "Primeiras linhas de código usando Portugol" },
                      { year: "2024", event: "Projetos Pessoais" },
                      { year: "2024", event: "Foco em desenvolvimento web" },
                      { year: "2024", event: "Cursos da Alura sobre fullstack e IA" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 bg-emerald-400/10 rounded-full flex items-center justify-center text-emerald-400 font-semibold">
                          {item.year}
                        </div>
                        <span className="text-gray-300">{item.event}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coluna lateral */}
              <div className="space-y-6">
                {/* Interesses */}
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                    Interesses
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {resumeData.about.interests.map((interest, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="p-3 bg-gray-800 rounded-lg text-center hover:bg-emerald-400/10 transition-colors"
                      >
                        <span className="text-gray-300 text-sm">
                          {interest}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Metas */}
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                    Metas 2025
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Dominar AWS",
                      "Contribuir para Open Source",
                      "Me integrar um time de desenvolvedores",
                      "Certificação Cloud",
                    ].map((goal, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="text-gray-300 text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-10">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[300px,1fr] gap-12">
          {/* Sidebar */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-8"
            >
              Por que me contratar?
            </motion.h2>

            <div className="space-y-2">
              {ExperienceTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full p-4 text-left rounded-lg transition-colors ${
                    tab.id === activeTab
                      ? "bg-emerald-400 text-gray-900"
                      : "bg-gray-900 text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/*  Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold mb-8"
            >
              {ExperienceTabs.find((tab) => tab.id === activeTab)?.title}
            </motion.h2>

            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
