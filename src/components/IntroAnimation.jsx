import {motion,  AnimatePresence } from 'framer-motion';
import { div } from 'framer-motion/client';
import React, { useEffect, useMemo } from 'react'

const IntroAnimation = ({onFinsh}) => {
  const Greeting = useMemo(()=> [
    "Hello", "नमस्ते", "Hola", "Bonjour",
      "Ciao", "Olá", "Здравствуйте",
      "Merhaba", "Γειά", "Hej", "Hallo",
  ], [])
  const [index , setindex] = React.useState(0);
  const [Visible , setVisible] = React.useState(true);

  useEffect(()=>{
    if(index < Greeting.length - 1 ){
      const id = setInterval(()=>{
        setindex((i) => i + 1);
      }, 180);
      return ()=> clearInterval(id);
    }else{
      const t = setTimeout(()=>{
        setVisible(false); }, 300);
    }
  }, [index, Greeting.length]);

  return (
    <AnimatePresence onExitComplete={onFinsh}>
      {Visible && (
        <motion.div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white ovevflow-hidden'
        initial={{y:0}}
        exit={{y:"-100%", transition:{
          duration:1.05, ease: [0.22 , 1, 0.36 , 1],
        },
      }}
     
        >
          <motion.h1
          key={index}
          className='text-5xl md:text-7xl lg:text-8xl font-bold  '
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:-20}}
          transition={{duration:0.12}}

          >
            {Greeting[index]}
          </motion.h1>
        </motion.div>
      )}

    </AnimatePresence>
  )
}

export default IntroAnimation