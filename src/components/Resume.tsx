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
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {resumeData.experience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 md:pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-emerald-400 before:rounded-full"
              >
                <span className="text-emerald-400 text-xs md:text-sm font-medium">
                  {experience.period}
                </span>
                <h3 className="text-lg md:text-xl font-semibold mt-1">{experience.title}</h3>
                <p className="text-gray-400 text-sm md:text-base mt-1">{experience.company}</p>
                <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        );
      case "education":
        return (
          <div className="grid gap-4 md:gap-6">
            {resumeData.education.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col sm:flex-row gap-4 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                {/* Ícone */}
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-base md:text-lg">
                  {education.title.charAt(0)}
                </div>

                {/* Conteúdo */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-semibold">{education.title}</h3>
                    <span className="px-2 py-1 bg-emerald-400/10 text-emerald-400 text-xs md:text-sm font-medium rounded-full w-fit">
                      {education.period}
                    </span>
                  </div>

                  <p className="text-emerald-400 font-medium text-sm md:text-base mb-2">
                    {education.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "skills":
        return (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.03,
                }}
                className="group relative"
              >
                <div className="relative z-10 flex flex-col items-center p-2 md:p-3 bg-gradient-to-br from-emerald-950 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl md:rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 md:w-14 md:h-14 mb-2 md:mb-3">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
                {/* Efeito de brilho no hover - apenas desktop */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        );
      case "about":
        return (
          <div className="max-w-4xl mx-auto lg:ml-auto">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Coluna principal */}
              <div className="space-y-4 md:space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-base md:text-lg text-gray-300 leading-relaxed"
                >
                  {resumeData.about.description}
                </motion.p>

                {/* Timeline pessoal */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-400">
                    Minha Jornada
                  </h3>
                  <div className="space-y-3 md:space-y-4">
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
                        className="flex items-start gap-3 md:gap-4"
                      >
                        <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-emerald-400/10 rounded-full flex items-center justify-center text-emerald-400 font-semibold text-sm md:text-base">
                          {item.year}
                        </div>
                        <span className="text-gray-300 text-sm md:text-base pt-1 md:pt-0">{item.event}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coluna lateral */}
              <div className="space-y-4 md:space-y-6">
                {/* Interesses */}
                <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800">
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-emerald-400">
                    Interesses
                  </h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {resumeData.about.interests.map((interest, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="p-2 md:p-3 bg-gray-800 rounded-lg text-center hover:bg-emerald-400/10 transition-colors"
                      >
                        <span className="text-gray-300 text-xs md:text-sm">
                          {interest}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Metas */}
                <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800">
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-emerald-400">
                    Metas 2025/2026
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      "Dominar AWS",
                      "Contribuir para Open Source",
                      "Me juntar um time de desenvolvedores",
                      "Certificação Cloud",
                    ].map((goal, index) => (
                      <div key={index} className="flex items-center gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                        <span className="text-gray-300 text-sm md:text-sm">{goal}</span>
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Layout mobile: coluna única */}
        <div className="block lg:hidden space-y-8">
          {/* Header mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Por que me contratar?
            </h2>
            <p className="text-gray-400 text-sm">
              {ExperienceTabs.find((tab) => tab.id === activeTab)?.title}
            </p>
          </motion.div>

          {/* Tabs mobile - horizontal scroll */}
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2 min-w-max">
              {ExperienceTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-4 py-3 text-sm rounded-lg transition-all duration-300 whitespace-nowrap ${
                    tab.id === activeTab
                      ? "bg-emerald-400 text-gray-900 shadow-lg shadow-emerald-400/25 font-semibold"
                      : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {tab.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content mobile */}
          <div className="pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Layout desktop: grid lateral */}
        <div className="hidden lg:grid lg:grid-cols-[280px,1fr] gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8"
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
                  className={`w-full p-4 text-left rounded-lg transition-all duration-300 ${
                    tab.id === activeTab
                      ? "bg-emerald-400 text-gray-900 shadow-lg shadow-emerald-400/25 font-semibold"
                      : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {tab.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8"
            >
              {ExperienceTabs.find((tab) => tab.id === activeTab)?.title}
            </motion.h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}