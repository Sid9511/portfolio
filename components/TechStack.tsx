import React from 'react';
import { motion } from 'framer-motion';


const float = (duration: number) => ({
    initial: { y: -12 },
    animate: {
        y: [12, -12],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse' as const, 
        }
    }
});

const TechStack: React.FC = () => {
    return (
        <div className='border-b border-neutral-800 py-20 md:py-32 lg:py-36' id="techstack">
            <h1 className="heading mb-24 text-center">
                Tech{" "}
                <span className="text-purple">Stack</span>
            </h1>

            <div className='flex flex-wrap pb-16 items-center justify-center gap-8'>
                <motion.div 
                    variants={float(2)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./js.svg' className=' w-10 h-10 lg:w-14  lg:h-14' alt='JavaScript'/>
                </motion.div>
                
                <motion.div 
                    variants={float(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./react.svg' className=' w-10 h-10 lg:w-14  lg:h-14' alt='React'/>
                </motion.div>
                
                <motion.div 
                    variants={float(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./ts.svg' className=' w-10 h-10 lg:w-14  lg:h-14' alt='TypeScript'/>
                </motion.div>
                
                <motion.div 
                    variants={float(3.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./next.svg' className=' w-10 h-10 lg:w-14  lg:h-14' alt='Next.js'/>
                </motion.div>
                
                <motion.div 
                    variants={float(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./tailwind.svg' className=' w-10 h-10 lg:w-14  lg:h-14' alt='Tailwind CSS'/>
                </motion.div>

                <motion.div 
                    variants={float(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./acertinity.svg' className=' w-10 h-10 lg:w-14  lg:h-14' alt='Acertinity'/>
                </motion.div>

                <motion.div 
                    variants={float(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./node.svg' className=' w-10 h-10 lg:w-14  lg:h-14' alt='Node.js'/>
                </motion.div>

                <motion.div 
                    variants={float(3.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./express.svg' className=' w-10 h-10 lg:w-14  lg:h-14' alt='Express'/>
                </motion.div>
            </div>
        </div>
    );
};

export default TechStack;
