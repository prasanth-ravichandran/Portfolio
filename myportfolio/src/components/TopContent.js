import React from "react";
import keyboard from "../assets/keyboard.jpg";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import Topbar1 from "./Topbar1";

const ContentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
};
function TopContent() {
  return (
    <>
      <motion.img
        variants={ContentVariants}
        initial="hidden"
        animate="visible"
        src={keyboard}
        alt="background"
        style={{
          width: "100%",
          height: "100vh",
          opacity: 0.5,
          position: "relative",
        }}
      />
      <motion.div
        className="Content-Name"
        variants={ContentVariants}
        initial="hidden"
        animate="visible"
      >
        <h2
          className="Name"
          style={{
            position: "absolute",
            top: "30%",
            left: "40%",
            color: "white",
            fontFamily: "monospace",
            letterSpacing: "2px",
            textShadow: "1px 1px 4px blue",
            fontSize: "40px",
          }}
        >
          PRASANTH R<br></br>
          <span>
            <motion.a
              href="https://drive.google.com/file/d/1-7luwd10YNUwbfKAbyxjF4IuKnVHaSFq/view?usp=sharing"
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="btn btn-outline-dark"
              style={{
                marginTop: "8px",
                fontFamily: "monospace",
                padding: "5px 12px",
                fontWeight: "bold",
                color: "#000000",
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                cursor: "pointer",
              }}
            >
              Download cv
            </motion.a>
            <motion.button
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="btn btn-outline-dark"
              style={{
                marginLeft: "20px",
                marginTop: "8px",
                fontFamily: "monospace",
                padding: "5px 12px",
                fontWeight: "bolder",
                color: "#000000",
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              My work
            </motion.button>
          </span>
        </h2>
      </motion.div>
    </>
  );
}
export default TopContent;
