"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useMemo } from "react";
import { menuItems } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Otimização: useCallback para evitar recriações desnecessárias
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Otimização: useMemo para menuItems computado
  const navItems = useMemo(() => {
    return menuItems.map((item) => ({
      ...item,
      isActive: pathname === item.path,
    }));
  }, [pathname]);

  // CORREÇÃO: Definição correta das variantes com tipagem TypeScript
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const // Adicionar 'as const' para fixar o tipo
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const // Adicionar 'as const' para fixar o tipo
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={closeMenu}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors duration-200"
            >
              Augusto<span className="text-emerald-400">.</span>Lopes
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className={`${
                    item.isActive
                      ? "text-emerald-400"
                      : "text-gray-300"
                  } hover:text-emerald-400 transition-colors relative group`}
                >
                  {item.title}
                  {item.isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400" />
                  )}
                </Link>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} 
              className="bg-emerald-400 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-emerald-300 transition-colors"
            >
              Me Contrate
            </motion.button>
          </div>
          <button
            className="md:hidden text-white p-2 hover:text-emerald-400 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                  >
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                        item.isActive
                          ? "text-emerald-400 bg-emerald-400/10 border-r-2 border-emerald-400"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: navItems.length * 0.1 }
                  }}
                  className="px-4 pt-4"
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-400 text-gray-900 px-6 py-3 rounded-full font-semibold text-base hover:bg-emerald-300 transition-colors duration-200"
                    onClick={() => {
                      closeMenu();
                      // Adicione aqui a ação do botão
                      console.log("Botão Me Contrate mobile clicado");
                    }}
                  >
                    Me Contrate
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}