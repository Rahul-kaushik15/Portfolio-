import { AnimatePresence, motion } from 'framer-motion'

import React from 'react'
import { FiX } from 'react-icons/fi'


const OverlayMenu = ({isOpen, onclose}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const origin = isMobile ? '95% 8%' : '50% 8% ';
  // const origin = isMobile ? 'top right' : 'top center';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className='fixed inset-0 flex items-center justify-center z-50 '
          initial={{clipPath: `circle(0% at ${origin})`}}
          animate={{clipPath: `circle(150% at ${origin})`}}
          exit={{clipPath: `circle(0% at ${origin})`}}
          transition={{duration:0.7 , ease: [0.4, 0, 0.2,1]}}
          style={{backgroundColor: 'rgba(0, 0, 0, 0.95)'}}
        >

          <button>
            <FiX className='text-white text-4xl absolute top-5 right-5 cursor-pointer' aria-label='Close Menu' onClick={onclose}/>
          </button>

          <ul className='space y-6 text-center'>
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.li key={index} className='text-3xl md:text-5xl font-medium text-white my-6 cursor-pointer hover:text-pink-500 transition-colors duration-300'
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay: 0.3 + index * 0.1}}
              >
                <a href={`#${item.toLowerCase()}`} onClick={onclose}
                className='text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300'>
                  {item}
                </a>
              </motion.li>
              
            ))}

          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OverlayMenu