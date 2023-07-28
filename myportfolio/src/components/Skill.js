import React, { useState } from "react";
import settings from "../assets/settings.gif";
import system from "../assets/system.png";
import Html from "../assets/Html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import { motion } from "framer-motion";
import { Offcanvas, OffcanvasBody } from "reactstrap";

function Skill() {
  const [show, setshow] = useState(false);
  const handleOffCanvas = () => {
    setshow(!show);
  };
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
          className="container "
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
                  About
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
      <motion.div className="SkillSet">
        <motion.div
          className="container "
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 18, opacity: 1 }}
          transition={{ ease: "easeOut", duration: "1" }}
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
          <div className="main-skill">
            <h1
              className="text-center"
              style={{ color: "#000000", fontFamily: "cursive" }}
            >
              <img
                className="size-2 mb-1"
                src={settings}
                alt="settingsimg"
                width={"80px"}
                height={"80px"}
              />
              Skills
            </h1>
          </div>
          <div className="skills-1">
            <div className="d-flex justify-content-between">
              <a
                className="btn btn-dark rounded-circle "
                style={{ width: "50px", height: "50px" }}
                role="button"
                href="/about"
              >
                <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
              </a>
              <img className="Skills mt-1" src={system} alt="system img" />
              <a
                className="btn btn-dark rounded-circle "
                style={{ width: "50px", height: "50px" }}
                role="button"
                href="/project"
              >
                <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="skills">
            <h3
              className="text-center fs-4 sub"
              style={{ color: "#000000", fontFamily: "cursive" }}
            >
              Technical
            </h3>
            <h5
              className="text-center fs-4"
              style={{ color: "#000000", fontFamily: "cursive" }}
            >
              I have become confident using following technologies
            </h5>
          </div>
          <div
            className="row "
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="Skill-content mt-3 mb-5 "
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="row skill-set"
                style={{
                  padding: "10px 10px",
                  width: "900px",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  backgroundColor: "rgba(255,255,255,0.5",
                  borderRadius: "20px",
                  border: "1px solid #000000",
                }}
              >
                <div className="container text-center">
                  <div className="row">
                    <div className="col-4 ">
                      <div className="img">
                        {" "}
                        <img
                          src={Html}
                          width={"100px"}
                          height={"100px"}
                          alt="html logo"
                        />
                        <p
                          className="skill-name fw-bolder fs-5 "
                          style={{
                            fontFamily: "cursive",

                            marginLeft: "18px",
                            color: "#000000",
                          }}
                        >
                          HTML
                        </p>
                        <div
                          className="progress-bar  "
                          style={{ marginLeft: "80px" }}
                        >
                          <span className="percentage html ">90%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="img">
                        <img
                          src={css}
                          width={"100px"}
                          height={"100px"}
                          alt="css logo"
                        />
                        <p
                          className="skill-name fs-5 fw-bolder"
                          style={{
                            marginLeft: "30px",
                            fontFamily: "cursive",
                            color: "#000000",
                          }}
                        >
                          CSS
                        </p>
                        <div
                          className="progress-bar"
                          style={{ marginLeft: "80px" }}
                        >
                          <span className="percentage css">85%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="img">
                        <img
                          src={bootstrap}
                          width={"100px"}
                          height={"100px"}
                          alt="bootstrap logo"
                        />
                        <p
                          className="skill-name fs-5 fw-bolder"
                          style={{
                            marginLeft: "5px",
                            fontFamily: "cursive",
                            color: "#000000",
                          }}
                        >
                          BOOTSTRAP
                        </p>
                        <div
                          className="progress-bar"
                          style={{ marginLeft: "80px" }}
                        >
                          <span className="percentage boot">80%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="img mt-3">
                        <img
                          src={js}
                          width={"100px"}
                          height={"100px"}
                          alt="javascript logo"
                        />
                        <p
                          className="skill-name fs-5 fw-bolder"
                          style={{ fontFamily: "cursive", color: "#000000" }}
                        >
                          JAVASCRIPT
                        </p>
                        <div
                          className="progress-bar"
                          style={{ marginLeft: "80px" }}
                        >
                          <span className="percentage js">70%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="img mt-3">
                        <img
                          src={react}
                          width={"100px"}
                          height={"100px"}
                          alt="react logo"
                        />
                        <p
                          className="skill-name fs-5 fw-bolder"
                          style={{
                            fontFamily: "cursive",
                            color: "#000000",
                            marginLeft: "15px",
                          }}
                        >
                          REACT
                        </p>
                        <div
                          className="progress-bar"
                          style={{ marginLeft: "80px" }}
                        >
                          <span className="percentage react">75%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="img mt-3">
                        <img
                          src={github}
                          width={"100px"}
                          height={"100px"}
                          alt="github logo"
                        />
                        <p
                          className="skill-name fs-5 fw-bolder"
                          style={{
                            fontFamily: "cursive",
                            color: "#000000",
                            marginLeft: "15px",
                          }}
                        >
                          GITHUB
                        </p>
                        <div
                          className="progress-bar"
                          style={{ marginLeft: "80px" }}
                        >
                          <span className="percentage react">65%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Offcanvas
        isOpen={show}
        toggle={handleOffCanvas}
        style={{ backgroundColor: "rgb(206, 206, 206, 0.5)" }}
      >
        <OffcanvasBody>
          <div className="container">
            <div className=" mb-3 mt-3 nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </div>
            <div className="mb-3 nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </div>
            <div className="mb-3 nav-item">
              <a className="nav-link" href="/skill">
                Skill
              </a>
            </div>
            <div className="mb-3 nav-item">
              <a className="nav-link" href="/project">
                Project
              </a>
            </div>
            <div className="mb-3 nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

export default Skill;
