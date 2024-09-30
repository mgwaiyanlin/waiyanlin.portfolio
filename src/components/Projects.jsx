import AinuSushi from "../assets/ainu-sushi.png"
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div id="project" className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Projects</motion.h2>

            <div className='mb-8 grid lg:grid-cols-2 gap-4 lg:gap-2'>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }} 
                className="w-full">
                    <img src={AinuSushi} alt="Ainu Sushi" width={650} height={150} className='mb-6 rounded' />
                </motion.div>

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl">
                    <h6 className='mb-2 font-semibold'>Ainu Sushi Kriftel</h6>
                    <p className='mb-4 text-neutral-400'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum molestias dicta ipsum quidem similique mollitia!
                    </p>
                    <div className='flex'>
                        <span className='mr-2 rounded bg-yellow-900 px-2 py-1 font-medium text-white'>HTML</span>
                        <span className='mr-2 rounded bg-yellow-900 px-2 py-1 font-medium text-white'>CSS</span>
                        <span className='mr-2 rounded bg-yellow-900 px-2 py-1 font-medium text-white'>JS</span>
                        <span className='mr-2 rounded bg-yellow-900 px-2 py-1 font-medium text-white'>Tailwind CSS</span>
                        <span className='mr-2 rounded bg-yellow-900 px-2 py-1 font-medium text-white'>PHP</span>
                        <span className='mr-2 rounded bg-yellow-900 px-2 py-1 font-medium text-white'>Laravel</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects