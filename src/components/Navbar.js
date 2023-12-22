import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import Modal from '../components/Modal';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    }

    const handleButtonClick = () => {
      setModalOpen(false);
    }
  
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt={"Logo"}/>
          <Link to="/" className="lunk">Home</Link>
          <div className="hiddenLinks">
            <Link to="/"> Home</Link>
            <Link to="/works"> How it Works</Link>
            <Link to="/about"> About</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/works"> How it Works</Link>
          <Link to="/about"> About</Link>
          <Link to="/account">Account</Link>
          <button className="btn btn-open" onClick={() => setModalOpen(true)}>
            Login
          </button>
          {modalOpen && (
            <Modal
            onClose={handleButtonClick} 
            >
            </Modal>
          )
            }
          <button className="icon" onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    )
  }
  
export default Navbar