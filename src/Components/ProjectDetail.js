import React from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

const project = ({ project }) => {
    console.log(project);
    return (
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
                        <span className="portfolio-detail-title">{project.project_team_size_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_team_size_value}</span>
                    </li>

                    <li className="mb-2">
                        <span className="portfolio-detail-title">{project.project_source_title}: </span>
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_source_value}</span>
                    </li>
                </ul>
            </div>

            <div className="col-xl-12 col-lg-12 col-12">
                <ul className="portfolio-detail-list list-unstyled">
                    <li>
                        <span className="portfolio-detail-title">Video Demo:</span>
                    </li>
                </ul>
                <iframe width="100%" height="400"
                    src={project.project_video_link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>


            <div>
                <span className="portfolio-detail-title">{project.project_tech_title}</span>
                <ul className="portfolio-detail-list list-unstyled">
                    <li className="mb-2">
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_tech_value1}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_tech_value2}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_tech_value3}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_tech_value4}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_tech_value5}</span>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="portfolio-detail-list list-unstyled">
                    <li className="mt-2 mb-2">
                        <span className="portfolio-detail-title">{project.project_description_title}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value1}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value2}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value3}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value4}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value5}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value6}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value7}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{project.project_description_value8}</span>
                    </li>
                    <li className="mt-2">
                        <span className="portfolio-detail-title">{project.project_work_title}: </span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_work_value1}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-5 mt-2 mb-2">{project.project_work_value2}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-5 mt-2 mb-2">{project.project_work_value3}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-5 mt-2 mb-2">{project.project_work_value4}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_work_value5}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_work_value6}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_work_value7}</span>
                        <br />
                        <span className="portfolio-detail-value d-block d-sm-inline-block d-lg-block d-xl-inline-block ms-3">{project.project_work_value8}</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default project;