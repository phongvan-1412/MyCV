import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import $ from 'jquery';

import MyCV from "../data/MyCV.pdf";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

class Contact extends Component {
    state={
        contacts: [
            {
                contacts_icon: "fa fa-map",
                contacts_title: "Address Point",
                contacts_content: "Phu My Thuan Apartment, Huynh Tan Phat Str, HCM city, Viet Nam"
            },
            {
                contacts_icon: "fa fa-envelope-open",
                contacts_title: "Email Me",
                contacts_content: "bichvanphamnguyen1412@gmail.com"
            },
            {
                contacts_icon: "fa fa-phone-square",
                contacts_title: "Call Me",
                contacts_content: "+84 902 450 647"
            }
        ]
    }
    render(){
        // Captcha 
        let allCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
                             'O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b',
                             'c','d','e','f','g','h','i','j','k','l','m','n','o','p',
                             'q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];
                    
        function getCaptcha(){
            let capcha = "";
            for(let i = 0; i < 6; i++){
                let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
                capcha+= ` ${randomChar}`;
            }
            return capcha;
        }
        
        let temp = getCaptcha();
        const onClick = () => {
            const temp1 = getCaptcha();
            document.querySelector(".captcha-content").innerHTML = temp1;
            temp=temp1;
        } 

        const disable = () => {
            $("#status-text").text("");
            onClick();
            $(".input-captcha").val("");
            $(".button-check-icon").css("display", "none");
            $(".button-contact").css("display", "none");
            $("#thank-txt").text("");
        }

        const checkInput = (e) => {
            document.querySelector(".button-check-icon").style.display = "block";
        }

        const checkCaptcha = (e) => {
            e.preventDefault();
            if(temp.replace(/ /g, "") === $(".input-captcha").val()){
                $("#status-text").text("Nice! It seems like you're not a robot"); 
                $("#status-text").css("display", "block");
                $("#status-text").css("color", "green");
                $(".button-contact").css("display", "block");
                setTimeout(disable, 10000);

            }else{
                $("#status-text").text("Captcha not matched. Please try again!");  
                $("#status-text").css("display", "block");
                $("#status-text").css("color", "red");
                setTimeout(disable, 1000);
            }
        }

        // Send Email 
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('phongvan_1412', 'template_2qfy44l', e.target, 'e-1E9vepB3la1PGys')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                e.target.reset();
            };

        const thankTxt = () => {
            if($("#inputName").val() !== "" && $("#inputEmail").val() !== "" && $("#inputText").val()  !== "" && $("#inputSubject").val() !== ""){
                $("#thank-txt").text("Thank you for contact me. Have a great day!");
                $("#thank-txt").css("color", "green");
            }else{
                $("#thank-txt").text("Please fill in required field!");
                $("#thank-txt").css("color", "red");
            }
        }
        return(
            <div className="container-fluid contact-wrapper" 
                 data-aos="fade-up"
                 data-aos-duration="1200">
                    <div className="contact-title-section text-left text-sm-center">
                        <h1>get in
                            <span> touch</span>
                        </h1>
                        <span className="contact-title-bg text-left text-sm-center">Contact</span>
                    </div>
    
                    <div className="container contact-main-content ">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <h3 className="text-uppercase mb-0 ft-wt-600 pb-3 contact-custom-title">Don't be shy!</h3>
                                <p className="mb-4" style={{color: "#fff"}}>
                                    Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>

                                {this.state.contacts.map((contact, index) => {
                                    return(
                                        <p className="position-relative contact-custom-span" key={index}>
                                            <i className={contact.contacts_icon}></i>
                                            <span className="d-block">{contact.contacts_title}</span>
                                            {contact.contacts_content}
                                        </p>
                                    )
                                })}
                                <hr />
                                
                                <a href={MyCV} download className="download-link">DOWNLOAD 
                                    <i className="fa-solid fa-download download-icon"></i>
                                </a>

                                <hr />
                            </div>
                            
                            <div className="col-12 col-lg-8">
                                <form id="myForm" className="contact-form" onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input type="text" 
                                                       id="inputName"
                                                       name="name"
                                                       placeholder="YOUR NAME"
                                                       required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input type="email" 
                                                       id="inputEmail"
                                                       name="email"
                                                       placeholder="YOUR EMAIL"
                                                       required/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                       id="inputSubject"
                                                       name="subject"
                                                       placeholder="YOUR SUBJECT"
                                                       required/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    id="inputText"
                                                    name="message"
                                                    placeholder="YOUR MESSAGE"
                                                    required>
                                                </textarea>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 col-md-6">
                                            <div className="form-group captcha-wrapper">
                                            <div className="captcha-img-wrapper">
                                                <img style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "../img/captcha.jpg"})` }} />
                                                    <span className="captcha-content" value={temp}>{temp}</span>
                                                </div>
                                                <button className="button-reload-icon fa-solid fa-rotate-right" name="button-reload" onClick={onClick}></button>
                                            </div>
                                            
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <div className="form-group captcha-check-wrapper">
                                                <input className="input-captcha" type="text" placeholder="Enter Captcha" maxLength="6"  onChange={checkInput} required/>
                                                <button className="button-check-icon" onClick={checkCaptcha}>Check</button>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <span id="status-text"></span>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="button-contact" onClick={thankTxt}>
                                                <span className="button-contact-text">Send Message</span>
                                                <span className="button-contact-icon fa fa-send"></span>
                                            </button>
                                        </div>

                                        <div className="col-12" style={{marginTop: "25px"}}>
                                            <span id="thank-txt"></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        ) 
    }
    
}

export default Contact;