"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiTruck, FiShield } from "react-icons/fi";
import { FaPlane } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      {/* Hero Section */}
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            {/* Hidden H1 for SEO */}
            <h1 className="sr-only">Domlesta - Reliable Freight Partner</h1>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2 mt-8"
            >
              <Image
                src="/images/logo.png"
                alt="Domlesta Logo"
                width={260}
                height={100}
                className="mx-auto"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-[22px] mb-20 text-base-content/80"
            >
              Reliable freight partner
            </motion.p>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <p className="text-lg text-base-content/60 mb-8 italic">
                We're updating our website. In the meantime, you can still learn
                more about who we are and what we do.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-base-content">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Road Transport */}
                <div className="card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-lg">
                  <div className="card-body">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                      <FiTruck className="text-3xl text-primary" />
                    </div>
                    <h3 className="card-title text-xl justify-center mb-2">
                      Road transport
                    </h3>
                    <p className="text-base-content/70 text-center">
                      We deliver cargo from the EU to CIS countries, including
                      Kazakhstan, Uzbekistan, Kyrgyzstan, and Turkey.
                    </p>
                  </div>
                </div>

                {/* Air Transport */}
                <div className="card bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 shadow-lg">
                  <div className="card-body">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                      <FaPlane className="text-3xl text-secondary" />
                    </div>
                    <h3 className="card-title text-xl justify-center mb-2">
                      Air transport
                    </h3>
                    <p className="text-base-content/70 text-center">
                      We arrange air freight to any destination worldwide.
                    </p>
                  </div>
                </div>

                {/* Other Services */}
                <div className="card bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 shadow-lg">
                  <div className="card-body">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                      <FiShield className="text-3xl text-accent" />
                    </div>
                    <h3 className="card-title text-xl justify-center mb-2">
                      Other services
                    </h3>
                    <p className="text-base-content/70 text-center">
                      We provide cargo insurance, customs brokerage, and packing
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              <h2 className="col-span-full text-3xl md:text-4xl font-bold mb-4 text-base-content">
                Contact Us
              </h2>
              {/* Phone */}
              <a
                href="tel:+37063779185"
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FiPhone className="text-3xl text-primary" />
                  </div>
                  <h3 className="card-title text-lg">Phone</h3>
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
                  <h3 className="card-title text-lg">Email</h3>
                  <p className="text-secondary font-semibold">
                    info@domlesta.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Vilnius, Lithuania"
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <FiMapPin className="text-3xl text-accent" />
                  </div>
                  <h3 className="card-title text-lg">Address</h3>
                  <p className="text-accent font-semibold">
                    Located in Vilnius, Lithuania
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 text-base-content/60"
            >
              <p className="text-sm">
                © {new Date().getFullYear()} Domlesta, MB. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
