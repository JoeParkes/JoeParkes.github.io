
import React, { useState, useEffect } from 'react';
import lounge from '../images/lounge-desktop.png';
import biffa from '../images/biffa.png'
import ubt from '../images/ubteam.png'

import { motion } from "framer-motion"




export default function Work() {

    return (
        <section className="work" >


            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} className="work-title">Projects</motion.h1>

            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} className="work-box">
                <img src={lounge}></img>
                <h2>Lounge</h2>
                <p>Working at Lounge for over a year</p>
            </motion.div>

            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} className="work-box">
                <img src={lounge}></img>
                <h2>Lounge</h2>
                <p>Working at Lounge for over a year</p>
            </motion.div>

            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} className="work-box">
                <img src={lounge}></img>
                <h2>Lounge</h2>
                <p>Working at Lounge for over a year</p>
            </motion.div>

        </section>
    );
}