"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const HeroSection = ()=>
{
    return(
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-yellow-300 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-none font-extrabold">
                    <span>
                      Hello, I&apos;m Dayo,<br/>A Web Developer based in London,U.K
                       </span>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptuous.
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-yellow-300 hover:bg-slate-200 text-black"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-yellow-100 hover:bg-purple-400 hover:text-amber-50 text-black mt-3"
                        >
              <span className="block bg-yellow-50 hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/portfolioHero.jpg"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            height={300}
                            width={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;



