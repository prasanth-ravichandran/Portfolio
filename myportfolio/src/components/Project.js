import React, { useState } from "react";
import { motion } from "framer-motion";
import Contact from "../assets/Contact.png";
import Gym from "../assets/Gym.png";
import ObesityCharts from "../assets/ObesityCharts.png";
import ECOMMERCE from "../assets/ECOMMERCE.png";
import Form_Validation from "../assets/Form_Validation.png";
import CRUDOperation from "../assets/CRUD-Operation.png";
function Project() {
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
        <div className="container" style={{ display: "flex" }}>
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
                    scale: 1.3,
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
                    scale: 1.3,
                  }}
                  style={{ textDecoration: "none" }}
                >
                  About{" "}
                </motion.a>
              </li>
              <li className="nav-item active mx-2">
                <motion.a
                  className="nav-link text-dark fw-bold"
                  href="/skill"
                  whileHover={{
                    scale: 1.3,
                  }}
                >
                  Skill
                </motion.a>
              </li>
              <li className="nav-item active mx-2">
                <motion.a
                  className="nav-link text-dark fw-bold"
                  href="/project"
                  whileHover={{
                    scale: 1.3,
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
                    scale: 1.3,
                  }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
      <div style={{ opacity: "1" }}>
        <motion.div
          className="container project mt-3 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
          initial={{ opacity: "0", y: 300 }}
          animate={{ opacity: "1", y: 15 }}
          transition={{ ease: "easeOut", duration: "1.5" }}
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
          <div className="text-center">
            <div className="anchortag">
              <p
                className="text-dark fs-5 mt-3 text-uppercase"
                style={{ fontFamily: "cursive" }}
              >
                <u> click the image to view source code</u>
              </p>
              <div className="Pageshifting">
                <div
                  className="page"
                  style={{ display: "flex", float: "left", marginTop: "90px" }}
                >
                  <a
                    className="btn btn-dark rounded-circle"
                    role="button"
                    href="/skill"
                  >
                    <i className="fa fa-arrow-left fa-2x "></i>
                  </a>
                </div>

                <div
                  className="contactpage"
                  style={{ display: "flex", float: "right", marginTop: "90px" }}
                  while
                >
                  <a
                    className="btn btn-dark rounded-circle ml-4"
                    role="button"
                    href="/contact"
                  >
                    <i className="fa fa-arrow-right fa-2x "></i>
                  </a>
                </div>
              </div>
              <div className="row" style={{ display: "flex" }}>
                <motion.div className="col-4" whileHover={{ scale: 1.2 }}>
                  <a href="https://github.com/prasanth-ravichandran/Projects">
                    <img
                      src={Contact}
                      width={"300px"}
                      height={"200px"}
                      style={{ borderRadius: "20px", marginTop: "50px" }}
                    ></img>
                  </a>
                  <p className="text-dark" style={{ fontFamily: "initial" }}>
                    CONTACT FORM USING<br></br>[HTML,CSS]
                  </p>
                </motion.div>
                <motion.div className="col-4 mt-5" whileHover={{ scale: 1.2 }}>
                  <a href="https://github.com/prasanth-ravichandran/GYM">
                    {" "}
                    <img
                      src={Gym}
                      width={"300px"}
                      height={"200px"}
                      style={{ borderRadius: "20px" }}
                    />
                  </a>
                  <p className="text-dark" style={{ fontFamily: "initial" }}>
                    GYM CATALOGUE BY USING<br></br>[HTML,BOOTSTRAP]
                  </p>
                </motion.div>
                <motion.div className="col-4 mt-5" whileHover={{ scale: 1.2 }}>
                  <a href="https://github.com/prasanth-ravichandran/Obesity">
                    {" "}
                    <img
                      src={ObesityCharts}
                      width={"300px"}
                      height={"200px"}
                      style={{ borderRadius: "20px" }}
                    />
                  </a>
                  <p className="text-dark" style={{ fontFamily: "initial" }}>
                    OBESITY CATALOGUE BY USING<br></br>[HTML,BOOTSTRAP]
                  </p>
                </motion.div>
                <motion.div
                  className="col-4 mt-5 mb-5"
                  whileHover={{ scale: 1.2 }}
                >
                  <a href="https://github.com/prasanth-ravichandran/crud">
                    {" "}
                    <img
                      src={CRUDOperation}
                      width={"300px"}
                      height={"200px"}
                      style={{ borderRadius: "15px" }}
                    />
                  </a>
                  <p className="text-dark" style={{ fontFamily: "initial" }}>
                    STUDENT PORTAL BY USING<br></br>[REACT.JS]
                  </p>
                </motion.div>

                <motion.div
                  className="col-4 mt-5 mb-5"
                  whileHover={{ scale: 1.2 }}
                >
                  <a href="https://github.com/prasanth-ravichandran/Projectreact">
                    {" "}
                    <img
                      src={ECOMMERCE}
                      width={"300px"}
                      height={"200px"}
                      style={{ borderRadius: "15px" }}
                    />
                  </a>
                  <p className="text-dark" style={{ fontFamily: "initial" }}>
                    E-COMMERCE-SITE BY USING<br></br>[REACT.JS]
                  </p>
                </motion.div>
                <motion.div
                  className="col-4 mt-5 mb-5"
                  whileHover={{ scale: 1.2 }}
                >
                  <a href="https://github.com/prasanth-ravichandran/Form_Validation">
                    {" "}
                    <img
                      src={Form_Validation}
                      width={"300px"}
                      height={"200px"}
                      style={{ borderRadius: "15px" }}
                    />
                  </a>
                  <p className="text-dark" style={{ fontFamily: "initial" }}>
                    FORM-VALIDATION BY USING[HTML,CSS,JAVASCRIPT]
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Project;
