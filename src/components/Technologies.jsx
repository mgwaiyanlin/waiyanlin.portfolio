import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiKalilinux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className='my-20 text-center text-4xl'>Programming Languages and Tools</motion.h2>

            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className='text-7xl text-orange-600' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className='text-7xl text-blue-600' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className='text-7xl text-yellow-600' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill  className='text-7xl text-blue-400' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaBootstrap   className='text-7xl text-purple-500' />
                </div>
                
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFigma  className='text-7xl text-pink-400' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className='text-7xl text-blue-600' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaLaravel className='text-7xl text-red-600' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython  className='text-7xl text-yellow-600' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFlask   className='text-7xl text-white' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCsharp  className='text-7xl text-purple-800' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <AiOutlineDotNet   className='text-7xl text-white' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className='text-7xl text-white' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoMongodb className='text-7xl text-green-400' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FcLinux className='text-7xl text-white' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiKalilinux className='text-7xl text-sky-400' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className='text-7xl text-orange-700' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGithub  className='text-7xl text-white' />
                </div>

            </motion.div>

        </div>
    )
}

export default Technologies
