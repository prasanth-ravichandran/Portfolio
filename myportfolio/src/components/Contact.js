import React from "react";
import call from "../assets/call.gif";
import github from "../assets/github.png";
import link from "../assets/link..gif";
import { motion } from "framer-motion";

function Contact() {
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
                  About me
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
      <div style={{ opacity: "1", transform: "none" }}>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: "1.2", ease: "easeOut" }}
          className="container contact col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
          style={{
            backgroundColor: "#A9A7A74C",
            boxSizing: "border-box",
            borderRadius: "20px",
            width: "auto",
            boxShadow: "2px 2px 4px #0000",
            marginBottom: "60px",
            marginTop: "30px",
          }}
        >
          <div
            className="container  "
            style={{
              marginBottom: "40px",
              paddingBottom: "120px",
              marginTop: "10px",
              paddingTop: "50px",
            }}
          >
            <div
              className="Contact_info text-center mx-4"
              style={{ boxShadow: "2px 2px 2px #A9A7A74C" }}
            >
              <div className="head ">
                <h1
                  className="main-head fs-4 text-center mt-4"
                  style={{
                    fontFamily: "cursive",
                    letterSpacing: "1px",
                    color: "#000000",
                  }}
                >
                  <img
                    src={call}
                    width={"80px"}
                    height={"80px"}
                    alt="calling gif"
                  />
                  CONTACT
                </h1>
              </div>
              <p
                className="Text__contact"
                style={{
                  color: "#000000",
                  fontFamily: "cursive",

                  fontSize: "20px",
                }}
              >
                I am interested to work as FrontEnd Developer, if you think that
                <br></br>
                my skills and knowledge is good & helpful,please let me know
              </p>
              <h4 className="github">
                <a href="https://github.com/prasanth-ravichandran">
                  {" "}
                  <img
                    src={link}
                    width={"30px"}
                    height={"30px"}
                    alt="link gif"
                  />
                </a>
                <img src={github} alt="github gif" />
              </h4>
              <h4 className="email">
                <i
                  class="fa fa-envelope "
                  style={{ marginRight: "8px" }}
                  aria-hidden="true"
                ></i>
                prasanth732604@gmail.com
              </h4>
              <h4 className="phone">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
                +918807072604
              </h4>
              <h4 className="location">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                Cheyyur,Chengalpatu-603302
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
