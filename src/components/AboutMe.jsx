import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
    return (
        <div id="experience" className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Experience (<span className='text-neutral-500'>About ME</span>)</motion.h2>

            <div className='my-2 py-6 text-lg grid lg:grid-cols-2 gap-12'>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}
                    className='w-full text-justify'>
                    I completed my Higher National Diploma in 2023, where I gained knowledge in Networking, ICT, Security, Data Analysis using PowerBI, Databases (MySQL), and various Programming Languages (C++, Java, PHP with Laravel). During my studies, I worked as a freelance backend developer using PHP (Laravel) and successfully delivered a project for a restaurant in Germany.
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full text-lg text-justify'>
                    After graduation, in October 2023, I joined ShweTatar - Gold & Jewellery, where I worked as an HR Assistant, Admin Assistant, and IT Assistant. In this role, I supported HR with recruitment and payroll, handled administrative tasks, and ensured the smooth operation of IT systems. I also utilized my web development skills to design internal websites and streamlined workflows by integrating an ERP system, improving efficiency.
                </motion.p>
            </div>

            <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className='my-2 py-6 text-lg text-justify'>I am now focusing on learning C# to develop and maintain ERP systems, while expanding my expertise in ethical hacking and security, with the goal of becoming a CTO or DevOps Manager.</motion.p>
        </div>
    )
}

export default AboutMe