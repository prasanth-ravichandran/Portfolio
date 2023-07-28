import React, { useState } from "react";
import gif from "../assets/gif.gif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasBody } from "reactstrap";
function Content() {
  const [show, setshow] = useState(false);
  const handleOffCanvas = () => {
    setshow(!show);
  };
  return (
    <>
      <motion.nav
        className="navbar navbar-expand-lg nav text-dark "
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
              <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={handleOffCanvas}
              ></i>
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
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: "1.5" }}
        className="Content"
        style={{ position: "absolute", top: "40%", left: "40%" }}
      >
        <h3
          className="Text text-center"
          style={{
            letterSpacing: "1px",
            color: "#000000",
            fontFamily: "initial",
          }}
        >
          Hello,I am
        </h3>
        <h1
          className="typewritter"
          style={{ color: "#000000", fontFamily: "initial" }}
        >
          PRASANTH R
        </h1>
        <motion.a
          className="btn btn-light"
          href="https://drive.google.com/file/d/1VuQapKMBhzyILUmdp4ps-sALKZ3zVoFD/view?usp=sharing"
          style={{
            textDecoration: "none",
            fontFamily: "initial",
            letterSpacing: "1px",
            margin: "60px 0px",
            color: "#000000",
          }}
          whileHover={{
            scale: 1.2,
          }}
        >
          GET RESUME
          <img
            className="icons "
            src={gif}
            width={"20px"}
            height={"20px"}
            alt="gif"
          ></img>
        </motion.a>{" "}
        <Link to={"/about"}>
          <motion.a
            className="btn btn-light"
            href="/about"
            style={{
              fontFamily: "initial",
              margin: "0px 20px",
              letterSpacing: "1px",
              color: "#000000",
            }}
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            ABOUT ME
            <i
              className="fa fa-arrow-right text-dark"
              aria-hidden="true"
              style={{
                paddingLeft: "4px",
              }}
            ></i>
          </motion.a>
        </Link>
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

export default Content;
