// import React from 'react';
// import { Link } from "react-router-dom";
// import { Routes } from "../../helpers/routes";
// import './nav.css'

// export default function nav() {
//   return (
//     <nav className='nav_bar'>
//       {Routes.map(({ route, title }) => (
//         <Link key={title} className="link" to={route} >
//           {title}
//         </Link>
//       ))}
    
//     </nav>
//   );
  
// }
import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Routes } from "../../helpers/routes";
import { Link } from "react-router-dom";
import './nav.css'

// import { links, social } from './data';
// import logo from './logo.svg';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <input type="text" className='logo'/>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>


        <div className='links-container' ref={linksContainerRef}>
    
          <ul className='links' ref={linksRef}>
       {Routes.map(({ route, title }) => (
         <Link key={title} to={route}  className="link">
           {title}
         </Link>
       ))}
    
           </ul>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
