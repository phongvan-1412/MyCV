import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

const project = ({ project }) => {
    return(
        <div className="row">
            <div className="col-12 ">
                <h2 className="text-uppercase text-center portfolio-heading">mockup project</h2>
            </div>

            <div className="col-xl-12 col-lg-12 col-12">
                <ul className="portfolio-detail-list list-unstyled">
                    <li className="mb-2">
                        <span className="portfolio-detail-title">{project.project_name_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_name_value}</span>
                    </li>

                    <li className="mb-2">
                        <span className="portfolio-detail-title">{project.project_time_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_time_value}</span>
                    </li>

                    <li className="mb-2">
                        <span className="portfolio-detail-title">{project.project_label_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_label_value}</span>
                    </li>

                    <li className="mb-2">
                        <span className="portfolio-detail-title">{project.project_position_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_position_value}</span>
                    </li>

                    <li className="mb-2">
                        <span className="portfolio-detail-title">{project.project_work_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_work_value}</span>
                    </li>

                    <li className="mb-2">
                        <span className="portfolio-detail-title">{project.project_source_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_source_value}</span>
                    </li>

                    <li className="mb-2">
                        <span className="portfolio-detail-title">{project.project_description_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value}</span>
                    </li>
                </ul>                                            
            </div>

            <div className="col-xl-12 col-lg-12 col-12">
                <iframe width="100%" height="650" 
                        src={project.project_video_link} 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default project;