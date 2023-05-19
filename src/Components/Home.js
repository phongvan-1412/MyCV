import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import About from "./About";
import MyCV from "../data/MyCV.pdf";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();


const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        setShow(true);
    }

    return(
        <div className="container-fluid mainhome-wrapper" 
             data-aos="fade-up"
             data-aos-duration="1200">
                <div className="color-block d-none d-lg-block"></div>

                <div className="row align-items-center home-wrapper">
                    <div className="col-lg-4 bg position-fixed d-none d-lg-block home-img-wrapper"
                        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '../img/avatar.jpg'})`}}>
                    </div>

                    <div className="col-12 col-lg-8 offset-lg-4 text-center text-lg-start home-shorcut-wrapper">
                        <div>
                            <h1 className="text-uppercase poppins-font"> I'm Pham Van.
                                <span>full-stack web developer</span>
                            </h1>

                            <p>
                                I'm a Vietnamese based Web Designer & Full-Stack Developer focused on
                                crafting clean & user‑friendly experiences, I am passionate about
                                building excellent software that improves the lives of those
                                around me.
                            </p>

                            <Button className="button" onClick={handleShow}>
                                <span className="button-text">more about me</span>
                                <span className="button-icon fa fa-arrow-right"></span>
                            </Button>

                            <hr />
                            
                            <a href={MyCV} download className="download-link">DOWNLOAD 
                                <i className="fa-solid fa-download download-icon"></i>
                            </a>

                            <Modal
                            show={show} 
                            onHide={handleClose}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                            size="xl"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            style={{backgroundColor: "transparent"}}>
                                <Modal.Body style={{backgroundColor: "#111"}}>
                                    <About />
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Home;