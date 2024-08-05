import React from 'react';
import { motion } from 'framer-motion';

const float = (duration) => ({
    initial: { y: -12 },
    animate: {
        y: [12, -12],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
});

const TechStack = () => {
    return (
        <div className='border-b border-neutral-800 py-36' id="techstack">
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
                    <img src='./js.svg' className='w-14 h-14'/>
                </motion.div>
                
                <motion.div 
                    variants={float(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./react.svg' className='w-14 h-14'/>
                </motion.div>
                
                <motion.div 
                    variants={float(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./ts.svg' className='w-14 h-14'/>
                </motion.div>
                
                <motion.div 
                    variants={float(3.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./next.svg' className='w-14 h-14'/>
                </motion.div>
                
                
                <motion.div 
                    variants={float(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./tailwind.svg' className='w-14 h-14'/>
                </motion.div>

                <motion.div 
                    variants={float(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./acertinity.svg' className='w-14 h-14'/>
                </motion.div>

                <motion.div 
                    variants={float(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./node.svg' className='w-14 h-14'/>
                </motion.div>

                <motion.div 
                    variants={float(3.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src='./express.svg' className='w-14 h-14'/>
                </motion.div>
            </div>
        </div>
    );
};

export default TechStack;
