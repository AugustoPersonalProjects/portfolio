"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/constants";
import { Phone, Mail, MapPin, Send, Briefcase } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  opportunity: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_ak3cm9a",
        "template_smkvd4e",
        data,
        "3FnUpIJjrQWD6voD7"
      );
      reset();
      alert("Mensagem Enviada com Sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem. Tente novamente");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em <span className="text-emerald-400">Contato</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Estou aberto a novas oportunidades profissionais e colaborações
            inovadoras. Vamos conversar sobre como posso contribuir com seu
            time!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vamos trabalhar juntos!
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Busco oportunidades desafiadoras onde possa aplicar minhas
                habilidades em desenvolvimento full-stack, cloud computing e
                soluções inovadoras.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-6 p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-emerald-400/30 transition-all duration-300"
                >
                  <div className={`p-4 rounded-xl ${info.bg} text-emerald-400`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="p-4 rounded-xl bg-emerald-400/10 text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Localização</h3>
                  <p className="text-gray-400">São Paulo, Brasil</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="p-4 rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Disponibilidade
                  </h3>
                  <p className="text-gray-400">Aberto a oportunidades</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8"
            >
              <h3 className="text-xl font-semibold mb-4">Conecte-se comigo</h3>
              <div className="flex gap-4">
                {[
                  {
                    name: "GitHub",
                    url: "https://github.com/lopeslyra10",
                    color: "hover:text-gray-400",
                  },
                  {
                    name: "LinkedIn",
                    url: "https://linkedin.com/in/augusto-lopes-lyra",
                    color: "hover:text-blue-400",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-gray-500 transition-colors duration-300 ${social.color}`}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Primeiro nome *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: "Primeiro nome é obrigatório",
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none
                     focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    placeholder="Seu primeiro nome"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      required: "Sobrenome é obrigatório",
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none
                     focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    placeholder="Seu sobrenome"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "E-mail é obrigatório",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "E-mail inválido",
                      },
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none
                     focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Número de telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none
                     focus:border-emerald-400 
                    focus:ring-1 focus:ring-emerald-400 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="opportunity"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Tipo de Oportunidade
                </label>
                <select
                  id="opportunity"
                  {...register("opportunity")}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-emerald-400 focus:ring-1
                   focus:ring-emerald-400 transition-colors"
                >
                  <option value="">Selecione o tipo de oportunidade</option>
                  <option value="full-time">Tempo Integral</option>
                  <option value="part-time">Meio Período</option>
                  <option value="internship">Estágio</option>
                  <option value="collaboration">Colaboração</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register("message", {
                    required: "Mensagem é obrigatória",
                  })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none
                   focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
                  placeholder="Conte-me sobre a oportunidade ou como posso contribuir com sua empresa..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-400 text-gray-900 py-4 px-8 rounded-xl font-semibold hover:bg-emerald-300 transition-colors 
                duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}