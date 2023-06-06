import { NavLink } from 'react-router-dom';

export const NavBar = () => {
 return (
   <>
      <div>
         <nav>
            <div className='nav-items container'>
               <ul>
                  <li>
                     <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                     <NavLink to="/products">Products</NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   </>
 );
};
