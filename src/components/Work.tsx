"use client";

import { projects } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meus <span className="text-emerald-400">Projetos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Uma jornada através dos meus principais trabalhos acadêmicos e pessoais, 
            mostrando evolução e paixão por desenvolvimento e inovação.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-emerald-400/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                
                {/* Project Number */}
                <div className="absolute top-6 left-6">
                  <span className="text-6xl font-bold text-emerald-400/20">
                    {project.number}
                  </span>
                </div>

                {/* Hover Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-6 right-6 flex gap-3"
                >
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-emerald-400 transition-colors border border-gray-700"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.demoLink && project.demoLink !== "#" && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-sm rounded-full border border-emerald-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Ver Código
                    </motion.a>
                  )}
                  {project.demoLink && project.demoLink !== "#" && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Ver Demo
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interessado em trabalhar juntos?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Vamos transformar suas ideias em realidade. Estou sempre aberto a discutir 
              novos projetos e oportunidades criativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-emerald-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-emerald-300 transition-colors"
              >
                Entrar em Contato
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-colors"
              >
                Ver Resumo do meu perfil
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "5+", label: "Projetos Concluídos" },
            { number: "10+", label: "Tecnologias" },
            { number: "100%", label: "Comprometimento" },
            { number: "∞", label: "Paixão por Code" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}