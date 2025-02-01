import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './BuildButton.css';

export default function BuildButton() {
    const { scrollYProgress } = useScroll();

    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]); 
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]); 

    return (
        <div className="button">
            <motion.button
                className="build-btn"
                style={{ scale, opacity }}
            >
                Build Your PC
            </motion.button>
        </div>
    );
}
