import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ProjectDetail from './ProjectDetail';
import MyCV from '../data/MyCV.pdf'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

const Portfolio = () => {
    const projectDetail = [
        {
            project_name_title: "Project Name",
            project_name_value: "VNHP ONLINE AUCTION",
            project_time_title: "Time",
            project_time_value: "15/07/22 - 06/08/22",
            project_label_title: "Label",
            project_label_value: "Web Application",
            project_position_title: "Position",
            project_position_value: "Full Stack",
            project_work_title: "Works",
            project_work_value: "What I do in Project: Design Layout for User side (using React + Bootstrap, CSS) + Products (Display Products and Relevant Functions: Search Products, Bidding Products, Comments of Customers - using Laravel API to get data)",
            project_source_title: "Source Code",
            project_source_value: "https://github.com/phongvan-1412/VNHP-Online-Auction",
            project_description_title: "Description",
            project_description_value: "Our Project modeled a simple online ancient auction system with a friendly layout for user which has an easy way to access product.",
            project_video_link: "https://www.youtube.com/embed/FOOEn4aIbM8",
            project_img: "'../img/image1.jpg'",
            index: 2,
            id: 1
        },
        {
            project_name_title: "Project Name",
            project_name_value: "VNHP HEALTH CARE",
            project_time_title: "Time",
            project_time_value: "10/08/22 - 14/08/22",
            project_label_title: "Label",
            project_label_value: "Web Application",
            project_position_title: "Position",
            project_position_value: "Full Stack",
            project_work_title: "Works",
            project_work_value: "Product: Display + Relevant Functional",
            project_source_title: "Source Code",
            project_source_value: "https://gitlab.com/vnhp-group/fitness-lifestyle-tech-wiz",
            project_description_title: "Description",
            project_description_value: "The main purpose of this project is building a personal health care service website, where customer can make online booking appointments with doctors, buy health package services and proceed payment online.",
            project_video_link: "https://www.youtube.com/embed/JYM16JwFCSU",
            project_img: "'../img/image2.jpg'",
            index: 2,
            id: 2
        }
    ]

    const [horizontalState, setHorizontalState] = useState(1);
    const [project, setProject] = useState({});
    const horizontalTab = (index) => {
        setHorizontalState(index);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        let test = {};
        projectDetail.forEach(project => { 
            if (project.id == e.target.name) { test = project } 
        })

        setProject(test);
        setShow(true);
    }
    return (
        <div className="container-fluid portfolio-wrapper"
            data-aos="fade-up"
            data-aos-duration="1200">
            <div className="portfolio-title-section text-left text-sm-center">
                <h1>my
                    <span> portfolio</span>
                </h1>
                <span className="portfolio-title-bg text-left text-sm-center">Works</span>
            </div>

            <div className="portfolio-main-content">
                <ul className="portfolio-tab-list" role="tablist">
                    <Link to="#all"
                        className={
                            horizontalState === 1 ? "nav-link active show" : "nav-link"
                        }
                        onClick={() => horizontalTab(1)}
                        id="all-tab"
                        aria-selected="true">
                        <li>ALL</li>
                    </Link>

                    <Link to="#team"
                        className={
                            horizontalState === 2 ? "nav-link active show" : "nav-link"
                        }
                        onClick={() => horizontalTab(2)}
                        role="tab"
                        id="team-tab"
                        aria-selected="false">
                        <li>TEAM</li>
                    </Link>

                    <Link to="#personal"
                        className={
                            horizontalState === 3 ? "nav-link active show" : "nav-link"
                        }
                        onClick={() => horizontalTab(3)}
                        role="tab"
                        id="personal-tab"
                        aria-selected="false">
                        <li>PERSONAL</li>
                    </Link>

                    <a href={MyCV} download
                       className="nav-link active show">
                        <li>DOWNLOAD 
                            <i className="fa-solid fa-download download-icon"></i>
                        </li>
                    </a>

                </ul>

                <div className="container">
                    <div className="tab-container">
                        {horizontalState === 1 ?
                            <>{projectDetail.map((test, indexmap) => {
                                return (
                                    <Button 
                                    key={indexmap}
                                    id="tab-content" 
                                    role="tabpanel"
                                    name={test.id}
                                    onClick={handleShow}
                                    data-content={test.project_name_value}
                                    >
                                        <img style={{ backgroundImage: `url(${process.env.PUBLIC_URL + test.project_img})` }} />
                                        {test.project_name_value}
                                    </Button>
                                )
                            })}</> : null}

                        {horizontalState === 2 ?
                            <>{projectDetail.map((test, indexmap) => {
                                if (test.index === 2) {
                                    return (
                                        <Button 
                                        key={indexmap}
                                        id="tab-content" 
                                        role="tabpanel"
                                        name={test.id}
                                        onClick={handleShow}
                                        data-content={test.project_name_value}
                                        >
                                            <img   style={{ backgroundImage: `url(${process.env.PUBLIC_URL + test.project_img})` }} />
                                            {test.project_name_value}
                                        </Button>
                                        )
                                }
                            })}</> : null}

                        {horizontalState === 3 ?
                            <>{projectDetail.map((test, indexmap) => {
                                if (test.index === 3) {
                                    return (
                                        <Button 
                                        key={indexmap}
                                        id="tab-content" 
                                        role="tabpanel"
                                        name={test.id}
                                        onClick={handleShow}
                                        data-content={test.project_name_value}
                                        >
                                            <img   style={{ backgroundImage: `url(${process.env.PUBLIC_URL + test.project_img})` }} />
                                            {test.project_name_value}
                                        </Button>
                                    )
                                }
                            })}</> : null}

                        <Modal
                            show={show}
                            value={project}
                            onHide={handleClose}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                            size="xl"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            style={{ background: "transparent" }}>
                            <Modal.Body style={{ background: "#111" }}>
                                <ProjectDetail project={project} />
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Portfolio;