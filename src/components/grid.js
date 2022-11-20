import React from "react";
import _ from "lodash";
import GridLayout from "react-grid-layout";

import { motion } from "framer-motion"
import me from '../images/me/me.png'
import lounge from '../images/lounge-black-friday.webp'
import lounge_logo from '../images/logo-lounge-white.png'
import lounge_photo from '../images/lounge-photo.png'
import clickthrough from '../images/clickthrough-people.webp'
import clickthrough_logo from '../images/clickthrough-marketing-logo.webp'
import giphy from '../images/giphy.png'
import smart from '../images/smart_image.png'
import shopify from '../images/shopify.jpeg'
import rome from '../images/rome.png'
import banner from '../images/banner.jpeg'

import { Responsive, WidthProvider } from "react-grid-layout";
import { InstagramEmbed } from 'react-social-media-embed';


//MAP

import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

//ICONS 
import { FaGithub } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si'
import { FaShopify } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'




const ResponsiveGridLayout = WidthProvider(Responsive);


function getLayoutsFromSomewhere() {

}

export default class BasicLayout extends React.PureComponent {


    render() {
        const layouts = getLayoutsFromSomewhere();

        return (
            <div className="grid-home">
                <ResponsiveGridLayout className="layout" layout={layouts} cols={4} rowHeight={30} width={1200} breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 1 }}>
                    <motion.div key="a" data-grid={{ x: 0, y: 0, w: 2, h: 8, static: true }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item">
                            <img className="profile" src={me}></img>
                            <h2>I'm Joe!</h2>
                            <p>27 from Birmingham</p>
                            <a href="https://www.linkedin.com/in/joe-parkes-2242b865/" target="_blank" className="button">
                                <BsArrowUpRight />
                            </a>
                        </div>
                    </motion.div>
                    <motion.div key="b" data-grid={{ x: 2, y: 0, w: 2, h: 16 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item grid-background" style={{ background: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${lounge})` }}>
                            <img className="lounge-logo" src={lounge_logo}></img>
                            <a href="https://loungeunderwear.com/" target="_blank" className="button">
                                <BsArrowUpRight />
                            </a>
                        </div>
                    </motion.div>
                    <motion.div key="c" data-grid={{ x: 0, y: 1, w: 2, h: 8 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item grid-map">

                            <Map
                                initialViewState={{
                                    longitude: -1.902299,
                                    latitude: 52.479306,
                                    zoom: 12.5
                                }}
                                style={{ width: 600, height: 320 }}
                                mapStyle="mapbox://styles/joeparkes95/clan6auzq000z14rcxus9aokt"
                                mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}

                            />

                        </div>
                    </motion.div>
                    <motion.div key="d" data-grid={{ x: 2, y: 2, w: 2, h: 8 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item grid-background" style={{ background: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${banner})` }}>
                            <img className="lounge-logo" src={clickthrough_logo}></img>
                            <a href="https://www.clickthrough-marketing.com/" target="_blank" className="button">
                                <BsArrowUpRight />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div key="e" data-grid={{ x: 0, y: 1, w: 1, h: 8 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item">
                            <FaGithub />
                            <a href="" className="button">
                                <BsArrowUpRight />
                            </a>
                        </div>
                    </motion.div>
                    <motion.div key="f" data-grid={{ x: 1, y: 2, w: 1, h: 8 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} >
                        <div className="grid-item">
                            <SiTwitter />
                            <a href="" className="button">
                                <BsArrowUpRight />
                            </a>
                        </div>
                    </motion.div>
                    {/* <motion.div key="g" data-grid={{ x: 0, y: 3, w: 4, h: 8 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item grid-background" style={{ background: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${smart})` }}>

                        </div>
                    </motion.div> */}
                    <motion.div key="h" data-grid={{ x: 2, y: 4, w: 2, h: 16 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item grid-background" style={{ background: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${shopify})` }}>
                            <h2>Shopify Unite 22 </h2>
                            <p>Shopify Unite 22 was really impressive! </p>
                            <span><FaShopify /></span>
                        </div>
                    </motion.div>
                    <motion.div key="i" data-grid={{ x: 0, y: 4, w: 2, h: 16 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item grid-map">

                            <InstagramEmbed
                                url="https://www.instagram.com/p/BVkphkfD3O1/?igshid=YmMyMTA2M2Y%3D?theme=dark"
                                width="100%"
                            />

                        </div>
                    </motion.div>
                    {/* <motion.div key="j" data-grid={{ x: 0, y: 5, w: 2, h: 8 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <div className="grid-item">

                        </div>
                    </motion.div> */}
                </ResponsiveGridLayout>
            </div >
        );
    }
}
