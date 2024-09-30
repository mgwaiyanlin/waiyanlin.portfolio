import profile from "../assets/me.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Banner = () => {
    return (
        <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">

                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-18">Hi, I'm <span className="font-bold">Wai Yan Lin</span></motion.h1>
                    </div>

                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-yellow-300 via-slate-500 to-orange-500 bg-clip-text text-3xl text-transparent font-semibold">Software Developer</motion.span>

                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light text-xl text-justify">
                        I am a dedicated Software Developer with a Higher National Diploma in Software Engineering. With the technologies, I aim to build efficient business solutions. My ultimate goal is to grow into leadership roles such as CTO or DevOps Manager, combining all of my skills with a passion for strategic development and operational efficiency.
                    </motion.p>

                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profile} alt="Profile" className="bg-yellow-500 rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner