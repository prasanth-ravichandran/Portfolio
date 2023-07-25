import React from "react";

import { motion } from "framer-motion";
import call from "../assets/call.gif";

function AboutMe() {
  return (
    <>
      <motion.nav
        className="navbar navbar-expand-lg nav text-warning "
        id="NavBar"
        role="navigation"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          backgroundColor: "#A9A7A74C",
          fontFamily: "initial",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", fontFamily: "initial" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-aria-label="Toggler-Navigation"
          >
            <span>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav m-auto text-uppercase"
              style={{
                display: "flex",
                listStyle: "none",
                letterSpacing: "1px",

                fontSize: "20px",
              }}
            >
              <li className="nav-item active mx-2">
                <motion.a
                  className="nav-link text-dark fw-bold"
                  href="/home"
                  whileHover={{
                    scale: 1.4,
                  }}
                >
                  Home
                </motion.a>
              </li>
              <li className="nav-item active mx-2">
                {" "}
                <motion.a
                  className="nav-link text-dark fw-bold"
                  href="/about"
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  style={{ textDecoration: "none" }}
                >
                  About
                </motion.a>
              </li>
              <li className="nav-item active mx-2">
                <motion.a
                  className="nav-link text-dark fw-bold"
                  href="/skill"
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  SkillSet
                </motion.a>
              </li>
              <li className="nav-item active mx-2">
                <motion.a
                  className="nav-link text-dark fw-bold"
                  href="/project"
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Project
                </motion.a>
              </li>
              <li className="nav-item active mx-2">
                <motion.a
                  className="nav-link text-dark fw-bold"
                  href="/contact"
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      <div className="container">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="contentAbout text-dark"
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            boxSizing: "border-box",
            width: "60%",
            backgroundColor: "#A9A7A74C",
            boxShadow: "4px 4px 6px 6px #0000",
            fontFamily: "cursive",
            borderRadius: "30px",
            lineHeight: "120px",
          }}
        >
          <h2
            className=" fw-bolder text-center"
            style={{ paddingTop: "40px", color: "#000000" }}
          >
            About
          </h2>
          <p
            className=" text-center fs-5 fw-bold"
            style={{
              padding: "25px 15px",
              fontFamily: "cursive",
              letterSpacing: "1px",
              lineHeight: "40px",
              color: "#000000",
            }}
          >
            I am a skilled engineering graduate looking for an entry level
            position to work as FrontEnd developer.Good at developing and
            implementing user interface(UI) designs and features to enhance
            application performance by using React.js concepts and workflows.
          </p>

          <a
            className="btn btn-sm btn-dark"
            href="/contact"
            style={{
              position: "absolute",
              top: "80%",
              left: "44%",
              cursor: "pointer",
            }}
          >
            CONTACT<img src={call} width={"40px"}></img>
          </a>
          <div className="d-flex justify-content-between">
            <a
              className="btn btn-dark rounded-circle mt-4 mb-3 mx-3 btn-s"
              role="button"
              href="/"
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
            <a
              className="btn btn-dark rounded-circle mt-4 btn-s mx-3 mb-3"
              role="button"
              href="/skill"
            >
              <i className="fa fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default AboutMe;
