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
                    <h1 className="text-yellow-300 mb-4 text-4xl sm:text-5xl  lg:leading-none font-extrabold font-serif">
                    <span>
                        Hello, I&apos;m Dayo,<br/>
                        <span className='text-green-700 font-serif'>A Web Developer Based In London,</span>
                        <br/>U.K.
                       </span>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-serif">
                        I create digital reality from your ideas with future-proof technologies
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="font-serif px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-yellow-300 hover:bg-slate-200 text-black"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/"
                            className="px-1 font-serif inline-block py-1 w-full sm:w-fit rounded-full bg-yellow-100 hover:bg-purple-400 hover:text-amber-50 text-black mt-3"
                        >
              <span className="block font-serif bg-yellow-50 hover:bg-slate-800 rounded-full px-5 py-2">
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

                    <div className="rounded-full bg-[#181818] mb-6 w-full h-full lg:w-full lg:h-full relative">
                        <Image
                            src="/images/portfolioHero.jpg"
                            alt="hero image"
                            className=""
                           width={400} height={400}
                        />
                    </div>

                </motion.div>
            </div>
            <hr className='mt-6 text-yellow-100'/>
        </section>
    );
};

export default HeroSection;



