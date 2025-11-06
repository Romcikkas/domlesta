"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      {/* Hero Section */}
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Image
                src="/images/logo.png"
                alt="Domlesta Logo"
                width={300}
                height={100}
                className="mx-auto"
                priority
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Domlesta
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-base-content/80"
            >
              Statybinių medžiagų mažmeninė prekyba
            </motion.p>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {/* Phone */}
              <a
                href="tel:+37063779185"
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FiPhone className="text-3xl text-primary" />
                  </div>
                  <h3 className="card-title text-lg">Telefonas</h3>
                  <p className="text-primary font-semibold">+370 637 79185</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@domlesta.lt"
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <FiMail className="text-3xl text-secondary" />
                  </div>
                  <h3 className="card-title text-lg">El. paštas</h3>
                  <p className="text-secondary font-semibold">
                    info@domlesta.lt
                  </p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Hetitų g. 25, Vilnius"
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <FiMapPin className="text-3xl text-accent" />
                  </div>
                  <h3 className="card-title text-lg">Adresas</h3>
                  <p className="text-accent font-semibold">
                    Hetitų g. 25
                    <br />
                    Vilnius, LT-11312
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-base-content/60"
            >
              <p className="text-sm">
                © {new Date().getFullYear()} Domlesta, MB. Visos teisės
                saugomos.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
