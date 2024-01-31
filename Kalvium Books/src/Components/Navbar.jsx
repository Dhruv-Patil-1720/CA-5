import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Screenshot_2024-01-30_at_2.55.10_PM-removebg-preview.png'; // Importing the logo image file

const Navbar = () => {
  return (
    <div>
      <nav> 
        <ul className='navbar' style={{ display: "flex", justifyContent: "space-around", gap: "0px", marginTop: "50px", listStyle: "none", }}>
          <li>
            <Link to="/" className="Home">
              <img src={logoImage} alt="Kalvium Books Logo" style={{ height: "300px",width:"500px",marginLeft:"320px", backdropFilter: 'blur(1.5px)',borderRadius:"50px",
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',  }} />
            </Link>
          </li>
          <li>
            <Link to="/register" className="Register"><button className='registor' style={{height:"50px",width:"200px",position:"absolute",right:"40px"}}>Register Now</button></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
