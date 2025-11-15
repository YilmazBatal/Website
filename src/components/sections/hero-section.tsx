'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.1
  });

  return (
    <div className="md:py-64 py-24">
      <div className="absolute top-0 left-0 w-full h-512 bg-linear-to-b from-blue-900/50 via-purple-800/15 -z-20 to-transparent pointer-events-none" />
      <div ref={ref} className="flex flex-col-reverse flex-reverse md:flex-row items-center justify-between gap-15 lg:gap-0">
        {/* Texts */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <h1 className="text-5xl font-semibold mb-2 md:text-left text-center">
              Yılmaz Oğulbey Batal
            </h1>
            <h2 className="text-[2rem] mb-2 font-mono md:text-left text-center">
              Computer Engineer
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut"
            }}
            className="flex flex-col gap-3 mb-2"
          >
            <div className="flex items-center md:justify-start justify-center">
              <Mail className="h-8 w-8 mr-3" />
              <p className="text-[1.25rem]"> b.ogulbey@gmail.com</p>
            </div>
            <div className="flex items-center md:justify-start justify-center">
              <Phone className="h-8 w-8 mr-3" />
              <p className="text-[1.25rem]"> +90 533 823 80 82</p>
            </div>
            <div className="flex items-center md:justify-start justify-center">
              <MapPin className="h-8 w-8 mr-3" />
              <p className="text-[1.25rem]"> Turkiye, İstanbul, Eu.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="flex flex-row gap-3 mb-2 md:justify-start justify-center"
          >
            <Button size={"icon-lg"} asChild className="icon-lg">
              <Link target="_blank" href={"https://github.com/YilmazBatal"}>
                <FaGithub style={{ scale: "1.75" }} />
              </Link>
            </Button>
            <Button size={"icon-lg"} asChild>
              <Link target="_blank" href={"https://ilmas.itch.io/"}>
                <FaItchIo style={{ scale: "1.75" }} />
              </Link>
            </Button>
            <Button size={"icon-lg"} asChild>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/yilmazbatal/"}
              >
                <FaLinkedin style={{ scale: "1.75" }} />
              </Link>
            </Button>
            <Button size={"icon-lg"} asChild>
              <Link
                target="_blank"
                href={"https://wa.link/xlx61y"}
              >
                <FaWhatsapp style={{ scale: "1.75" }} />
              </Link>
            </Button>
          </motion.div>
        </div>
        {/* Profile Pic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <Image  
            src={"/profilepic.jpg"}
            alt={"Profile Picture"}
            width={250}
            height={250}
            className="rounded-full md:w-[350px] w-[275px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Animation triggers every time it comes into view
    amount: 0.3 // Trigger when 30% of the element is visible
  });

  return (
    <div id="About" className="md:pt-32 md:pb-16 py-12">
      <div className="flex flex-col-reverse flex-reverse md:flex-row items-center justify-between gap-15 lg:gap-0">
        {/* Texts */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          className="flex flex-col justify-center items-center text-center mx-auto gap-4"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="text-6xl font-semibold mb-6"
            >
              About Me
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut"
              }}
              className="text-[1.33rem] mb-2 font-mono max-w-2xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est
              itaque! Inventore ullam quidem officia quas quod dolorum
              dignissimos magni atque similique placeat? Facilis, ad
              repellendus. Id facere animi impedit blanditiis voluptates! Nihil
              ipsa perferendis culpa, pariatur porro illum voluptate. Eveniet,
              laudantium numquam. Hic officia veritatis placeat atque distinctio
              rem ratione dolorum libero voluptatem harum amet minima quaerat,
              praesentium a! Praesentium eveniet commodi sint odio harum sit
              temporibus, culpa ducimus iste corrupti quis quidem recusandae.
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}