"use client";

import { projects } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight, Play } from "lucide-react";
import { useState } from "react";

// Componente para vídeos do YouTube
const YouTubeEmbed = ({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        className="w-full h-full object-cover"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Dados dos projetos com vídeos
  const projectsWithVideos = projects.map((project) => {
    let videoId = null;

    if (project.title === "SafeHeat IoT") {
      videoId = "9n_K0XHne1E";
    } else if (project.title === "MotoTrack IoT") {
      videoId = "uVLPKGbsSKk";
    }

    return {
      ...project,
      videoId,
    };
  });

  // Função para evitar propagação de eventos
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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
            Uma jornada através dos meus principais trabalhos acadêmicos e
            pessoais, mostrando evolução e paixão por desenvolvimento e
            inovação.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projectsWithVideos.map((project, index) => (
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
              {/* Project Media - Imagem ou Vídeo */}
              <div className="relative h-80 overflow-hidden">
                {project.videoId ? (
                  // Container do vídeo
                  <div className="w-full h-full bg-black">
                    <YouTubeEmbed
                      videoId={project.videoId}
                      title={project.title}
                    />

                    {/* Badge de Vídeo - POSICIONADO CORRETAMENTE */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center gap-2 bg-emerald-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        <Play size={16} fill="currentColor" />
                        Vídeo Demo
                      </div>
                    </div>
                  </div>
                ) : (
                  // Imagem padrão
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Gradient para imagens */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  </>
                )}

                {/* Project Number - ATRÁS dos botões */}
                <div className="absolute top-6 left-6 z-0">
                  <span className="text-6xl font-bold text-emerald-400/20">
                    {project.number}
                  </span>
                </div>

                {/* BOTÕES DE AÇÃO - COM z-index ALTO E SEM OVERLAY BLOQUEADOR */}
                <div className="absolute top-6 right-6 z-30 flex gap-3">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-emerald-400 transition-colors border border-gray-700 hover:border-emerald-400"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}

                  {/* Botão Demo ou YouTube */}
                  {project.videoId ? (
                    <motion.a
                      href={`https://youtube.com/watch?v=${project.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                      title="Assistir no YouTube"
                    >
                      <Play size={20} fill="currentColor" />
                    </motion.a>
                  ) : project.demoLink && project.demoLink !== "#" ? (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  ) : null}
                </div>
              </div>

              {/* Project Content - ÁREA CLICÁVEL SEPARADA */}
              <div className="p-8 relative z-10">
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

                {/* LINKS CLICÁVEIS NA PARTE INFERIOR */}
                <div className="flex gap-4 flex-wrap">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium border border-transparent hover:border-emerald-400/20 px-3 py-2 rounded-lg hover:bg-emerald-400/5"
                    >
                      <Github size={16} />
                      Ver Código
                    </motion.a>
                  )}

                  {project.videoId ? (
                    <motion.a
                      href={`https://youtube.com/watch?v=${project.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-medium border border-transparent hover:border-red-400/20 px-3 py-2 rounded-lg hover:bg-red-400/5"
                    >
                      <Play size={16} fill="currentColor" />
                      Assistir Vídeo
                    </motion.a>
                  ) : project.demoLink && project.demoLink !== "#" ? (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium border border-transparent hover:border-emerald-400/20 px-3 py-2 rounded-lg hover:bg-emerald-400/5"
                    >
                      <ExternalLink size={16} />
                      Ver Demo
                    </motion.a>
                  ) : null}
                </div>
              </div>

              {/* Animated Border Effect - SEM BLOQUEAR CLIQUES */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
              Vamos transformar suas ideias em realidade. Estou sempre aberto a
              discutir novos projetos e oportunidades criativas.
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
                Ver Meu Currículo
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
