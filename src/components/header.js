
import profilePicture from '../images/profilepicture.jpg';
import github from '../images/github-white.png';
import Modal from 'react-modal';
import { FaRegWindowClose } from 'react-icons/fa';



import { motion, useAnimationControls } from "framer-motion"
import React, { useEffect } from "react";


import CustomSwiper from "../components/swiper"



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '0.8rem'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.9)'
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
export default function About() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }



  return (
    <section id="header" className="about">
          <motion.div className="menu" animate={{ y: 0, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 1.2, delay: 3 }}>
              <div className="menu_inner">
                  <p className="active">Home</p>
                  <p>Contact</p>
                  <p className="title">joe</p>

              </div>
          </motion.div>

          <motion.div className="main-content" animate={{ opacity: 1, y: 0, height: 450 }} initial={{ opacity: 0, y: 100, height: 1000 }} transition={{ duration: 1.5, delay: 1.5 }}>

              <motion.h2 >Hello! <span whileHover={{ scale: 1.2 }}>👋🏻</span> </motion.h2>

              <h1>I'm a Frontend Engineer who has a passion for solving problems and developing experiences. 🧑🏼‍💻</h1>
              <p> </p>
              {/* <img className="profile-pic" src={profilePicture}></img> */}
              {/* <button className="button button-35">Github <span><img src={github} /></span></button> */}

              {/* <button className="button button-36" onClick={openModal}>About</button> */}

              <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
              >
                  {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                  <button className="button button-35 button-modal" onClick={closeModal}><FaRegWindowClose /></button>
                  <div>
                      <h2>Hey!</h2>
                      <p>This is me! This is me! This is me! This is me! This is me! This is me! This is me! This is me! This is me!</p>
                  </div>
              </Modal>


          </motion.div>
          {/* <CustomSwiper /> */}
    </section>
  );
}