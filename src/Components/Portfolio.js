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
            project_team_size_title: "Size",
            project_team_size_value: "4 persons",
            project_description_title: "Description",
            project_description_value1: "- Our Project modeled a simple online ancient auction system where customers can bid on product in real time count down with a friendly layout.",
            project_description_value2: "- Our business is C2C, so customer can also be owner of product. With position is owner of product, they will send us information of products and our admin will upload them on website).",
            project_description_value3: "- Customer can view, filter, or search to look for products but when they want to bid or leave a feedback, we constraint them to login before doing those actions. (When customer has action like register account or forget password, we will send email for them to verify). ",
            project_description_value4: "- Our website doesn't have shopping cart because after count down expired, our system will automatically send a verify payment email to customer who has the highest bid and same time, their user profile will update new bill which has payment button once they're already confirm the email. (In case of product doesn�t has anyone bid, it will show an announcement to let user know that product is expired and also the input price will be disabled). Customer will click on payment button and we will direct them to payment gateway to proceed payment through Paypal. ",
            project_description_value5: "- After payment succeed, their record in New Bill will disappear and in Bill History will update payer_id provided Paypal paid code which they can double check on their Paypal account.",
            project_work_title: "My Responsibilities: Client side (Design UI + Functionalities)",
            project_work_value1: " + Side pages: ",
            project_work_value2: "- Home: Display products divided into 2 sections with real time count down (3 slides with search box + categories)",
            project_work_value3: "- Contact: Logic processing for sending feedback, Using Google Maps Javascript API to embed map",
            project_work_value4: "- About + Term and Policy",
            project_work_value5: "+ Product: Filter product by price, category, result return list of 15 products/page. On each product, you can click quick view button to see detail before bidding",
            project_work_value6: "+ Product Detail: Show detail information of products with right slide suggest products in same category ",
            project_work_value7: "+ Logic processing for bidding product",
            project_work_value8: "+ Logic processing for customer's comments",
            project_tech_title: "Technologies & Software:",
            project_tech_value1: "- Manage source code: Github",
            project_tech_value2: "- Database: SQL Server 2019",
            project_tech_value3: "- Language: PHP, Javascript",
            project_tech_value4: "- Framework: Laravel (Back-end)",
            project_tech_value9: "- Library: ReactJS (Front-end), Google Maps Javascript API",
            project_tech_value10: "- Software: Visual Code 2019",
            project_source_title: "Link Source Code",
            project_source_value: "https://github.com/phongvan-1412/VNHP-Online-Auction",
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
            project_team_size_title: "Size",
            project_team_size_value: "4 persons",
            project_source_title: "Link Source Code",
            project_source_value: "https://gitlab.com/vnhp-group/fitness-lifestyle-tech-wiz",
            project_description_title: "Description",
            project_description_value1: "- Our project is about Personal Health Assistant.",
            project_description_value2: "- This web application will enable users to: ",
            project_description_value6: "+ Register account",
            project_description_value10: "+ Book appointment",
            project_description_value11: "+ View and buy available service packages, proceed payment through Paypal gateway",
            project_description_value14: "+ View blog post about health and leave comments",
            project_description_value16: "+ Manage personal information: view appointment history, medical records history, track on medicine dosage schedule.",
            project_description_value19: "- This web application will enable doctors to: ",
            project_description_value20: "+ CRUD appointment for patients",
            project_description_value21: "+ CRUD Bill+Dosage for patients",
            project_description_value22: "+ Manage personal profile",
            project_description_value23: "- This web application will enable admin to: ",
            project_description_value24: "+ CRUD product (service package)",
            project_description_value25: "+ CRUD blog post",
            project_description_value26: "+ View blog's comment and have right to active or inactive comment",
            project_description_value27: "+ View Bill & Bill Detail",
            project_work_title: "My Responsibilities: Client side (Design UI + Functionalities)",
            project_work_value1: "+ Side pages: ",
            project_work_value2: "- About + Term & Policy",
            project_work_value3: "- Contact: Logic processing for sending feedback, Using Google Maps Javascript API to embed map",
            project_work_value5: "+ Product:",
            project_work_value9: "- View and Search/Filter product by price, category.",
            project_work_value12: "- Logic processing for payment.",
            project_work_value17: "+ Product Detail: Using popup modal to show detail information of products",
            project_work_value22: "+ Blog post:",
            project_work_value23: "- View and Search/Filter product",
            project_work_value24: "- Logic processing blog's comments",
            project_tech_title: "Technologies & Software:",
            project_tech_value1: "- Manage source code: Github",
            project_tech_value2: "- Database: SQL Server 2019",
            project_tech_value3: "- Language: PHP, Javascript",
            project_tech_value4: "- Framework: Laravel (Back-end)",
            project_tech_value9: "- Library: ReactJS (Front-end), Google Maps Javascript API",
            project_tech_value10: "- Software: Visual Code 2019",
            project_video_link: "https://www.youtube.com/embed/JYM16JwFCSU",
            project_img: "'../img/image2.jpg'",
            index: 2,
            id: 2
        },
        {
            project_name_title: "Project Name",
            project_name_value: "VNHP Real-Estate",
            project_time_title: "Time",
            project_time_value: "10/22 - 12/22",
            project_label_title: "Label",
            project_label_value: "Desktop Application",
            project_team_size_title: "Size",
            project_team_size_value: "4 persons",
            project_tech_title: "Technologies & Software:",
            project_tech_value1: "- Manage source code: Gitlab",
            project_tech_value2: "- Database: SQL Server 2019",
            project_tech_value3: "- Language: Java",
            project_tech_value4: "- Library:",
            project_tech_value5: "+Design Receipts/Contracts and export into PDF files: JasperReports",
            project_tech_value6: "+Send Email: Jakarta mail",
            project_tech_value7: "+Front-end: JavaFX (UI: Scence Builder)",
            project_tech_value8: "+Back-end: Java (JDK 18)",
            project_tech_value9: "- Software: Apache NetBeans IDE 14",
            project_tech_value10: "- Other:",
            project_tech_value11: "+Spinner- Animation (Logo): Rotate & Transition",
            project_tech_value12: "+Multi thread",
            project_description_title: "Description",
            project_description_value1: "- This software provides a software solution for real-estate company to manage all company's activities so we divided into 4 departments:",
            project_description_value6: "* Business:",
            project_description_value7: "- Customer Service Consultant employees can view detail of products to explain, support or sale products for customers.",
            project_description_value8: "- When making contract for activities like Deposit/Sale/Transfer/Cancel, if customer is brand new, employee will get their information, create new account in system and then proceed to create suitable contract.",
            project_description_value9: "- Employees can search for customers to track on their contract status and update status for contract, this allow another department can follow contract easily and proceed next step.",
            project_description_value10: "* Accountant: When accountants receive notification of contract, they handle it and export to suitable receipt, then send receipt to customer or relevant department",
            project_description_value11: "* Director:",
            project_description_value12: "- Directors create new projects, investors",
            project_description_value13: "- Directors also view Statistics, Revenues of company's business",
            project_description_value14: "* Human Resources: HRs incharge of recruiting new employees, create labour contract or terminate contract",
            project_work_title: "My Responsibilities:",
            project_work_value1: "* Design UI for application",
            project_work_value5: "* Business:",
            project_work_value9: "+ Dashboard: ",
            project_work_value10: "- Display information of Products, Investors",
            project_work_value11: "- In Product's Detail, I make a simple calculator for employee can estimate price of products",
            project_work_value12: "+ Customers: CRUD ",
            project_work_value13: "+ Contracts: ",
            project_work_value14: "- CRUD 4 types of contracts: Deposit, Sales, Transfer, Cancel",
            project_work_value15: "- Logic processing for Customers & Contracts",
            project_work_value16: "- Using library JasperReports to design contracts and export into PDF files",
            project_work_value17: " * HR:",
            project_work_value18: "- Employees: CRUD",
            project_work_value19: "- Using JasperReports to design contracts and export into PDF files",
            project_source_title: "Link Source Code",
            project_source_value: "https://gitlab.com/phuongvx1/vnhp-real-estate.git",
            project_video_link: "https://www.youtube.com/embed/qeHgxIMK7G4",
            project_img: "'../img/image4.jpg'",
            index: 2,
            id: 3
        },
        {
            project_name_title: "Project Name",
            project_name_value: "PV Library",
            project_time_title: "Time",
            project_time_value: "01/23 - 02/23",
            project_label_title: "Label",
            project_label_value: "Desktop Application",
            project_team_size_title: "Position",
            project_team_size_value: "Full Stack",
            project_description_title: "Description",
            project_description_value1: "- This software simply modifies cashier at a bookstore:",
            project_description_value6: "+ I haven't yet developed more barcode scanning and printing out invoices so it mostly CRUD.",
            project_description_value10: "+ Admin is also a user.",
            project_description_value15: "- This software helps an employee can:",
            project_description_value16: "+ CRUD Author, Publisher, Customer, Employee, Book",
            project_description_value17: "+ Proceed payment for customer and can store customer bills in Inventory when current customers want to select more products and prepay for the next customer.",
            project_description_value18: "+ View Bill, Bill Detail, Overall Statistics",
            project_tech_title: "Technologies & Software:",
            project_tech_value1: "- Manage source code: Github",
            project_tech_value2: "- Database: SQL Server 2019",
            project_tech_value3: "- Framework: Laravel (Back-end)",
            project_tech_value4: "- Library: ReactJS (Front-end), Google Maps Javascript API",
            project_tech_value5: "- Software: Visual Code 2019",
            project_source_title: "Link Source Code",
            project_source_value: "https://github.com/phongvan-1412/PVlibrary.git",
            project_video_link: "https://www.youtube.com/embed/kuHOizOi65w",
            project_img: "'../img/image3.jpg'",
            index: 3,
            id: 4
        },
        {
            project_name_title: "Project Name",
            project_name_value: "ONLINE-APTITUDE TEST",
            project_time_title: "Time",
            project_time_value: "06/23 - 07/23",
            project_label_title: "Label",
            project_label_value: "Web Application",
            project_team_size_title: "Size",
            project_team_size_value: "2",
            project_description_title: "Description",
            project_description_value1: "- Our customer wants their website has an online exam to test the contestant's basic knowledge, then according to their result, HR department will send email to invite them to final round - in-person interview.",
            project_description_value2: "- The flow of this project is a contestant can search for available job on our website and upload CV to apply for that position. Once HR receive notification, they will check the CV whether it suitable or not:",
            project_description_value6: "+ If the CV is suitable, HR will send 2 emails: Welcome Email (contains email + password generated by system) + Exam (inform date and time to attend the exam).",
            project_description_value10: "+ If the CV isn't suitable, HR will send email to reject them.",
            project_description_value15: "- The exam divided into 3 parts: General Knowledge, Mathematics, Computer Science. When contestant do the test, they have to finish all questions in one part before submit to next part, if there is question missing answer, alert will tell when press submit because once they submit one part, they can't press back button on browser to return previous part.",
            project_description_value19: "- After contestant finish the test:",
            project_description_value20: "+ If their result >= 75%, they will receive email inform date and time for in-person interview.",
            project_description_value21: "+ If their result < 75%, they will receive rejected email.",
            project_work_title: "My Responsibilities: Client side (Design UI + Functionalities)",
            project_work_value1: "- Side pages: Home+About",
            project_work_value5: "- Career: ",
            project_work_value9: "+ Index",
            project_work_value12: "+ Jobs & Job's Detail: simple filter to search for available jobs and see detail,",
            project_work_value13: "+ Apply CV: prevent upload image, just allow .pdf files",
            project_work_value17: "- Exam:",
            project_work_value20: "+ Logic processing",
            project_work_value21: "+ Send email to inform result",
            project_tech_title: "Technologies & Software:",
            project_tech_value1: "- Manage source code: Github",
            project_tech_value2: "- Database: SQL Server 2019",
            project_tech_value3: "- Language: Javascript, C#",
            project_tech_value4: "- Framework: ASP.NET Framework",
            project_tech_value9: "- Software: Visual Studio 2022",
            project_tech_value10: "- Other: Send email using SMTP Protocol",
            project_source_title: "Link Source Code",
            project_source_value: "https://github.com/phongvan-1412/PVlibrary.git",
            project_video_link: "https://www.youtube.com/embed/l1zYdgRDWiM",
            project_img: "'../img/image5.jpg'",
            index: 2,
            id: 5
        },
        {
            project_name_title: "Project Name",
            project_name_value: "PV FOOD SERVICE",
            project_time_title: "Time",
            project_time_value: "04/23",
            project_label_title: "Label",
            project_label_value: "Web Application",
            project_team_size_title: "Position",
            project_team_size_value: "Full-stack",
            project_description_title: "Description",
            project_description_value1: "- My project modeled a simple online pick-up food service of a fast-food restaurant.",
            project_description_value2: "- Customer:",
            project_description_value6: "+Login & Registration: can register an account using social media (Google + Facebook)",
            project_description_value10: "+Product: can view information, order and make payment through Stripe gateway.",
            project_description_value11: "+Profile: can change personal information, password and view transaction history.",
            project_description_value15: "- Admin:",
            project_description_value16: "+CRUD Product, Category",
            project_description_value17: "+View and change status of Account",
            project_description_value18: "+View Bill + Bill Detail",
            project_tech_title: "Technologies & Software:",
            project_tech_value1: "- Manage source code: Github",
            project_tech_value2: "- Database: SQL Server 2019",
            project_tech_value3: "- Language: Javascript, C#",
            project_tech_value4: "- Framework: ASP.NET Core 7 MVC",
            project_tech_value9: "- Software: Visual Studio 2022",
            project_tech_value10: "- Protocol: SMTP (Send Email)",
            project_tech_value13: "- Other: ",
            project_tech_value14: "+Payment processor: Stripe",
            project_tech_value15: "+Login using social media ",
            project_source_title: "Link Source Code",
            project_source_value: "https://github.com/phongvan-1412/PVStores.git",
            project_video_link: "https://www.youtube.com/embed/IMMFNR9uQcc",
            project_img: "'../img/image6.jpg'",
            index: 3,
            id: 6
        },
        {
            project_name_title: "Project Name",
            project_name_value: "Portfolio",
            project_time_title: "Time",
            project_time_value: "08/22",
            project_label_title: "Label",
            project_label_value: "Web Application",
            project_team_size_title: "Position",
            project_team_size_value: "Front-end",
            project_description_title: "Description",
            project_description_value1: "- I created this portfolio to keep all my projects I've made.",
            project_tech_title: "Technologies & Software:",
            project_tech_value1: "- Manage source code: Github",
            project_tech_value2: "- Database: SQL Server 2019",
            project_tech_value3: "- Language: Javascript, C#",
            project_tech_value4: "- Framework: React abd ASP.NET Core 7",
            project_tech_value9: "- Software: Visual Studio 2022",
            project_tech_value10: "- Service: EmailJS",
            project_source_title: "Link Source Code",
            project_source_value: "https://github.com/phongvan-1412/MyCV.git",
            project_video_link: "https://www.youtube.com/embed/JZxkYGVjjAs",
            project_img: "'../img/image7.jpg'",
            index: 3,
            id: 7
        },
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
            console.log(test);

        })

        console.log(test);
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
                        <li>DOWNLOAD CV
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
                                        <img style={{backgroundImage: `url(${process.env.PUBLIC_URL + test.project_img})`}} />
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
                                            <img style={{backgroundImage: `url(${process.env.PUBLIC_URL + test.project_img})`}} />
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
                                            <img style={{backgroundImage: `url(${process.env.PUBLIC_URL + test.project_img})`}} />
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