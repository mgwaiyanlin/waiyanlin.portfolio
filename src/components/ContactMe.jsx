import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { motion } from 'framer-motion'

const ContactMe = () => {
    return (
        <div id="contact" className='border-b border-neutral-900 pb-4 mb-10'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'>Contact Me</motion.h2>

            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='text-center my-4'>39th st, between 81st st and 82nd st, Mandalay, Myanmar</motion.p>

            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center my-4'>waiyanlinn.netuser@gmail.com</motion.p>

            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='text-center my-4'>+959 979 796 393</motion.p>

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='flex items-center justify-center flex-wrap gap-4 my-2'>
                <div className="rounded-2xl border-4 border-neutral-800 p-2">
                    <FaFacebook className='text-xl text-blue-500' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-2">
                    <FaSquareInstagram className='text-xl text-pink-500' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-2">
                    <AiFillTikTok className='text-xl text-white' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-2">
                    <FaViber className='text-xl text-purple-500' />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-2">
                    <FaTelegram className='text-xl text-white' />
                </div>
            </motion.div>
        </div>
    )
}

export default ContactMe