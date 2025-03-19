// import { NavLink } from "react-router-dom";
// // import { SiNexusmods } from "react-icons/si";
// import { GiWaves } from "react-icons/gi";


// export const Headers = () => {
//     return (
    
//     <header>
//         <div className="container">
//         <div className="grid navbar-grid">
//             <div className="Logo">
//             <NavLink to="/">
//             <h1 className="logo-title"><GiWaves className="waves-icon" /> Nation<i>Nexus</i></h1>
//                 </NavLink>
//             </div>
//             <nav>
//                 <ul>
//                     <li> <NavLink to = "/">Home</NavLink></li>
//                     <li> <NavLink to = "/about">About</NavLink></li>
//                     <li> <NavLink to = "/country">Country</NavLink></li>
//                     <li> <NavLink to = "/contact">Contact</NavLink></li>
//                 </ul>
//             </nav>
//             </div>
//         </div>
//     </header>
    
// )
// };

import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { GiWaves } from "react-icons/gi";
import { SiNexusmods } from "react-icons/si";

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
            <h1 className="logo-title"><GiWaves className="waves-icon" /> Nation<i>Nexus</i></h1>
       
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};