import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <div>
      <nav> 
        <ul className='navbar' style={{display:"flex",justifyContent:"space-around",gap:"180px",marginTop:"50px",listStyle:"none",}}>
          <li>
            <h1>Kalvium Books</h1>
            {/* <img src="" alt="lOGO" className='logo' /> */}
          </li>
         
          <li>
            <Link to="/register" className="Register">Register Now</Link> {/* Link to the registration form */}
          </li>
        </ul> 
      </nav>
    </div>
  );
};

export default Navbar;
