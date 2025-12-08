// import React, { useEffect, useRef, useState } from 'react'
// import OverlayMenu from '../components/OverlayMenu'
// import Logo from '../assets/Logo.png'
// import { FiMenu } from "react-icons/fi";

// const Navbar = () => {
//   const [menuOpen, setmenuOpen] = useState(false);
//   const [Visible, setVisible] = useState(true);
//   const [forceVisible, setforceVisible] = useState(false);

//   const lastScrollY = useRef(0);
//   const timerId = useRef(null);

//   useEffect(()=>{
//     const homeSection = document.querySelector('#home');
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if(entry.isIntersecting){
//           setforceVisible(true);
//           setVisible(true);
//         }else{
//           setforceVisible(false);
//         }
//       },{threshold:0.1}
//     )

//     if(homeSection){
//       observer.observe(homeSection);
//     }
//     return ()=>{
//       if(homeSection){
//         observer.unobserve(homeSection);
//       }
//   }, [])
  
//   useEffect(()=>{
//     const scrollHandler= ()=>{
//       if(forceVisible){
//          setVisible(true);
//           return;
//       }
//     const currentScrollY = window.scrollY;
//     if(currentScrollY > lastScrollY.current){
//       setVisible(false);
//     }else{
//       setVisible(true);
//       if(timerId.current){
//         clearTimeout(timerId.current);
//       }
//       timerId.current = setTimeout(()=>{
//         setVisible(false);
//       },3000);
//     } 
//     lastScrollY.current = currentScrollY;
//      window.addEventListener("scroll", scrollHandler, {passive:true});
//      return ()=>{
//       window.removeEventListener("scroll", scrollHandler)
//       if(timerId.current){
//         clearTimeout(timerId.current);
//       }
//      }
//   },[forceVisible])
//   return (
//     <>
//     <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-5 py-3 z-50 transitions-transform duration-300 ${Visible ? "translate-y-0" : "-translate-y-full"} `}>
//       <div className='flex items-center space-x-2  '>
//         <img src={Logo} alt="Logo" className='w-8  h-8'/>
//         <div className='text-2xl font-bold text-white hidden  sm:block '>Rahul</div>
//       </div>

//       <div className='block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2'>
//         <button onClick={()=> setmenuOpen(true)} className='text-white text-3xl focus:outline-none cursor-pointer'
//           aria-label='open Menu'>
//           <FiMenu />
//         </button>
//       </div>

//       <div className='hidden lg:block '>
//         <a className=' bg-gradient-to-r from-pink-500 to-blue-500 rounded-full px-4 py-2 font-medium  shadow-lg hover:opacity-90 transition-opacity duration-300' href="#contact">Reach Out</a>
//       </div>
//     </nav>
//       <OverlayMenu isOpen={menuOpen} onclose={()=> setmenuOpen(false)}/>
//     </>
//   )
// }

// export default Navbar;



//   return (
//     <>
//       <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-5 py-3 z-50 transition-transform duration-300 
//         ${Visible ? "translate-y-0" : "-translate-y-full"}`}>
        
//         <div className='flex items-center space-x-2'>
//           <img src={Logo} alt="Logo" className='w-8 h-8'/>
//           <div className='text-2xl font-bold text-white hidden sm:block'>Rahul</div>
//         </div>

//         <div className='block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2'>
//           <button 
//             onClick={() => setmenuOpen(true)} 
//             className='text-white text-3xl focus:outline-none cursor-pointer'
//             aria-label='open Menu'
//           >
//             <FiMenu />
//           </button>
//         </div>

//         <div className='hidden lg:block'>
//           <a className='bg-gradient-to-r from-pink-500 to-blue-500 rounded-full px-4 py-2 font-medium shadow-lg hover:opacity-90 transition-opacity duration-300' href="#contact">
//             Reach Out
//           </a>
//         </div>
//       </nav>

//       <OverlayMenu isOpen={menuOpen} onclose={() => setmenuOpen(false)} />
//     </>
//   );
// };

// export default Navbar;




import React, { useEffect, useRef, useState } from "react";
import OverlayMenu from "../components/OverlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  // -------- INTERSECTION OBSERVER (Home Section Visible) -------- //
  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  // ------------------- SCROLL HANDLER ------------------- //
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down → hide navbar
        setVisible(false);
      } else {
        // scrolling up → show navbar
        setVisible(true);

        if (timerId.current) clearTimeout(timerId.current);

        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-5 py-3 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Rahul
          </div>
        </div>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2">
          <button
            onClick={() => setmenuOpen(true)}
            className="text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="open Menu"
          >
            <FiMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          <a
            className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full px-4 py-2 font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
            href="#contact"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onclose={() => setmenuOpen(false)} />
    </>
  );
};

export default Navbar;
